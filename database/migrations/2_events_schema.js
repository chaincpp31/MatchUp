'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments('events_id')
      table.string('name_event').notNullable()
      table.integer("clients_id").notNullable().unsigned()
      table.timestamp('date_events').notNullable().unique()

      table.foreign('clients_id')
        .references('clients.clients_id')
        .onDelete('CASCADE') // ON DELETE CASCADE
        .onUpdate('CASCADE') // ON UPDATE CASCADE


    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventsSchema
