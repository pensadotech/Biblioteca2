// Cart Routes

const db = require('../../models')

module.exports = (app) => {

      // find all
  app.get("/librarycarts", (req, res) => {

    db.carts.findAll({})
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Find-one
  app.get('/librarycarts/:id', (req, res) => {
    db.carts.findOne({
        include: [db.cartitems],
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Create
  app.post('/librarycarts', (req, res) => {
    db.carts.create(req.body)
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Update
  app.put('/librarycarts/:id', (req, res) => {
    db.carts.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-one
  app.delete('/librarycarts/:id', (req, res) => {
    db.carts.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-all
  app.delete('/librarycarts', (req, res) => {
    db.carts.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })


}