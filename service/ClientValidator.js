const Validator = use("Validator")

module.exports = async function clientValidator (data) {
  if (typeof data !== 'object') throw new Error()

  const { name,user_name,password,first_name,last_name,email,phone_number,age,birth_day,status,cover_img_url } = data

  const rules = {
    name: 'required',
    user_name: 'required',
    password: 'required|min:8',
    first_name: 'required',
    last_name: 'required',
    email: 'required|email|unique',
    phone_number: 'required',
    age: 'required|number',
    birth_day: 'required',
    status:'required',
    cover_img_url:'required'
  }

  const validation = await Validator.validateAll({
    name,user_name,password,email,first_name,last_name,phone_number,age,birth_day,status,cover_img_url
  }, rules)

  return {
    error: validation.messages()
  }
}
