'use strict'
const Database = use('Database')
const Gamer = use('App/Models/Gamer')
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
        const gamerUtil = new GamerUtil(Gamer)
        const gamer = await gamerUtil.create(request,references)
        return { stauts: 200, error: undefined, data:gamer }
      }

    async update({ request }) {
        const { references = undefined } = request.qs
        const gamerUtil = new GamerUtil(Gamer)
        const gamer = await gamerUtil.update(request,references)
        return { status: 200, error: undefined, data: gamer }
      }

      async destroy({ request }) {
        const { references=undefined } = request.qs
        const gamerUtil = new GamerUtil(Gamer)
        const gamer = await gamerUtil.deleteById(request,references)
        return{ status: 200, error: undefined, data: gamer}
    }
}
module.exports = GamerController
