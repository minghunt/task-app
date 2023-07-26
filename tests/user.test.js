// import request from "supertest"
// import app from "../src/app"
// import User from "../src/model/user"
// import { userOne, userOneId, setupDatabase } from "./fixtures/db.js"


// beforeEach(async()=>{
//     await setupDatabase()
// })

// test('Should signup a new user', async ()=>{
//     await request(app).post('/users').send({
//         name:'Hung',
//         email:'minghunt.0163@gmail.com',
//         password:'12345678'
//     }).expect(201)
// })

// test('Should login a existing user', async ()=>{
//     const response = await request(app).post('/users/login').send({
//         email:userOne.email,
//         password:userOne.password
//     }).expect(200)

//     const user = await User.findById(userOneId)
//     expect(response.body.token).toBe(user.tokens[1].token)
// })

// test('Should not login a nonexisting user', async ()=>{
//     await request(app).post('/users/login').send({
//         email:'',
//         password:''
//     }).expect(400)
// })

// test('Should get profile for user', async ()=>{
//     await request(app).get('/users/me')
//     .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
//     .send()
//     .expect(200)
// })

// test('Should not get profile for unauthenticated user', async ()=>{
//     await request(app).get('/users/me')
//     .send()
//     .expect(401)
// })

// test('Should delete account for user', async ()=>{
//     await request(app).delete('/users/me')
//     .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
//     .send()
//     .expect(200)

//     const user = await User.findById(userOneId)
//     expect(user).toBeNull()
// })

// test('Should not delete account for unauthenticated user', async ()=>{
//     await request(app).delete('/users/me')
//     .send()
//     .expect(401)
// })

// test('Should upload avatar image', async ()=>{
//     await request(app)
//     .post('/users/me/avatar')
//     .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
//     .attach('avatar','tests/fixtures/Untitled.png')
//     .expect(200)
//     const user = await User.findById(userOneId)
//     expect(user.avatar).toEqual(expect.any(Buffer))
// })

// test('Should update valid user fields', async ()=>{
//     await request(app)
//     .patch('/users/me')
//     .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
//     .send({
//         name:'Hunt'
//     })
//     .expect(200)
//     const user = await User.findById(userOneId)
//     expect(user.name).toEqual('Hunt')
// })

// test('Should not update invalid user fields', async ()=>{
//     await request(app)
//     .patch('/users/me')
//     .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
//     .send({
//         location:'Hunt'
//     })
//     .expect(400)
// })
 