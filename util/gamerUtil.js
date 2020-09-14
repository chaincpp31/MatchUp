const Gamer = require("../app/Models/Gamer")
// const Subject = use("App/Models/Subject")
const gamerValidator = require("../service/GamerValidator")
class GamerUtil{
    _withReference (instance, references) {
        if (references) {
          const extractedReferences = references.split(",")
          instance.with(extractedReferences)
        }
        return instance
    }
    _validation(gamerValidator){
        if (validatedData.error)
      return { status: 422, error: validatedData.error, data: undefined }
    }
    async _event(eventId){
      const { id } = eventId.params 
      let event = await this._Organizer.find(id)
      if(!event){
        return {status : 500 ,error : `Not Found ${id} Event` , data : undefined};
    }
  }
    constructor(GamerModel){
        this._Gamer = GamerModel
    }
    getAll(references){
        const gamer = this._Gamer.query()
        return this._withReference(gamer,references).fetch()
        }        
    getById(gamerId,references){
        this._validation(Gamer)
        const gamer = this._Gamer
            .query()
            .where('gamer_id',gamerId)
        return this._withReference(gamer,references)
            .fetch()
            .then(response => response.first())
}
  async create (gamerInstance, references) {
      const { gamer_id } = await this._Gamer.create(gamerInstance.body)
      const gamer = this._Gamer
        .query()
        .where('gamer_id', gamer_id)
      return this._withReference(gamer, references)
        .fetch()
        .then(response => response.first())
    }
    
    async update(gamerInstance,references){
      const { id } = gamerInstance.params
      this._event(id)
      let gamers = await this._Gamer.find(id)
      if(!gamers){
          return {status : 500 ,error : `Not Found ${id}` , data : undefined};
      }
      gamers.merge(gamerInstance.body)
      await gamers.save();
  
      gamers = this._Gamer.query().where({gamer_id : id})
      return this._withReference(gamers,references).fetch().then(response => response.first())
  }
    async deleteById(gamerInstance){
      const { id } = gamerInstance.params
      const gamers = await this._Gamer.find(id)
      if(!gamers){
          return {status : 500 ,error : `Not Found ${id}` , data : undefined};
      }
      gamers.delete()
      await gamers.save();
      return {status : 200 ,error : undefined , data : 'complete'};
  } 
}
module.exports = GamerUtil 