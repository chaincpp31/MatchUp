'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments("clients_id")
      table.string("name").notNullable()
      table.string("user_name").notNullable()
      table.string("password").notNullable()
      table.string("first_name").notNullable()
      table.string("last_name").notNullable()
      table.string("email").notNullable()
      table.integer("phone_number").notNullable()
      table.integer("age").notNullable()
      table.string("birth_day").notNullable()
      table.string("status").notNullable()
      // table.string("cover_image_url").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
