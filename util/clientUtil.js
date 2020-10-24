// const Subject = use("App/Models/Subject")
class ClientUtil {
  _withReference(instance, references) {
    if (references) {
      const extractedReferences = references.split(",");
      instance.with(extractedReferences);
    }
    return instance;
  }

  constructor(ClientsModel) {
    this._Clients = ClientsModel;
  }

  getAll(references) {
    const clients = this._Clients.query();
    return this._withReference(clients, references).fetch();
  }
  getById(clientsId, references) {
    const clients = this._Clients.query().where("clients_id", clientsId);
    return this._withReference(clients, references)
      .fetch()
      .then((response) => response.first());
  }
  async create(clientInstance, references) {
    const { clients_id } = await this._Clients.create(clientInstance.body);
    const clients = this._Clients
        .query()
        .where("clients_id",{ clients_id })

    return this._withReference(clients, references)
      .fetch()
      .then((response) => response.first());
  }

  async update(clientInstance, references) {
    const { id } = clientInstance.params;
    // if (!haveEvent) {
    //   return { status: 500, error: `Not Found ${id}`, data: undefined };
    // }
    let clients = await this._Clients.find(id);
    if (!clients) {
      return { status: 500, error: `Not Found ${id}`, data: undefined };
    }
    clients.merge(clientInstance.body);
    await clients.save();

    const client = this._Clients.query().where({ clients_id: id });
    return this._withReference(client, references)
      .fetch()
      .then((response) => response.first());
  }
  async deleteById(clientInstance){
    const { id } = clientInstance.params;
    const clients = await this._Clients.find(id);
    if (!clients) {
      return { status: 500, error: `Not Found ${id}`, data: undefined };
    }
    clients.delete();
    await clients.save();
    return { status: 200, error: undefined, data: "complete" };
  }
}
module.exports = ClientUtil;
