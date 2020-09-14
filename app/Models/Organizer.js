'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Organizer extends Model {
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
        return this.hasMany('App/Models/Event')
    }

    gamers(){
        return this.hasMany('App/Models/Gamer')
    }

}

module.exports = Organizer
