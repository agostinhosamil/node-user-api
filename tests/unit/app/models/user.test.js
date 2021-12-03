// const { User } = require ('../../../../src/app/models')
const request = require ('supertest')

describe ('user creation', () => {
  it ('should create a user', async () => {
    // const user = { email: 'john.doe@gmail.com' }
    
    const { app } = require ('../../../../src/app')
    const response = request (app)
      .get ('/users')

    expect (response.status).toBe (200)
  })
})