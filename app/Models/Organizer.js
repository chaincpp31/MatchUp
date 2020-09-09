'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Organizer extends Model {
    static get primaryKey(){
        return 'organize_id'
    }

    static get createdAtColumn(){
        return null ;
    }
    
    static get updatedAtColumn(){
        return null ;
    }

    gamers(){
        return this.hasMany('App/Models/Event')
    }

}

module.exports = Organizer
