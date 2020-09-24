'use strict'

const { test } = use('Test/Suite')('Gamer Validator')
const gamerValidator = require ('../../service/GamerValidator')


test('should return error when pass incorrect data is not array', async ({ assert }) => {
  const validateData = await gamerValidator({
    name: "chainponlawat",
    user_name: "chain",
    password: "12345678",
    first_name: "chain",
    last_name: "ponlawat",
    email: "wrong email",
    phone_number: '0915669916',
    age: "20",
    birth_day: "31/12/2000"
  })
  // console.log (validateData)
  assert.isArray(validateData.error)

  // assert.isOk(validateData)

  // const validatedData2 = await organizerValidator
  // ("chainponlawat", "chain", "12345678", "chain","ponlawat","chain@gmail.com","20","31/12/2000")
  // assert.isNotOk(validatedData2)
})
test('should return  error if one incorrect data is passed', async ({ assert }) => {
  const validatedData = await gamerValidator({
    name: "chainponlawat",
    user_name: "chain",
    password: "12345678",
    first_name: "chain",
    last_name: "ponlawat",
    email: "wrong email",
    phone_number: "0915669916",
    age: "20",
    birth_day: "31/12/2000"
  })
  // console.log(validatedData)
  assert.isAtLeast(validatedData.error.length, 1)
})

test('should return error when have error in validator', async ({ assert }) => {
  const validatedData = await gamerValidator({
    name: "chainponlawat",
    user_name: "chain",
    password: "12345678",
    first_name: "chain",
    last_name: "ponlawat",
    email: "wrong email",
    phone_number: "0915669916",
    age: "20",
    birth_day: "31/12/2000"
  })
  // console.log(validatedData)
  assert.isOk(validatedData.error)
})

test('should return error if Data is not null', async ({ assert }) => {
  const validatedData = await gamerValidator({
    name: "chainponlawat",
    user_name: "chain",
    password: "12345678",
    first_name: "chain",
    last_name: "ponlawat",
    email: "wrong email",
    phone_number: "0915669916",
    age: "20",
    birth_day: "31/12/2000"
  })
  // console.log(validatedData)
  assert.isNotNull(validatedData.error)
})

test('should return error if Data is not null', async ({ assert }) => {
  const validatedData = await gamerValidator({
    name: "chainponlawat",
    user_name: "chain",
    password: "12345678",
    first_name: "chain",
    last_name: "ponlawat",
    email: "wrong email",
    phone_number: "0915669916",
    age: "20",
    birth_day: "31/12/2000"
  })
  // console.log(validatedData)
  assert.exists(validatedData.error)
})

test('should return error if Data is Defined', async ({ assert }) => {
  const validatedData = await gamerValidator({
    name: "chainponlawat",
    user_name: "chain",
    password: "12345678",
    first_name: "chain",
    last_name: "ponlawat",
    email: "wrong email",
    phone_number: "0915669916",
    age: "20",
    birth_day: "31/12/2000"
  })
  // console.log(validatedData)
  assert.isDefined(validatedData.error)
})

// test('should return error if Data is Defined', async ({ assert }) => {
//   const validatedData = await gamerValidator({
//     name: "chainponlawat",
//     user_name: "chain",
//     password: "12345678",
//     first_name: "chain",
//     last_name: "ponlawat",
//     email: "wrong@mail.com",
//     phone_number: "0915669916",
//     age: "20",
//     birth_day: "31/12/2000"
//   })
//   // console.log(validatedData)
//   assert.isNumber(validatedData.error)
// })