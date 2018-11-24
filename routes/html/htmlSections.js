// sections HTML routes HTML routes
const path = require('path')

// HTML-Routes
module.exports = (app) => {

  app.get('/sectionadmin', (req, res) => {
    //authorization
    if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/sections/index.html'))
    } else {
      res.redirect('/signIn')
    }
  })

  app.get('/sectionadmin-add', (req, res) => {
    //authorization
    if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/sections/sectionAdd.html'))
    } else {
      res.redirect('/signIn')
    }
  })

  app.get('/sectionadmin-edit', (req, res) => {
    //authorization
    if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/sections/sectionEdit.html'))
    } else {
      res.redirect('/signIn')
    }  
  })

  app.get('/sectionadmin-delete', (req, res) => {
    //authorization
    if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/sections/sectionDelete.html'))
    } else {
      res.redirect('/signIn')
    }  
  })

} // module.exports