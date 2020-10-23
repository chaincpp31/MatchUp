const Validator = use("Validator")

module.exports = async function eventValidator (data) {
  if (typeof data !== 'object') throw new Error()

  const { name_events,date_event } = data
  const rules = {
    name_events: 'required|unique:events,name_event',
    date_event: 'required'
  }

  const validation = await Validator.validateAll({
    name_events,date_event
  }, rules)

  return {
    error: validation.messages()
  }
}
