// books Routes 

const db = require('../../models')
const Op = db.Sequelize.Op;

module.exports = app => {

  // find all
  app.get("/librarybooks", (req, res) => {
    db.books.findAll({
        include: [db.sections]
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Find-one
  app.get('/librarybooks/:id', (req, res) => {
    db.books.findOne({
        include: [db.sections],
        where: {
          id: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // find all prod for a department 
  app.get('/librarybooks-section/:id', (req, res) => {
    //console.log(req.params.id)
    db.books.findAll({
        include: [db.sections],
        where: {
          sectionId: req.params.id
        }
      })
      .then(r => res.json(r))
      .catch(e => console.error(e))
  })

  // Create
  app.post('/librarybooks', (req, res) => {
    db.books.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Update
  app.put('/librarybooks/:id', (req, res) => {
    db.books.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-one
  app.delete('/librarybooks/:id', (req, res) => {
    db.books.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete-all
  app.delete('/librarybooks', (req, res) => {
    db.books.destroy({
        where: {},
        truncate: true
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Book search functionality -----------------------

  app.get("/searchlibrarybooks", (req, res) => {

    console.log("title:", req.query.title)
    console.log("author:", req.query.author)
    console.log("year:", req.query.year)
    console.log("genre:", req.query.genre)
    console.log("isbn:", req.query.isbn)

    getWhereClause(req.query)
      .then(r => {
        console.log(r)
        db.books.findAll({
            include: [db.sections],
            where: r
          })
          .then(r => res.json(r))
          .catch(e => console.error(e))
      })
  })


  async function getWhereClause(query) {
    return new Promise(function (resolve, reject) {
      resolve(getWhereObj(query))
    })
  }

  async function getWhereObj(query) {
    let whereObj = {}

    if (query.title) {
      whereObj.title = {
        [Op.like]: '%' + query.title + '%'
      }
    }

    if (query.author) {
      whereObj.author = {
        [Op.like]: '%' + query.author + '%'
      }
    }

    if (query.year) {
      whereObj.year = {
        [Op.like]: '%' + query.year + '%'
      }
    }

    if (query.genre) {
      whereObj.genre = {
        [Op.like]: '%' + query.genre + '%'
      }
    }

    if (query.isbn) {
      whereObj.ISBN = {
        [Op.like]: '%' + query.isbn + '%'
      }
    }

    return whereObj
  }

} // module.exports