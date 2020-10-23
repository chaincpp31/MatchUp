"use strict";
const EventsGamer = use("App/Models/EventsGamer");
const EventGamerUtil = require("../../../util/eventGamerUtil");
// const OrganizerValidator = require("../../../service/OrganizerValidator")
const EventValidator = require("../../../service/EventValidator");
class EventGamerController {
  async index({ request }) {
    const { references } = request.qs;
    const eventGamerUtil = new EventGamerUtil(EventsGamer);
    const eventgamer = await eventGamerUtil.getAll(references);
    return { status: 200, error: undefined, data: eventgamer };
  }
  async show({ request }) {
    const { id } = request.params;
    const { references } = request.qs;
    const eventGamerUtil = new EventGamerUtil(EventsGamer);
    const eventGamer = await eventGamerUtil.getById(id, references);
    return {
      status: 200,
      error: undefined,
      data: eventGamer,
    };
  }
  async store({ request }) {
    const { name, events_gamers_id } = request.body;
    const { references } = request.qs;
    const validatedData = await EventValidator(request.body);
    if (validatedData.error)
      return { status: 422, error: validatedData.error, data: undefined };
    const eventGamerUtil = new EventGamerUtil(EventsGamer);
    const eventGamer = await eventGamerUtil.create(request, references);
    return { stauts: 200, error: undefined, data: eventGamer };
  }

  async update({ request }) {
    const { references = undefined } = request.qs;
    const validatedData = await EventValidator(request.body);
    if (validatedData.error)
      return { status: 422, error: validatedData.error, data: undefined };
    const eventGamerUtil = new EventGamerUtil(EventsGamer);
    const eventGamer = await eventGamerUtil.update(request, references);
    return { status: 200, error: undefined, data: eventGamer };
  }

  async destroy({ request }) {
    const { references = undefined } = request.qs;
    const eventGamerUtil = new EventGamerUtil(EventsGamer);
    const eventGamer = await eventGamerUtil.deleteById(request, references);
    return { status: 200, error: undefined, data: eventGamer };
  }
}

module.exports = EventGamerController;
