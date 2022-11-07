export enum WSGatewayServiceTypes {
  LOG_OUT = 'LogOut',
  SUBSCRIBE_TICKER = 'SubscribeTicker',
  GET_L2_SNAPSHOT = 'GetL2Snapshot',
  AUTHENTICATE_USER = 'AuthenticateUser',
  WEB_AUTHENTICATE_USER = 'WebAuthenticateUser',
  AUTHENTICATE_2FA = 'Authenticate2FA',
  ADD_USER_API_KEY = 'AddUserAPIKey',
  GET_USER_INFO = 'GetUserInfo',
}

export type FrameType = {
  m: number
  i: number
  n: string
  o: string
}

export namespace ServicesPayloadTypes {
  // Public services
  export type SUBSCRIBE_TICKER = SUBSCRIBE_TICKER_PAYLOAD
  export type GET_L2_SNAPSHOT = GET_L2_SNAPSHOT_PAYLOAD
  export type ADD_USER_API_KEY = ADD_USER_API_KEY_PAYLOAD

  // Authenticated services
  export type SIMPLE_WEB_AUTHENTICATE_USER = SIMPLE_WEB_AUTHENTICATE_USER_PAYLOAD
  export type API_KEY_WEB_AUTHENTICATE_USER = API_KEY_WEB_AUTHENTICATE_USER_PAYLOAD
  
  export type AUTHENTICATE_2FA = AUTHENTICATE_2FA_PAYLOAD
  export type GET_USER_INFO = GET_USER_INFO_PAYLOAD
}

type SUBSCRIBE_TICKER_PAYLOAD = {
  OMSId: number
  InstrumentId: number
  Interval: number
  IncludeLastCount: number
}

type GET_L2_SNAPSHOT_PAYLOAD = {
  OMSId: number
  InstrumentId: number
  Depth: number 
}

type ADD_USER_API_KEY_PAYLOAD = {
  UserId: number
  Permissions: string[]
  aptoken: string
}

type SIMPLE_WEB_AUTHENTICATE_USER_PAYLOAD = {
  UserName: string
  Password: string
}

type API_KEY_WEB_AUTHENTICATE_USER_PAYLOAD = {
  APIKey: string
  Signature: string
  UserId: string
  Nonce: string
}

type AUTHENTICATE_2FA_PAYLOAD = {
  Code: string
}

type GET_USER_INFO_PAYLOAD = {
  aptoken: string
}