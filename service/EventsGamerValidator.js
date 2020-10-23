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
  }

  const validation = await Validator.validateAll({
    name,user_name,password,email,first_name,last_name,phone_number,age,birth_day
  }, rules)

  return {
    error:  validation.messages()
  }
}
