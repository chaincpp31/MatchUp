'use strict'
const Organizer = use('App/Models/Gamer')
const OrganizerUtil = require("../../../util/organizerUtil")
class OrganizerController {
    async index({ request }){
        const { references } = request.qs
        const  organizerUtil = new OrganizerUtil(Organizer)
        const organizer = await organizerUtil.getAll(references)
        return { status:200,error:undefined,data:organizer }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const organizerUtil = new OrganizerUtil(Organizer)
        const organizer = await organizerUtil.getById(id, references)
        return {
          status: 200,
          error: undefined,
          data: organizer
        }
    }
    async store({ request }) {
        const { name, organizer_id } = request.body
        const { references } = request.qs
        const organizerUtil = new OrganizerUtil(Organizer)
        const organizer = await organizerUtil.create(request,references)
        return { stauts: 200, error: undefined, data:organizer }
      }

    async update({ request }) {
        const { references = undefined } = request.qs
        const organizerUtil = new OrganizerUtil(Organizer)
        const organizer = await organizerUtil.update(request,references)
        return { status: 200, error: undefined, data: organizer }
      }

      async destroy({ request }) {
        const { references=undefined } = request.qs
        const organizerUtil = new OrganizerUtil(Organizer)
        const organizer = await organizerUtil.deleteById(request,references)
        return{ status: 200, error: undefined, data: organizer}
    }
}

module.exports = OrganizerController
