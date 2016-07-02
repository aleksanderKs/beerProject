const router = require('express').Router();
const request = require('request');

router.get('/',(req,res)=>{
  console.log(req.query);
  request({
    url:'http://api.brewerydb.com/v2/beers?&key=e8c6ab7e148ac5a8e87326d00aa1718d',
    method:'get',
    qs:{
      name: req.query.name,
      discr: req.query.description,
      image: req.query.image,
     // format:"json"
    },
    json:true
  },(err,result,body)=>{

    if (err) throw err;

    res.json(result.body.data);
  })

})

module.exports = router;
