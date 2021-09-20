export default {
  username: {
    format: {
      pattern: /^[A-Za-z\d]+$/,
      message: 'Invalid username!'
    },
    length: {
      maximum: 12,
      minimum: 3,
      message: 'Длина username должно быть больше 3 и меньше 12'
    }
  },
  password:{
    presence: true,
    format:{
      pattern: /^[a-z\d!_]+$/,
      message: 'Invalid password!',
    },
    length:{
      maximum: 10,
      minimum: 6,
      message:'Длина username должно быть больше 6 и меньше 10'
    }
  }
}
