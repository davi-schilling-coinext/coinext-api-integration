import './config/module-alias'
import 'express-async-errors'
import { Express } from 'express'

import { app } from '@/config/app'
import { socket } from './config/socket'


const start = async (app: Express): Promise<void> => {
  // const port = process.env.PORT
  try {    
    socket()

    // app.listen(port, () => {
    //   console.log(`Running server on port ${port}`)
    // })
  } catch (err) {
    console.log(err)
  }
}

start(app)
