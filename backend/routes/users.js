// Fun Exercise... Add Update and Delete routes for routes/users.js

// requireing an express router because that is what we are creating
const router = require('express').Router();
// require the associated mongoose model
let User = require('../models/user.model');

// the actual route, 
// the first inpoint that handles the GET HTTP request
router.route('/').get((req, res) => {
// if localhost/users/ note extra slah at end... then it is going to
// try and find a specific user.
// this is a mongoos method to find
  User.find()
    // going to return json users file
    .then(users => res.json(users))
    // if error return standard 404 error
    .catch(err => res.status(400).json('Error: ' + err));
});

// the second inpoint, if a POST HTTP request this code will handle 
// note that isn't just / it is /add
router.route('/add').post((req, res) => {
  // new user name is part of the rquest body
  const username = req.body.username;

  const newUser = new User({username});
  // new user is saved to the database
  newUser.save()
    // then return user added in JSON else a 404 error
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// stanrd thing is we need to export the error.
module.exports = router;