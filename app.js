import express from 'express'
import { routeTemp } from './server/router.js'

const app = express()

app.use(express.json())

app.use("/check-weather",routeTemp)

app.listen(3000,()=>{
    console.log("server run")
})