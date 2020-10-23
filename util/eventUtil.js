const { format } = require("mysql")
const EventValidator = require("../../../service/EventValidator")
// const Subject = use("App/Models/Subject")
const Database = use('Database')
class EventUtil{
    _withReference (instance, references) {
        if (references) {
          const extractedReferences = references.split(",")
          instance.with(extractedReferences)
        }
        return instance
      }

    constructor(EventModel,ClientsModel){
        this._Event = EventModel
        this._Client = ClientsModel
    }

    getAll(references){
        const event = this._Event.query()
        return this._withReference(event,references).fetch()
        }
    getById(eventId,references){

        const event = this._Event
            .query()
            .where('event_id',eventId)
        return this._withReference(event,references)
            .fetch()
            .then(response => response.first())
}

  async getStatus(references){
    return Database.select('*').from('events'),references
  }
  async create (eventInstance, references) {
      const { event_id } = await this._Event.create(eventInstance.body)
      const event = this._Event
        .query()
        .where('event_id', event_id)
      return this._withReference(event,references)
        .fetch()
        .then(response => response.first())
    }

    async update(eventInstance,references){
      this._validation(Event)
      const { id } = eventInstance.params
      let events = await this._Event.find(id)
      if(!events){
          return {status : 500 ,error : `Not Found ${id}` , data : undefined};
      }
      events.merge(eventInstance.body)
      await events.save();

      events = this._Event.query().where({event_id : id})
      return this._withReference(events,references).fetch().then(response => response.first())
  }
    async deleteById(eventInstance){
      const { id } = eventInstance.params
      const events = await this._Event.find(id)
      if(!events){
          return {status : 500 ,error : `Not Found ${id}` , data : undefined};
      }
      events.delete()
      await events.save();

      return {status : 200 ,error : undefined , data : 'complete'};
  }

}
module.exports = EventUtil
