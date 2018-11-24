// login html routes
const path = require('path')

module.exports = (app) => {
  
  app.get('/signIn', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/loginpage.html'))
  })

}