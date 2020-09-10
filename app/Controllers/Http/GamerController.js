'use strict'
const Database = use('Database')
const Gamer = use('App/Models/Gamer')
const GamerUtil = use('../../../util/gamerjectUtil')
class GamerController {
    async index({ request }){
        // subjects?references=teachers
        const { references } = request.qs
        console.log(references)
        const gamerUtil = new GamerUtil()
        const gamers = await gamerUtil.getAll(references)
        return { status:200,error:undefined,data:await gamers.fetch() }
    }
}

module.exports = GamerController
