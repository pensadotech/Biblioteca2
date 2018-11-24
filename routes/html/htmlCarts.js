// Carts HTML routes
const path = require('path')

// HTML-Routes
module.exports = (app) => {

  app.get('/cartview', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/carts/index.html'))
  })

} // module.exports  
