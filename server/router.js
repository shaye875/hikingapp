import express from'express'
import { checkTemp } from './post.js'

export const routeTemp = express()

routeTemp.use(express.json())

routeTemp.post("/check-weather",(req,res)=>{
     const body = req.body
     const result = checkTemp(body)
     res.json(result)
})