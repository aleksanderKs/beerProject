const router = require('express').Router();
const request = require('request');
router.get('/', function(req,res) {


  res.render('user/index')
});


router.get('/beer', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?name=Bud%20Light&key=e8c6ab7e148ac5a8e87326d00aa1718d',function(error,response, body){
if (error) throw error;
console.log(response);
res.render('user/index', {data:response})


  })

});







module.exports = router;
