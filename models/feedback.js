const { MongoClient } = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/auth_practice';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

function saveFeedBack(req,res,next) {
  console.log('Check Data:', req.body);
  console.log('User is there :',req.session.user);
  let feedbackItem = req.body;
  feedbackItem['userId'] = req.session.user._id;
  console.log('Final Item:',feedbackItem);

  // let email = req.body.email;
  // let password = req.body.password;

  MongoClient.connect(dbConnection, function(err, db) {
    db.collection('feedbacks').insertOne(feedbackItem, function(err, result) {
      if(err) throw err;
      console.log('Results : ',result);
      console.log('Saved');
      next();
    })
  })
}

function getFeedBacks(req,res,next){
  var userId = {"userId":req.session.user._id};
  //console.log('user id is:',userId)
  MongoClient.connect(dbConnection, function(err, db) {
    var cursor =db.collection('feedbacks').find( userId);
    var all_results = [];
    cursor.each(function(err, doc) {
      if(err){
        console.log(err);
        req['results']={'error':'Something went wrong !!!'};
        return next();
      }
      if (doc != null) {
        console.log(doc);
         all_results.push(doc);
         console.log(doc);
      } else {
         req['results'] = all_results;
         next();
      }
    });


  });



}




module.exports = { saveFeedBack,getFeedBacks }












