


// Kimmy Bird | Software Developer.
// Below code is used for changing the CSS property of Loader section.
// All codes rights reserved by Kimmy Bird | Software Developer.


$(window).on('load',function(){
  $("#loader").delay(300).animate({
    'opacity' : '0'
	}, 300, function() {
	$("#loader").css("display","none");
  });  
});
