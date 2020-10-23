'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
    static get primaryKey(){
        return 'event_id'
    }

    static get createdAtColumn(){
        return null ;
    }

    static get updatedAtColumn(){
        return null ;
    }

    eventGamer(){
      return this.hasMany('App/Models/Events')
    }

    clients(){
        return this.belongsToMany('App/Models/Clients')
    }
    // organizers(){
    //     return this.belongsToMany('App/Models/Organizer')
    // }
}

module.exports = Event
