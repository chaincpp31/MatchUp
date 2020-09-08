'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GamerSchema extends Schema {
  up () {
    this.create('gamers', (table) => {
      table.increments("gamer_id")
      table.string("user_name")
      table.string("password")
      table.string("first_name")
      table.string("last_name")
      table.string("email")
      table.string("phone_number")
      table.integer("age").unsigned()
      table.string("birth_day")
      table.timestamps()
    })
  }

  down () {
    this.drop('gamers')
  }
}

module.exports = GamerSchema
