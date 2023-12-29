import express from 'express'
import bodyParser from 'body-parser'
import configViewEngine from './config/viewEngine.js'
import initWebRoutes from './route/web.js'
import {} from 'dotenv/config'



const port = process.env.SEVER_PORT || 8888
const host = process.env.SERVER_HOST || 'localhost'

const app = express()

// config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
configViewEngine(app)

// routes
initWebRoutes(app)


app.listen(port,() => console.log(`the gateway is connected on port http://${host}:${port}`))