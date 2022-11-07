import { FrameType, ServicesPayloadTypes, WSGatewayServiceTypes } from '@/config/services';

export const getL2Snapshot = (frame: FrameType): FrameType => {
  const payload: ServicesPayloadTypes.GET_L2_SNAPSHOT = {
    "OMSId": 1,
    "InstrumentId": 1,
    "Depth": 100 
  }
  frame.n = WSGatewayServiceTypes.GET_L2_SNAPSHOT
  frame.o = JSON.stringify(payload)
  return frame
}