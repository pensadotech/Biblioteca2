// Books HTML routes
const path = require('path')

// HTML-Routes
module.exports = (app) => {

  app.get('/booksadmin', (req, res) => {
    //authorization
    if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/books/index.html'))
    } else {
      res.redirect('/signIn')
    }
  })

  app.get('/booksadmin-add', (req, res) => {
    //authorization
    if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/books/bookAdd.html'))
    } else {
      res.redirect('/signIn')
    } 
  })

  app.get('/booksadmin-edit', (req, res) => {
    //authorization
    if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/books/bookEdit.html'))
    } else {
      res.redirect('/signIn')
    } 
  })

  app.get('/booksadmin-delete', (req, res) => {
     //authorization
     if (req.user) {
      res.sendFile(path.join(__dirname, '../../public/books/booksDelete.html'))
    } else {
      res.redirect('/signIn')
    } 
  })

} // module.exports