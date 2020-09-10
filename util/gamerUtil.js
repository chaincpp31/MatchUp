// const Subject = use("App/Models/Subject")
class SubjectUtil{
    constructor(GamerModel){
        this.gamer = GamerModel
    }
    getAll(references){
        const gamer = this._gamers.query()
        if(references){
            const extractReferences = references.split(",")
            gamer.with(extractReferences)
        }
        return subjects.fetch()
    }
    getById(gamerId,references){
        const gamer = this._gamers.query()
        if(references){
            const extractReferences = references.split(",")
            gamer.with(extractReferences)
    }
        return gamer.where('gamers:id',gamerId).fetch()
}
    
}
module.exports = SubjectUtil 