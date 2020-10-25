'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventGamerSchema extends Schema {
  up () {
    this.create('eventgamers', (table) => {
      table.increments()
      table.integer("gamer_id").unique().unsigned()
      table.integer("event_id").unsigned()

      table.foreign('event_id')
        .references('events.events_id')
        .onDelete('CASCADE') // ON DELETE CASCADE
        .onUpdate('CASCADE') // ON UPDATE CASCADE
      table.timestamps();
    })
  }

  down () {
    this.drop('eventgamers')
  }
}

module.exports = EventGamerSchema
