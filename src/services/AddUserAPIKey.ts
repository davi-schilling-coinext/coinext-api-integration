import { ServicesPayloadTypes, WSGatewayServiceTypes } from '@/config/services';
import { UserAuth } from '@/config/userAuth';
import WebSocket from 'ws';

export const addUserAPIKey = (ws: WebSocket, user: UserAuth): void => {
  const payload: ServicesPayloadTypes.ADD_USER_API_KEY = {
    "UserId": Number(user.userId()),
    "Permissions": ["Trading"],
    "aptoken": String(user.sessionToken()),
  }
  const frame = {
    'm': 0,
    'i': 2,
    'n': WSGatewayServiceTypes.ADD_USER_API_KEY,
    'o': JSON.stringify(payload)
  }
  ws.send(JSON.stringify(frame))
}