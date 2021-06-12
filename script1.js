$(function()
{
  var flame = $('#flame');
  var txt = $('h1');

  flame.on(
  {
    click: function()
    {
      flame.removeClass('burn').addClass('puff');
      $('.smoke').each(function()
      {
        $(this).addClass('puff-bubble');
      });
      $('#glow').remove();
      txt.html("Happy Birthday Babe!! <b>May God Complete all your Wishes </b> Love you!!...").delay(2750);
      $('#candle').animate(
      {
        //'opacity': '.5'
      }, 100);
    }
  })   
});