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
      .createMany(10)

    const organizers = await Factory
    .model('App/Models/Organizer')
    .createMany(10)

    const events = await Factory
    .model('App/Models/Event')
    .makeMany(50)

    let currentEventIndex = 0;
    const eventPerIteration = 0;

    for (const event of events){
      const selectedEvents = events.slice(
        currentEventIndex,
        currentEventIndex + eventPerIteration
      )
      await event
      .events()
      .saveMany(selectedEvents)

      currentEventIndex += eventPerIteration
    }
  }
}

module.exports = DatabaseSeeder
