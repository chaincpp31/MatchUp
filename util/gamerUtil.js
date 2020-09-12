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
    constructor(GamerModel){
        this._Gamer = GamerModel
    }
    getAll(references){
        const gamer = this._Gamer.query()
        return this._withReference(gamer,references).fetch()
        }        
    getById(gamerId,references){
        const validated = this._validation
        const gamer = this._Gamer
            .query()
            .where('gamer_id',gamerId)
        return this._withReference(gamer,references)
            .fetch()
            .then(response => response.first())
}
async create (gamerInstance, references) {
    const { gamer_id } = await this._Gamer.create(gamerInstance)
    const gamer = this._Gamer
      .query()
      .where('gmaer_id', gamer_id)
          
    return this._withReference(gamer, references)
      .fetch()
      .then(response => response.first())
  }
    
    async update(references,body,params){
        const { id } = params
        const { name,user_name,first_name,last_name,email,phone_number,age,birth_day } = body
        const gamerId = await this._Gamer
          .where({ gamer_id: id })
          .update({ name,user_name,first_name,last_name,email,phone_number,age,birth_day })
        const gamers = this._Gamer
            .query()
            .where({ gamer_id:gamerId })
        return this._withReference(gamers,references) 
                .fetch()
                .then(response => response.first())
    }
    async destroy(references){
        const { id } = params
        const gamers = await this._Gamer.query()
        .where({ gamer_id: id })
        .delete()
    return this._withReference(gamers,references) 
            .fetch()
            .then(response => response.first())
    }
}
module.exports = GamerUtil 