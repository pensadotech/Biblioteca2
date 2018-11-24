// PASSPORT: Sing-In and Sing-up routes
const express = require('express');
const passport = require('passport');
const db = require('../models')

// Auth Index
module.exports = (app) => {

  // Sig-in: authernticae user
  app.post('/signIn', (req, res, next) => {
    // authenticate
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        // redirect with a code, will set redirect flag in resposne to false
        return res.redirect(200, '/signIn')
      }
      req.login(user, (err) => {
        if (err) {
          console.log('error: ', err)
          return next(err)
        }

        console.log('success')
        // redirect without a code, will set redirect flag in resposne to true
        return res.redirect('/')
      })
    })(req, res, next)

  })

  // SIGN out
  app.get('/signOut', (req, res) => {
    console.log("backend-signOut")
    req.logout()
    res.redirect('/');
  })

  // Get Session user
  app.get('/sessionuser', (req, res) => {
    console.log('/sessionuser')
    let sessionUser = {}
    if (req.user !== undefined) {
      sessionUser = req.user
    }
    return res.json(sessionUser);
  })



}