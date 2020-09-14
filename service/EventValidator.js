const Validator = use("Validator")

module.exports = async function eventValidator (data) {
  if (typeof data !== 'object') throw new Error()

  const { name_event,date_of_event } = data

  const rules = {
    name_event: 'required|unique:events,name_event',
    date_of_event: 'required'
  }

  const validation = await Validator.validateAll({
    name_event,date_of_event
  }, rules)

  return {
    error: validation.messages()
  }
}
