// CHARTS route

const db = require('../../models')

module.exports = app => {

  // charts ....................................
  app.get("/chartview/:id", (req, res) => {
    db.books.findAll({

      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

} // module.exports