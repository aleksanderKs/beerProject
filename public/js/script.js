 'use strict'
$(document).ready(function(){

 const $body   = $('body');
  const $ul     = $('<ul>');
 const $button = $('.btn')

  $button.on('click', function() {
 const $value = $('#bir').val()

 $.ajax({

  url:'./api',
  method: 'GET',
  dataType: 'json',
  data: {
      //name: //get this value from input
    'name': $value
  },
   success: function(data) {
// //     // let $div= $('.list')
// //     // $ul.empty();

      data.forEach(function(beers) {
  let $li = $('<li>').text(beers.style.description);
  let $img =$('<img>').attr('src', beers.labels.medium)
// //       //   //let $=$('<li>').text(beers.);
console.log(data)
// //       //   //$li.append('',$);
// //       //  // $ul.append('',$);


    $body.append($li).append($img)
       });
// //       // $div.append($ul);
     }
 })
})


})

