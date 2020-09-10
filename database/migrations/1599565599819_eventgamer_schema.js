'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventGamerSchema extends Schema {
  up () {
    this.create('eventgamers', (table) => {
      table.increments()
      table.string("gamer_id")
      table.string("event_id")
      table.timestamps()

      table.foreign('event_id')
        .references('events.event_id')
        .onDelete('CASCADE') // ON DELETE CASCADE
        .onUpdate('CASCADE') // ON UPDATE CASCADE
    })
  }

  down () {
    this.drop('eventgamers')
  }
}

module.exports = EventGamerSchema
