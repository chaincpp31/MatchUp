'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EventsGamer extends Model {
    static get primaryKey(){
        return 'organizer_id'
    }

    static get createdAtColumn(){
        return null ;
    }

    static get updatedAtColumn(){
        return null ;
    }

    events(){
        return this.belongsToMany('App/Models/Event')
    }

    clients(){
        return this.belongsTo('App/Models/Clients')
    }

}

module.exports = EventsGamer
