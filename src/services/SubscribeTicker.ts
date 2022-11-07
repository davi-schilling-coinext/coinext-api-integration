import { FrameType, ServicesPayloadTypes, WSGatewayServiceTypes } from '@/config/services';

export const subscribeTicker = (frame: FrameType): FrameType => {
  const payload: ServicesPayloadTypes.SUBSCRIBE_TICKER = {
    "OMSId": 1,
    "InstrumentId": 1,
    "Interval": 60,
    "IncludeLastCount": 10
  }
  frame.n = WSGatewayServiceTypes.SUBSCRIBE_TICKER
  frame.o = JSON.stringify(payload)
  return frame
}