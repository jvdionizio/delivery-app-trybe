require('dotenv').config();


const options = {
  host: process.env.MYSQLHOST || 'containers-us-west-195.railway.app',
  port: process.env.MYSQLPORT || '5604',
  database: 
    `${process.env.MYSQLDBNAME || 'railway'}`,
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '4gWGKibbu8mE3bFmc7Yw',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
