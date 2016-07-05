 'use strict'
$(document).ready(function(){

 const $body   = $('body');
 // const $ul     = $('<ul>');
 const $button = $('#btnSearch');
 const $div = $('#brApend');
 const $divFeedBack = $('#brApendFeedBack');
 const $feedbackbtn = $('#submitFeedback');
 const $feedbackDisplayBtn = $('#feedBackSearch');
 var currentBeer = null;
  const $ul = $('<ul>')
// const $p = $('p');
 //click button, shows beer appended on the page
 $button.on('click', function() {
$div.empty();
$ul.empty();
$divFeedBack.empty();
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
// let $div= $('.list')
          //$li.empty();
          // $p.empty();
        data.forEach(function(beers) {
          currentBeer = beers;
          //let $li = $('<li>')
          $ul.text(beers.style.description);
          let $img =$('<img>').attr('src', beers.labels.medium)
      // //       //   //let $=$('<li>').text(beers.);
          console.log(data)
      // //       //   //$li.append('',$);
      // //       //  // $ul.append('',$);


          $div.append($ul).append($img);

          $('#feedback').show();
          $('#submitFeedback').show();
        });

  // //       // $div.append($ul);
      }
    });
  });
  $feedbackbtn.on('click', function() {
    $ul.empty();
    $div.empty();
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
$ul.empty();
$div.empty();
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
          let $p = $('<p>').addClass('fed').text('Feedback :' + beer.FeedBack).after("<br />")
          let $img =$('<img>').addClass("img2").attr('src', beer['labels[medium]'])

          console.log(data)
          $divFeedBack.append($p).append($img)
          // .append($('<hr>'));

        });

      }
    });
  });


});

