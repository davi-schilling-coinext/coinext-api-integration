import { WSGatewayServiceTypes } from '@/config/services';
import { UserAuth } from '@/config/userAuth';
import { getUserInfo } from '@/services';
import readlineSync from 'readline-sync';
import WebSocket from 'ws';

export const authServices = (ws: WebSocket, userAuth: UserAuth): void => {
  const frame = {
    'm': 0,
    'i': 2,
    'n': '',
    'o': ''
  }
  const service = readlineSync.question(`
    what available service do you want to use? \b
    (1) ${WSGatewayServiceTypes.GET_USER_INFO} \b
    (exit) press ENTER
  `)
  switch(service) {
    case '1':
      ws.send(JSON.stringify(getUserInfo(frame)))
      break
    default:
      ws.close()
  }
}