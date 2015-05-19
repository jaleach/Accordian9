//var sectionOne = $('.box1');
// var sectionTwo = $('.box2');
// var sectionThree = $('.box3');




// sectionOne.on('click', function () {
  // $(".par1").toggle('.par1');
// });

//sectionTwo.on('click', function () {
  //$(".par2").toggle('.par2');
//});
//sectionThree.on('click', function () {
  //$(".par3").toggle('.par3');
//});


$('section').on('click', function(){
  $('section').removeClass('boxy');
  $(this).addClass('boxy');
});
