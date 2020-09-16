const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const Users = require('./donations/users')(sequelize, Sequelize.DataTypes);
const force = process.argv.includes('--force') || process.argv.includes('-f');

Users.sync();
console.log(`Database Synced`);


