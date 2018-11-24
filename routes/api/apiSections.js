// Section Routes 

const db = require('../../models')

module.exports = app => {

  // find all
  app.get("/librarysections", (req, res) => {
    db.sections.findAll({})
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Find-one
  app.get('/librarysections/:id', (req, res) => {
    db.sections.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Create
  app.post('/librarysections', (req, res) => {
    db.sections.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Update
  app.put('/librarysections/:id', (req, res) => {
    db.sections.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-one
  app.delete('/librarysections/:id', (req, res) => {
    db.sections.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-all
  app.delete('/librarysections', (req, res) => {
    db.sections.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

} // module.exports