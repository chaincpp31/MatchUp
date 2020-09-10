'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
    const gamers = await Factory
      .model('App/Models/Gamer')
      .createMany(100)

    const organizers = await Factory
    .model('App/Models/Organizer')
    .createMany(100)

    // const events = await Factory
    // .model('App/Models/Event')
    // .createMany(50)
  }
}

module.exports = DatabaseSeeder
