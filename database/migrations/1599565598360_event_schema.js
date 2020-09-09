'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments("event_id")
      table.integer("oganizer_id").unsigned().unsigned()
      table.integer("gamer_id").unsigned().unsigned()
      table.string("name_event").notNullable()
      table.string("date_of_event").notNullable()
      table.timestamps()

      // table.foreign('oganizer_id')
      // .references('events.oganizer_id')
      //   .onDelete('CASCADE') // ON DELETE CASCADE
      //   .onUpdate('CASCADE') // ON UPDATE CASCADE

      // table.foreign('gamer_id')
      // .references('gamers.gamer_id')
      //   .onDelete('CASCADE') // ON DELETE CASCADE
      //   .onUpdate('CASCADE') // ON UPDATE CASCADE
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
