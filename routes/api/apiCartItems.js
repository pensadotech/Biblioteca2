// Cart-Items Routes

const db = require('../../models')

module.exports = (app) => {

  // find all
  app.get("/cartitems", (req, res) => {

    db.cartitems.findAll({
        include: [db.books]
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Find-one
  app.get('/cartitems/:id', (req, res) => {
    db.cartitems.findOne({
        include: [db.books],
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Create
  app.post('/cartitems', (req, res) => {
    db.cartitems.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Update
  app.put('/cartitems/:id', (req, res) => {
    db.cartitems.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-one
  app.delete('/cartitems/:id', (req, res) => {
    db.cartitems.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-all
  app.delete('/cartitems', (req, res) => {
    db.cartitems.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/cartitems-all/:id', (req, res) => {
    db.cartitems.destroy({
        where: {
          cartId: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })


} // module.exports