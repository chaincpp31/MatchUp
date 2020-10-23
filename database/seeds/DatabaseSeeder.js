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
    const clients = await Factory
      .model('App/Models/Clients')
      .createMany(10)

    const eventsGamers = await Factory
    .model('App/Models/EventsGamer')
    .createMany(10)

    const events = await Factory
    .model('App/Models/Event')
    .makeMany(50)


    let currentEventIndex = 0;
    const eventPerIteraction = 2;

    for (const eventsGamer of eventsGamers){
      const selectedEvents = events.slice(
        currentEventIndex,
        currentEventIndex + eventPerIteraction
      )
      await eventsGamer
      .events()
      .saveMany(selectedEvents)

      currentEventIndex += eventPerIteraction
    }

      let currentClientsIndex = 0;
      const clientsPerIteraction = 2;

      for (const client of clients) {
        const selectedClients = events.slice(
          currentClientsIndex,
          currentClientsIndex + clientsPerIteraction
        )
        await client
          .events()
          .saveMany(selectedClients)

        currentClientsIndex += clientsPerIteraction
    }
  }
}

module.exports = DatabaseSeeder
