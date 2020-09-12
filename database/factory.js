'use strict'

const { first } = require('../app/Models/Gamer')

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Gamer', (faker) => {
    return{
        name : faker.name(),
        user_name : faker.name(),
        password : faker.word({length : 8}),
        first_name : faker.first(),
        last_name : faker.last(),
        email : faker.email(),
        phone_number : faker.phone(),
        age : faker.age(),
        birth_day : faker.date()

    }
})
Factory.blueprint('App/Models/Organizer', (faker) => {
    return{
        name: faker.name(),
        user_name: faker.name(),
        password: faker.word({ length: 8 }),
        first_name: faker.first(),
        last_name: faker.last(),
        email: faker.email(),
        phone_number: faker.phone(),
        age: faker.age(),
        birth_day: faker.date()
    }
})
Factory.blueprint('App/Models/Event',(faker) =>{
    return{
        name_event: faker.sentence(),
        date_of_event: faker.date()
    }
})
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
