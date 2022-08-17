
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

// portfolio hover to show
$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});
// $(document).ready(function() {
//   $(".portfolioa").mouseover(function() {
//     $("#portfolio1").show();
//   }).mouseout(function() {
//     $("#portfolio1").hide();
//   });
// });

// $(document).ready(function() {
//   $(".portfoliob").hover(function() {
//     $(".portfolio2").show();
//   });
// });
// $(document).ready(function() {
//   $(".portfolioc").hover(function() {
//     $(".portfolio3").show();
//   });
// });
// $(document).ready(function() {
//   $(".portfoliod").hover(function() {
//     $(".portfolio4").show();
//   });
// });
// $(document).ready(function() {
//   $(".portfolioe").hover(function() {
//     $(".portfolio5").show();
//   });
// });
// $(document).ready(function() {
//   $(".portfoliof").hover(function() {
//     $(".portfolio6").show();
//   });
// });
// $(document).ready(function() {
//   $(".portfoliog").hover(function() {
//     $(".portfolio7").show();
//   });
// });
// $(document).ready(function() {
//   $(".portfolioh").hover(function() {
//     $(".portfolio8").show();
//   });
// });

// form
$('.submit').click(function () {
  var Name = $('#mce-FNAME').val();
  var Email = $('#mce-EMAIL').val();
  var Message = $('#mce-MESSAGE');
  var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
  if (Name == '' || Email == '' || Message == '') {
      alert('Please fill in the form correctly!');
  } else {
      alert(' Hi We have received your message. Thank you for reaching out.');
  }
});



