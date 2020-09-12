'use strict'
const Database = use('Database')
const Gamer = use('App/Models/Gamer')
const Hash = use('Hash')
const GamerUtil = use('../../../util/gamerjectUtil')
const GamerUtil = require("../../../util/gamerUtil")
const gamerValidator = require("../../../service/GamerValidator")

class GamerController {
    async index({ request }){
        const { references } = request.qs
        const gamerUtil = new GamerUtil(Gamer)
        const gamer = await gamerUtil.getAll(references)
        return { status:200,error:undefined,data:gamer }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const gamerUtil = new GamerUtil(Gamer)
        const gamer = await gamerUtil.getById(id, references)
        return {
          status: 200,
          error: undefined,
          data: gamer
        }
    }
    async store({ request }) {
        const { name, gamer_id } = request.body
        const { references } = request.qs
        const gamerUtil = new GamerjectUtil(Gamer)
        const gamer = await gamerUtil.create({ name, gamer_id,references}, references)
        return { stauts: 200, error: undefined, data:gamer }
      }

    async update({ request }) {
        const { body, params } = request
        const gamerUtil = new GamerUtil(Gamer)
        const gamer = await gamerUtil.update(body,params,references)
        return { status: 200, error: undefined, data: gamer }
      }

      async destroy({ request }) {
        const { id } = request.params
        const gamerUtil = new GamerUtil(Gamer)
        const gamer = await gamerUtil.destroy(id,gamers,references)
        return{ status: 200, error: undefined, data: gamer}
    }
}
module.exports = GamerController
