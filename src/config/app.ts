import express from 'express'
import 'express-async-errors'

// import { apiRoutes } from './routes'

const app = express()

app.use(express.json())

// apiRoutes(app)

export { app }
