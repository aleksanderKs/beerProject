 'use strict'
$(document).ready(function(){

const $body   = $('body');
//const $ul     = $('<ul>');
const $button = $('.btn')

 $button.on('click', function(){
// const titleObj = {};

//     if($('').val()!== ''){
// titleObj['']=$('.status').val()

// } if($('').val()!== ''){
// titleObj['']=$('').val()
// }


$.ajax({

  url:'/beer',
  method: 'GET',
  dataType: 'json',
  data:
  success: function(data) {
    // let $div= $('.list')
    // $ul.empty();

      data.forEach(function(beers) {
        let $li = $('<li>').text(beers.name);
        //let $=$('<li>').text(beers.);

        //$ul.append('',$);
       // $ul.append('',$);


          $body.append($li)
      })
      // $div.append($ul);
    }
})
})
})
