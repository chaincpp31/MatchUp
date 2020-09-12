'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GamerSchema extends Schema {
  up () {
    this.create('gamers', (table) => {
      table.increments("gamer_id")
      table.string("name").notNullable()
      table.string("user_name").notNullable()
      table.string("password").notNullable()
      table.string("first_name").notNullable()
      table.string("last_name").notNullable()
      table.string("email").notNullable()
      table.string("phone_number").notNullable()
      table.integer("age").notNullable()
      table.string("birth_day")
      table.integer("event_id").unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('gamers')
  }
}

module.exports = GamerSchema
