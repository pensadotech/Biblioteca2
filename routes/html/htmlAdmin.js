// HTML ADMIN

const path = require('path')

module.exports = (app) => {

  app.get('/libraryadmin', (req, res) => {
    //authorization
    if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/admin/index.html'))
    } else {
      res.redirect('/signIn')
    }
  })

} // module.exports