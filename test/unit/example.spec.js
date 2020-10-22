'use strict'
const GamerValidator = require('../../service/GamerValidator')
const { test } = use('Test/Suite')('Example')

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})

test('should return only one error if single incorrect data is passed',async({ assert })=>{
  const validatedData = await GamerValidator({
      first_name:"John",
      last_name:"Doe",
      email:"john@email.com",
      password:"1234567"})
  assert.equal(validatedData.error.length,9)

})
