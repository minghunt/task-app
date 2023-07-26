import request from "supertest"
import app from "../src/app"
import { userOne,userTwo, userOneId, taskOne, taskTwo, taskThree, setupDatabase } from "./fixtures/db.js"
import Task from "../src/model/task"

beforeEach(async()=>{
    await setupDatabase()
},7000)

test('Should create task for user', async ()=>{
    const response = await request(app)
    .post('/tasks')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        description:'Hung'
    }) 
    .expect(201)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})
 
 
test('Should get tasks for user', async ()=>{
    const response = await request(app)
    .get('/tasks')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send() 
    .expect(200)
    expect(response.body.length).toEqual(2) 
})

test('Should not delete task of other user', async ()=>{
    const response = await request(app)
    .delete('/tasks/'+taskOne._id)
    .set('Authorization',`Bearer ${userTwo.tokens[0].token}`)
    .send() 
    .expect(404)

})