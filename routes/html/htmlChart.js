// Chart HTML routes
const path = require('path')

// HTML-Routes
module.exports = (app) => {

  app.get('/chartview', (req, res) => {
    //authorization
    if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/charts/chart.html'))
    } else {
      res.redirect('/signIn')
    }
  })

} // module.exports