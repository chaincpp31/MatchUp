'use strict'
const Hash = use('Hash')
const Gamer = use('App/Models/Gamer')
class AuthController {
     async login({ request , auth }){
       const {user_name} = request.body
       const {password} = request.body
       const gamer = await Gamer.findBy('user_name',user_name)
       const hashPassword = await Hash.verify(password,gamer.password)
       try{
         if(hashPassword){
           return {status:'Login success'}
         }
       }
       catch{
         return 'Not login'
       }
     }
}

module.exports = AuthController
