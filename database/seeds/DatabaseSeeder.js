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
    const eventPerIteraction = 2;

    for (const organizer of organizers){
      const selectedEvents = events.slice(
        currentEventIndex,
        currentEventIndex + eventPerIteraction
      )
      await organizer
      .events()
      .saveMany(selectedEvents)

      currentEventIndex += eventPerIteraction
    }

      let currentGamerIndex = 0;
      const gamerPerIteraction = 2;

      for (const gamer of gamers) {
        const selectedGamers = events.slice(
          currentGamerIndex,
          currentGamerIndex + gamerPerIteraction
        )
        await gamer
          .events()
          .saveMany(selectedGamers)

        currentGamerIndex += gamerPerIteraction
    }
  }
}

module.exports = DatabaseSeeder
