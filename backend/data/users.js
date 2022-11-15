import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Abhiram',
        email: 'abhi@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Siri',
        email: 'siri@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users

//here we are creating the users based on the userSchema