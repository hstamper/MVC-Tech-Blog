const { User } = require('../models');

const userData = [{
        username: 'Mike',
        password: '12345'

    },
    {
        username: 'Rob',
        password: '12345'
    },
    {
        username: 'Kevin',
        password: '12345'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;