// Heroku kes loaded
console.log('Heroku Keys loaded');

exports.herouku = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.DATABASE
};