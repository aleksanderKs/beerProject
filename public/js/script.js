 'use strict'
$(document).ready(function(){

 const $body   = $('body');
 const $ul     = $('<ul>');
 const $button = $('.btn');
 const $div = $('#brApend');
 const $divFeedBack = $('#brApendFeedBack');
 const $feedbackbtn = $('#submitFeedback');
 const $feedbackDisplayBtn = $('#feedBackSearch');
 var currentBeer = null;
 $button.on('click', function() {
   const $value = $('#bir').val();

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
          currentBeer = beers;
          let $p = $('<p>').text(beers.style.description);
          let $img =$('<img>').attr('src', beers.labels.medium)
      // //       //   //let $=$('<li>').text(beers.);
          console.log(data)
      // //       //   //$li.append('',$);
      // //       //  // $ul.append('',$);


          $div.append($p).append($img);
          $('#feedback').show();
          $('#submitFeedback').show();
        });
  // //       // $div.append($ul);
      }
    });
  });
  $feedbackbtn.on('click', function() {
   const $feedbackValue = $('#feedback').val();
   // console.log('Beers is coming :',currentBeer);
   // console.log('Feedback is coming :',$feedbackValue);
   currentBeer["FeedBack"] = $feedbackValue;
   console.log(currentBeer);



   $.ajax({
      url:'./feedback/save',
      method: 'POST',
      dataType: 'json',
      data: currentBeer,
      success: function(data) {
        $('#feedback').hide();
        $('#submitFeedback').hide();
        $div.empty();

        // data.forEach(function(beers) {
        //   let $p = $('<p>').text(beers.style.description);
        //   let $img =$('<img>').attr('src', beers.labels.medium)

        //   console.log(data)
        //   $div.append($p).append($img);
        //   $('#feedback').show();
        //   $('#submitFeedback').show();
        // });

      }
    });
  });
  $feedbackDisplayBtn.on('click', function() {

   // console.log('Beers is coming :',currentBeer);
   // console.log('Feedback is coming :',$feedbackValue);
   $.ajax({
      url:'./feedback/get',
      method: 'GET',
      dataType: 'json',

      success: function(data) {
        console.log('To display :',data);


        data.forEach(function(beer) {
          console.log('Beer:',beer);
          // let $p = $('<p>').text('Description :' + beer.description);
          let $p = $('<p>').text('Feedback :' + beer.FeedBack);
          let $img =$('<img>').attr('src', beer['labels[medium]'])

          console.log(data)
          $divFeedBack.append($p).append($img).append($('<hr>'));

        });

      }
    });
  });


});

