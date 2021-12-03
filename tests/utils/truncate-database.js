import '../../src/config/env'

(async () => {
  const { User } = require ('../../src/app/models')
  
  const user = await User.create ({
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    phone: '9822334566',
    birthday: new Date (1998, 5, 21),
    gender: 'M'
  })

  console.log (user)
})()