// module.exports = function organizerValidator (){
//   return {
//     error: undefined
//   }
// }

const Validator = use("Validator")

module.exports = async function organizerValidator (data) {
  if (typeof data !== 'object') throw new Error()

  const { name,user_name,password,first_name,last_name,email,phone_number,age,birth_day } = data

  const rules = {
    name: 'required|unique:organizers,name',
    user_name: 'required',
    password: 'required|min:8',
    first_name: 'required',
    last_name: 'required',
    email: 'required|email|unique:organizers,email',
    phone_number: 'required',
    age: 'required',
    birth_day: 'required'
  }

  const validation = await Validator.validateAll({
    name,user_name,password,first_name,last_name,email,phone_number,age,birth_day
  },rules)

  return {
    error:  validation.messages()
  }
}
