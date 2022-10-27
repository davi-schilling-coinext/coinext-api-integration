import './config/module-alias'
import 'express-async-errors'
import { app, ws } from '@/config/app'
import { Express } from 'express'
import WebSocket from 'ws'
// import readlineSync from 'readline-sync'

const start = async (app: Express, ws: WebSocket): Promise<void> => {
  const port = process.env.PORT

  try {    
    ws.onopen = () => {
      // const email = readlineSync.questionEMail()
      // const password = readlineSync.questionNewPassword()

      const payload = {
        "OMSId": 1,
        "InstrumentId": 1,
        "Interval": 60,
        "IncludeLastCount": 10
      }
    
      const frame = {
        'm': 0,
        'i': 2,
        'n': 'SubscribeTicker',
        'o': JSON.stringify(payload)
      }
    
      ws.send(JSON.stringify(frame))
    }
    
    ws.onerror = (error) => {
      console.error('error!!', error)
    }
    
    ws.onmessage = (msg: any) => {
      // process.stdout.write('\x1Bc')
      console.log('\x1Bc');
      console.log(JSON.parse(msg.data)['o'])
      // console.log(JSON.parse(msg.data))
    }
    app.listen(port, () => {
      console.log(`Running server on port ${port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start(app, ws)
