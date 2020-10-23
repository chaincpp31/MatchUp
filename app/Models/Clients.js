'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Clients extends Model {
    static boot() {
        super.boot()

        this.addHook('beforeSave', async (gamerInstance) => {
            if (gamerInstance.dirty.password) {
                gamerInstance.password = await Hash.make(gamerInstance.dirty.password)
            }
        })
    }
    static get primaryKey(){
        return 'clients_id' //เพื่อไม่ให้ defaultเป็นชื่อ 'id'
    }

    static get createdAtColumn(){
        return null ;
    }

    static get updatedAtColumn(){
        return null ;
    }



    // Events(){
    //     return this
    //     .belongsToMany('App/Models/Event')
    //     .pivotModel('App/Models/Gamer')
    // }
    events() {
        return this.hasMany('App/Models/Event')
    }
}

module.exports = Clients
