$(document).ready(function(){
  $("#logo").fadeTo(1000, 1);
  $(".everything").fadeTo(1000, 1);
});

$(document).ready(function(){
  $(".everything").fadeTo(1000, 1);
});

$('.carousel').carousel()

$('.carousel').carousel({
  interval: 2000
})

$(function() {
  var documentEl = $(document), fadeElem = $(".navname");

  documentEl.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function() {
    var $this = $(this),
      elemOffsetTop = $(".pagetop").offset().top;
      $this.css("opacity", 0 + (currScrollPos-elemOffsetTop)/30);
    });
  });

  var currScrollPos = documentEl.scrollTop();

  setTimeout (function(){
    fadeElem.each(function() {
    var $this = $(this),
      elemOffsetTop = $(".pagetop").offset().top;
      $this.css("opacity", 0 + (currScrollPos-elemOffsetTop)/30);
    });
  }, 1)

});

//$('.everything').scrollspy();

$(document).ready(function(){
    //$('body').scrollspy({target: ".navbar"});
});
