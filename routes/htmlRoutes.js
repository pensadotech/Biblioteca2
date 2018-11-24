// HTML-Routes 
module.exports = (app) => {  
  require('./html/htmlAdmin')(app)
  require('./html/htmlBooks')(app)
  require('./html/htmlCarts')(app)
  require('./html/htmlSections')(app)
  require('./html/htmlChart')(app)
  require('./html/login')(app)
}