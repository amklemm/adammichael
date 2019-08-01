(function () {
'use strict';
console.log('Starting Web App');

// Global Object for All Global Vars
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
window.app = {};
// app properties ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// app.view = 'desktop' || 'mobile'
// app.windowWidth = 768 ex
app.menuState = 'closed'; // is the nav menu open or closed
app.isHome = $('.page').hasClass('home-page');

// Ca$hes
var $html = $('html');


// Debounce ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Test Platform ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Test the platform for windows or mac and assign a class to the html tag
function isMacintosh() {
  return navigator.platform.indexOf('Mac') > -1
}
function isWindows() {
  return navigator.platform.indexOf('Win') > -1
}
if(isWindows()){
	$($html).addClass('windows');
}else if(isMacintosh()){
	$($html).addClass('mac');
}

// Test and Set 'mobile' or 'desk' class on html based on the window.width
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
app.windowWidth = window.innerWidth;
function assignDesktopMobileClass(){
	$($html).removeClass('desktop');
	$($html).removeClass('mobile');
	if(app.view === 'mobile'){
		$($html).addClass('mobile');
	}else if(app.view === 'desktop'){
		$($html).addClass('desktop');
	}
}
// Debounce the Resize Testing to mitigate unneccessary calls
var testWindowWidth = debounce(function(){
	app.windowWidth = window.innerWidth; 
	// Test
	if(app.windowWidth <= 768){
		app.view = 'mobile';
	}else{
		app.view = 'desktop';
	}
	// Assign
	assignDesktopMobileClass();
	
}, 200);
testWindowWidth();

// // Hide / Show Fixed header based on scroll
// var testScroll = debounce(function(){
// 	if(app.isHome){
// 		var scroll = window.scrollY;
// 		var headerHt = $homeHeader.outerHeight() - 60;
// 		var value;
// 		if(scroll < headerHt){
// 			value = scroll / headerHt;	
// 		}else{
// 			value = 1;
// 		}
// 		$headerBg.css('opacity', value);
// 	}
// });

// Resizing Window :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
$(window).resize(function(){
	// Retest windowWidth
	testWindowWidth();
});

// // Window Scroll
// $(window).scroll(function(){
// 	testScroll();
// });


// Application JS Below  ::  Utilities Above
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________

// Remove All Styleguide class from All elements ( .sg ) : Comment for production: uncomment for styleguide
// Don't forget to comment out the .sg Styles as well in main.scss
/* 
var sgElementsToRemove = $('.sg-remove');
$(sgElementsToRemove).each(function(el){
	$(this).removeClass('sg').removeClass('sg-remove');
});
*/  

// Utility to find All elements w/ .sg : can be used to see if there should be a .sg-remove class needed
// All Elements w/ .sg ONLY will ONLY be used for Styleguide
// All Elements w/ .sg.sg-remove will need to have the class of .sg removed for productions
/*  
var sgElements = $('.sg');
$(sgElements).each(function(el){
	console.log(this);
});
*/






// Add .active class to the 

$(":input").focus(function() {

	if( !$(this).parent().hasClass('error') ){
		$("label[for='" + this.id + "']").addClass("active");
	}
  
}).blur(function() {
  $("label").removeClass("active");
});










//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
})(); //:: End App