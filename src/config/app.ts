import cors from 'cors'
import express from 'express'
import WebSocket from 'ws'

const ws = new WebSocket(process.env.WS_GATEWAY || '')

const app = express()

app.use(cors());

export { app, ws }
