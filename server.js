const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')

// Passport dependencies
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({
  extended: true
}))
app.use(bodyparser.json())

// passport initalize 
app.use(cookieParser());
app.use(session({ secret: 'library' }));

// passport route
require('./routes/config/passport.js')(app);

// define other routes
require('./routes')(app)

// sync DB and listen
require('./models').sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
  })
})