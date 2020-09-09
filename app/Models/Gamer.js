'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Gamer extends Model {
    static get primaryKey(){
        return 'gamer_id' //เพื่อไม่ให้ defaultเป็นชื่อ 'id'
    }

    static get createdAtColumn(){
        return null ;
    }
    
    static get updatedAtColumn(){
        return null ;
    }

    Events(){
        return this
        .belongsToMany('App/Model/Event')
        .pivotModel('App/Model/Gamer') 
    }
}

module.exports = Gamer
