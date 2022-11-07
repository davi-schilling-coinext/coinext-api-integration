import { UserAuth } from '@/config/userAuth';
import readlineSync from 'readline-sync';
import WebSocket from 'ws';
import crypto from 'crypto'

import { addUserAPIKey, ApiKeyDataType, authenticate2FA, webAuthenticateUser } from '@/services';
import { authServices, publicServices } from '@/utils';

const onDefault = (ws: WebSocket, userAuth: UserAuth) => {
  const serviceType = readlineSync.question(`
    What type of service do you want to use? \b
    (1) Authenticated \b
    (2) public \b
    (exit) press ENTER
  `)  
  if (serviceType === '1'){
    authServices(ws, userAuth)
  } else if (serviceType === '2') {
    publicServices(ws)
  } else {
    ws.close()
  }
}

export const socket = () => {
  const ws = new WebSocket(process.env.WS_GATEWAY || '')
  const userAuth = new UserAuth()

  ws.onopen = () => {
    const auth = readlineSync.question('Do you want to login into the system? (y)/(n)')
    if (auth === 'y'){
      webAuthenticateUser(ws, 'usernamePassword')
    } else if (auth === 'n') {
      publicServices(ws)
    } else {
      console.log('Not a valid answer');
    }
  }

  ws.onerror = (error) => {
    console.error('error!!', error)
  }
  
  ws.onmessage = (msg: any) => {
    const data = JSON.parse(msg.data)

    if (data['o'] === 'Endpoint Not Found'){
      const auth = readlineSync.question(`not logged in? Do you want to signin? (y)/(n)`)
      if (auth === 'y'){
        webAuthenticateUser(ws, 'usernamePassword')
      } else {
        ws.close()
      }
      return
    }

    // process.stdout.write('\x1Bc')
    // console.log('\x1Bc');
    console.log(JSON.parse(msg.data))
    // console.log(JSON.parse(msg.data))
    switch(data['n']) {
      case 'GetUserInfo':
        userAuth.fillParams(JSON.parse(data['o']))
        onDefault(ws, userAuth)
        break
      case 'WebAuthenticateUser': {
        if (!JSON.parse(data['o']).Requires2FA){
          userAuth.fillSessionToken(JSON.parse(data['o']).SessionToken)
          userAuth.fillUserId(JSON.parse(data['o']).UserId)
          addUserAPIKey(ws, userAuth)
        } else {
          authenticate2FA(ws)
        }
        break
      }
      case 'Authenticate2FA':
        userAuth.fillSessionToken(JSON.parse(data['o']).SessionToken)
        userAuth.fillUserId(JSON.parse(data['o']).UserId)
        addUserAPIKey(ws, userAuth)
        break
      case 'AddUserAPIKey': {
        const { APIKey, APISecret, UserId } = JSON.parse(data['o'])
        const nonceValue = Date.now()
        const message = `${nonceValue}${UserId}${APIKey}`

        const hash = crypto.createHmac('sha256', APISecret).update(message).digest('hex');

        const apiKeyData: ApiKeyDataType = {
          'APIKey': APIKey,
          'Signature': hash,
          'UserId': String(UserId),
          'Nonce': String(nonceValue),
        }
        webAuthenticateUser(ws, 'apiKey', apiKeyData)
      }
      case 'AuthenticateUser': {
        const { Authenticated } = JSON.parse(data['o'])
        if (Authenticated) {
          onDefault(ws, userAuth)
        }
      }
      default:
        // console.log(JSON.parse(msg.data), 'DEFAULT', data['n'])
        if (data['n'] !== 'AddUserAPIKey' && data['n'] !== 'AuthenticateUser') {
          onDefault(ws, userAuth)
        }
        break
    }
  }

  ws.onclose = () => {
    console.log('disconnected');
  }
}