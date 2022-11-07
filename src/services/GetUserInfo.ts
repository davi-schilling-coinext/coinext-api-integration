import { FrameType, ServicesPayloadTypes, WSGatewayServiceTypes } from '@/config/services';

export const getUserInfo = (frame: FrameType, aptoken?: string): FrameType => {
  const payload: ServicesPayloadTypes.GET_USER_INFO = {
    aptoken: ''
  }
  frame.n = WSGatewayServiceTypes.GET_USER_INFO
  frame.o = JSON.stringify(payload)
  return frame
}