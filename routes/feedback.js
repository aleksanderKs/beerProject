
const router = require('express').Router();
// const { createUser, loginUser } = require('../models/user');

 const {saveFeedBack, } = require('../models/feedback');



router.post('/save', saveFeedBack, function(req,res) {
  console.log(req.body);
  res.send({'reponse':'Done'});
  // res.redirect('/');
});









module.exports = router;
