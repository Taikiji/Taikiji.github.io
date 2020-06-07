$(function() {
  var documentEl = $(document), fadeElem = $(".navbar");

  documentEl.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function() {
    var $this = $(this),
      elemOffsetTop = $(".logo").offset().top;
      $this.css("opacity", 0 + (currScrollPos-elemOffsetTop)/100);
    });

  });

});


$(document).ready(function(){
  $("#logo").fadeIn(500);
  $(".claim") .fadeIn(4000);
  $(".everything").fadeIn(4000, "swing");
});


$('#navbar').scrollspy()

$(document).ready(function(){
    $('body').scrollspy({target: ".navbar"});
});
