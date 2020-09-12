// const Subject = use("App/Models/Subject")
const gamerValidator = require("../service/GamerValidator")
class OrganizerUtil{
    _withReference (instance, references) {
        if (references) {
          const extractedReferences = references.split(",")
          instance.with(extractedReferences)
        }
        return instance
    }


    _validation(gamerValidator){
        if (gamerValidator.error){
          return { status: 422, error: gamerValidator.error, data: undefined }
        }
    }


    constructor(OrganizerModel){
        this._Organizer = OrganizerModel
    }
    getAll(references){
        const organizer = this._Organizer.query()
        return this._withReference(organizer,references).fetch()
        }        
    getById(organizerId,references){
        this._validation(organizerId)
        const organizer = this._Organizer
            .query()
            .where('ornizer_id',organizerId)
        return this._withReference(organizer,references)
            .fetch()
            .then(response => response.first())
}
  async create (organizerInstance, references) {
      const { organizer_id } = await this._Organizer.create(organizerInstance.body)
      const organizer = this._Gamer
        .query()
        .where('organizer_id', organizer_id)
      return this._withReference(organizer, references)
        .fetch()
        .then(response => response.first())
    }
    
    async update(organizerInstance,references){
      const { id } = organizerInstance.params
      let organizers = await this._Organizer.find(id)
      if(!organizers){
          return {status : 500 ,error : `Not Found ${id}` , data : undefined};
      }
      organizers.merge(organizerInstance.body)
      await organizers.save();
  
      organizers = this._Organizer.query().where({organizer_id : id})
      return this._withReference(organizers,references).fetch().then(response => response.first())
  }
    async deleteById(organizerInstance){
      const { id } = organizerInstance.params
      const organizers = await this._Organizer.find(id)

      if(!organizers){
          return {status : 500 ,error : `Not Found ${id}` , data : undefined};
      }
      organizers.delete()
      await organizers.save();

      return {status : 200 ,error : undefined , data : 'complete'};
  }
    
}
module.exports = OrganizerUtil 