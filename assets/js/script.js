$(document).ready(function () {
  $('#pop-up').hide();
 
  $('#share-btn').click(function () {
    if($('#pop-up').is(':visible')) {
      $('#pop-up').fadeOut(350);
    }
    else{
      $('#pop-up').fadeIn(350);
    }
  }); // end click

}); // end ready