import { WSGatewayServiceTypes } from '@/config/services';
import { addUserAPIKey, getL2Snapshot, subscribeTicker, webAuthenticateUser } from '@/services';
import readlineSync from 'readline-sync';
import WebSocket from 'ws';

export const publicServices = (ws: WebSocket): void => {
  const frame = {
    'm': 0,
    'i': 2,
    'n': '',
    'o': ''
  }
  const service = readlineSync.question(`
    what available service do you want to use? \b
    (1) ${WSGatewayServiceTypes.SUBSCRIBE_TICKER} \b
    (2) ${WSGatewayServiceTypes.GET_L2_SNAPSHOT} \b
    (exit) press ENTER
  `)
  switch(service) {
    case '1':
      ws.send(JSON.stringify(subscribeTicker(frame)))
      break
    case '2':
      ws.send(JSON.stringify(getL2Snapshot(frame)))
      break
    default:
      ws.close()
  }
}