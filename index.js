import express from 'express'
import ConnectDB from './src/db/mongoose.js'
import userRouter from './src/routers/user.js'
import taskRouter from './src/routers/task.js'

const app = express()
const PORT = process.env.PORT || 3000

ConnectDB()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

const myFunc = async () => {

}
myFunc() 