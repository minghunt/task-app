import express from 'express'
import ConnectDB from './db/mongoose.js'
import userRouter from './routers/user.js'
import taskRouter from './routers/task.js'
import cors from 'cors'
const app = express()

ConnectDB()

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
export default app