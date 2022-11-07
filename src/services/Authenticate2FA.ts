import { ServicesPayloadTypes, WSGatewayServiceTypes } from '@/config/services';
import WebSocket from 'ws'
import readlineSync from 'readline-sync'

export const authenticate2FA = (ws: WebSocket): void => {
  const code = readlineSync.question('Google auth code? ')
  const payload: ServicesPayloadTypes.AUTHENTICATE_2FA = {
    Code: code
  }
  const frame = {
    'm': 0,
    'i': 2,
    'n': WSGatewayServiceTypes.AUTHENTICATE_2FA,
    'o': JSON.stringify(payload)
  }
  ws.send(JSON.stringify(frame))
}