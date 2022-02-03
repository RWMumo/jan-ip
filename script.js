
// hover to show
$(document).ready(function() {
  $(".designa").hover(function() {
    $(".designashowing").show();
  });
});


$(document).ready(function() {
  $(".designb").hover(function() {
    $(".designbshowing").show();
  });
});


$(document).ready(function() {
  $(".designc").hover(function() {
    $(".designcshowing").show();
  });
});

// click to hide
$(document).ready(function() {
  $(".designa").mouseleave(function() {
    $(".designashowing").hide();
  });
});

$(document).ready(function() {
  $(".designb").mouseleave(function() {
    $(".designbshowing").hide();
  });
});

$(document).ready(function() {
  $(".designc").mouseleave(function() {
    $(".designcshowing").hide();
  });
});



