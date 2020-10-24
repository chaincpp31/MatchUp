'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsGamersSchema extends Schema {
  up () {
    this.create('events_gamers', (table) => {
      table.increments('events_gamers_id')
      table.integer("events_id").unsigned().notNullable()
      table.integer("clients_id").unsigned()

      table.foreign('events_id')
      .references('events.events_id')
        .onDelete('CASCADE') // ON DELETE CASCADE
        .onUpdate('CASCADE') // ON UPDATE CASCADE

      table.foreign('clients_id')
      .references('clients.clients_id')
        .onDelete('CASCADE') // ON DELETE CASCADE
        .onUpdate('CASCADE') // ON UPDATE CASCADE
      table.timestamps()
    })
  }

  down () {
    this.drop('events_gamers')
  }
}

module.exports = EventsGamersSchema
