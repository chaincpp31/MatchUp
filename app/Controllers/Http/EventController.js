'use strict'
const Event = use('App/Models/Event')
const EventUtil = require("../../../util/eventUtil")
class EventController {
    async index({ request }){
        const { references } = request.qs
        const eventUtil = new EventUtil(Event)
        const event = await eventUtil.getAll(references)
        return { status:200,error:undefined,data:event }
    }
    async show({ request }) {
        const { id } = request.params
        const { references } = request.qs
        const eventUtil = new EventUtil(Event)
        const event = await eventUtil.getById(id, references)
        return {
          status: 200,
          error: undefined,
          data: event
        }
    }
    async store({ request }) {
        const { name_event, gamer_id } = request.body
        const { references } = request.qs
        const eventUtil = new EventUtil(Event)
        const event = await eventUtil.create(request,references)
        return { stauts: 200, error: undefined, data:event }
      }

    async update({ request }) {
        const { references = undefined } = request.qs
        const eventUtil = new EventUtil(Event)
        const event = await eventUtil.update(request,references)
        return { status: 200, error: undefined, data: event }
      }

      async destroy({ request }) {
        const { references=undefined } = request.qs
        const eventUtil = new EventUtil(Event)
        const event = await eventUtil.deleteById(request,references)
        return{ status: 200, error: undefined, data: event}
    }
    
}

module.exports = EventController
