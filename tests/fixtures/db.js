import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import User from "../../src/model/user"
import Task from "../../src/model/task"
const userOneId = new mongoose.Types.ObjectId()

const userOne ={
    _id:userOneId,
    name:'Hung AcWy',
    email:'minhhung.0163@gmail.com',
    password:'hungacwy666',
    age:21,
    tokens:[{
        token:jwt.sign({_id:userOneId},process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()

const userTwo ={
    _id:userTwoId,
    name:'Hung AcWy666',
    email:'minhhung6543@gmail.com',
    password:'hungacwy666',
    age:21,
    tokens:[{
        token:jwt.sign({_id:userTwoId},process.env.JWT_SECRET)
    }]
}

const taskOne={
    _id:new mongoose.Types.ObjectId(),
    description:'Fisrt task',
    completed:true,
    owner:userOne._id
}

const taskTwo={
    _id:new mongoose.Types.ObjectId(),
    description:'Seconnd task',
    completed:true,
    owner:userOne._id
}

const taskThree={
    _id:new mongoose.Types.ObjectId(),
    description:'Third task',
    completed:true,
    owner:userTwo._id
}
const setupDatabase =async ()=>{
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save() 
    await new Task(taskTwo).save() 
    await new Task(taskThree).save() 
}
export {userOneId, userOne, userTwo,taskOne, taskTwo, taskThree, setupDatabase}