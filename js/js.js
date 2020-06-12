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

  var currScrollPos = documentEl.scrollTop();

  setTimeout (function(){
    fadeElem.each(function() {
    var $this = $(this),
      elemOffsetTop = $(".logo").offset().top;
      $this.css("opacity", 0 + (currScrollPos-elemOffsetTop)/100);
    });
  }, 1)

});


$(document).ready(function(){
  $("#logo").fadeTo(1000, 1);
  $(".everything").fadeTo(1000, 1);

  setTimeout (function(){
    $(".claim") .fadeTo(3000, 1);
  }, 1000)

  setTimeout (function(){
    if ($(window).scrollTop() < 2) {
      $(".scrolls").fadeTo(1000, 1);
    }
  }, 4000)

});

$(function() {
  var documentEl = $(document), fadeElem = $(".scrolls");

  documentEl.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function() {
    var $this = $(this),
      elemOffsetTop = $(".logo").offset().top;
      if ($this.css("opacity") > 0) {
        $this.css("opacity", 1 - (currScrollPos-elemOffsetTop)/300);
      }
    });

  });

});


//$('.everything').scrollspy();

$(document).ready(function(){
    //$('body').scrollspy({target: ".navbar"});
});
