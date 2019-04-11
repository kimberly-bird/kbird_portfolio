


// Kimmy Bird | Software Developer.
// Below code adds and removes the class from Hero section - Intro Text. which fades-in and fades-out it's content. 
// All codes rights reserved by Kimmy Bird | Software Developer.


$(window).on("scroll",function(){
  var hero_text = $(window).scrollTop();
  if(hero_text >= $("#hero").height()){
    $("#hero > .intro_text").addClass("hide_text");
  }
  else{
    $("#hero > .intro_text").filter($(".intro_text.hide_text").removeClass("hide_text"));
  } 
});
