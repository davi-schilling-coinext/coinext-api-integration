import { ServicesPayloadTypes, WSGatewayServiceTypes } from '@/config/services';
import WebSocket from 'ws'
import readlineSync from 'readline-sync'

type AuthType = 'usernamePassword' | 'apiKey'

export type ApiKeyDataType = {
  APIKey: string
  Signature: string
  UserId: string
  Nonce: string
}

export const webAuthenticateUser = (ws: WebSocket, type: AuthType, apiKeyData?: ApiKeyDataType): void => {
  let simplePayload: ServicesPayloadTypes.SIMPLE_WEB_AUTHENTICATE_USER
  let apiKeyPayload: ServicesPayloadTypes.API_KEY_WEB_AUTHENTICATE_USER

  const frame = {
    'm': 0,
    'i': 0,
    'n': '',
    'o': ''
  }

  if (type === 'usernamePassword') {
    const email = readlineSync.questionEMail()
    // const password = readlineSync.questionNewPassword()
    const password = readlineSync.question('Input new password:')
    simplePayload = {
      UserName: email,
      Password: password
    }
    frame.n = WSGatewayServiceTypes.WEB_AUTHENTICATE_USER
    frame.o = JSON.stringify(simplePayload)
  } else if (type === 'apiKey' && apiKeyData) {
    apiKeyPayload = apiKeyData
    frame.n = WSGatewayServiceTypes.AUTHENTICATE_USER
    frame.o = JSON.stringify(apiKeyPayload)
  }
  console.log(frame);
  ws.send(JSON.stringify(frame))
}