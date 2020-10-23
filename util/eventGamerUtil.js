// const Subject = use("App/Models/Subject")
const organizerValidator = require("../service/EventsGamerValidator");
class EventGamerUtil {
  _withReference(instance, references) {
    if (references) {
      const extractedReferences = references.split(",");
      instance.with(extractedReferences);
    }
    return instance;
  }

  constructor(EventGmaerModel) {
    this._EventGmaer = EventGmaerModel;
  }


  getAll(references) {
    const eventgamer = this._EventGmaer.query();
    return this._withReference(eventgamer, references).fetch();
  }
  getById(eventgamerId, references) {
    const eventgamer = this._EventGamer.query().where("eventgamer_id", eventgamerId);
    return this._withReference(eventgamer, references)
      .fetch()
      .then((response) => response.first());
  }
  async create(eventgamerInstance, references) {
    const { eventgamer_id } = await this._EventGamer.create(
      eventgamerInstance.body
    );
    const eventgamer = this._EventGamer
      .query()
      .where("eventgamer_id", eventgamer_id);
    return this._withReference(eventgamer, references)
      .fetch()
      .then((response) => response.first());
  }

  async update(eventgamerInstance, references) {
    const { id } = eventgamerInstance.params;
    let eventgamers = await this._EventGamer.find(id);
    if (!eventgamers) {
      return { status: 500, error: `Not Found ${id}`, data: undefined };
    }
    eventgamers.merge(eventgamerInstance.body);
    await eventgamers.save();

    eventgamers = this._EventGamer.query().where({ eventgamer_id: id });
    return this._withReference(eventgamers, references)
      .fetch()
      .then((response) => response.first());
  }
  async deleteById(eventgamerInstance) {
    const { id } = eventgamerInstance.params;
    const eventgamers = await this._EventGamer.find(id);

    if (!eventgamers) {
      return { status: 500, error: `Not Found ${id}`, data: undefined };
    }
    eventgamers.delete();
    await eventgamers.save();

    return { status: 200, error: undefined, data: "complete" };
  }
}
module.exports = OrganizerUtil;
