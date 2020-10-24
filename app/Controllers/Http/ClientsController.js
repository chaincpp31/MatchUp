"use strict";
const Clients = use("App/Models/Clients");
const ClientsUtil = require("../../../util/clientUtil");
const ClientValidator = require("../../../service/ClientValidator");
class GamerController {
  async index({ request }) {
    const { references } = request.qs;
    const clientUtil = new ClientsUtil(Clients);
    const client = await clientUtil.getAll(references);
    return { status: 200, error: undefined, data: client };
  }
  async show({ request }) {
    const { id } = request.params;
    const { references } = request.qs;
    const clientUtil = new ClientsUtil(Clients);
    const client = await clientUtil.getById(id, references);
    return {
      status: 200,
      error: undefined,
      data: client,
    };
  }
  async store({ request }) {
    const { name, clients_id } = request.body;
    const { references } = request.qs;
    const validatedData = await ClientValidator(request.body);
    if (validatedData.error)
      return { status: 422, error: validatedData.error, data: undefined };
    const clientUtil = new ClientsUtil(Clients);
    const client = await clientUtil.create(request, references);
    return { status: 200, error: undefined, data: client };
  }

  async update({ request }) {
    const { references = undefined } = request.qs;
    // const validatedData = await ClientValidator(request.body);
    // if (validatedData.error)
    //   return { status: 422, error: validatedData.error, data: undefined };

    const clientUtil = new ClientsUtil(Clients);
    const client = await clientUtil.update(request, references);
    return { status: 200, error: undefined, data: client };
  }

  async destroy({ request }) {
    const { references = undefined } = request.qs;
    const clientUtil = new ClientUtil(Clients);
    const client = await clientUtil.deleteById(request, references);
    return { status: 200, error: undefined, data: client };
  }


}
module.exports = GamerController;
