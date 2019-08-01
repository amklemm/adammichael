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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcbmNvbnNvbGUubG9nKCdTdGFydGluZyBXZWIgQXBwJyk7XG5cbi8vIEdsb2JhbCBPYmplY3QgZm9yIEFsbCBHbG9iYWwgVmFyc1xuLy8gOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuLy8gOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Olxud2luZG93LmFwcCA9IHt9O1xuLy8gYXBwIHByb3BlcnRpZXMgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuLy8gYXBwLnZpZXcgPSAnZGVza3RvcCcgfHwgJ21vYmlsZSdcbi8vIGFwcC53aW5kb3dXaWR0aCA9IDc2OCBleFxuYXBwLm1lbnVTdGF0ZSA9ICdjbG9zZWQnOyAvLyBpcyB0aGUgbmF2IG1lbnUgb3BlbiBvciBjbG9zZWRcbmFwcC5pc0hvbWUgPSAkKCcucGFnZScpLmhhc0NsYXNzKCdob21lLXBhZ2UnKTtcblxuLy8gQ2EkaGVzXG52YXIgJGh0bWwgPSAkKCdodG1sJyk7XG5cblxuLy8gRGVib3VuY2UgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdHZhciB0aW1lb3V0O1xuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdH07XG59O1xuXG4vLyBUZXN0IFBsYXRmb3JtIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuLy8gVGVzdCB0aGUgcGxhdGZvcm0gZm9yIHdpbmRvd3Mgb3IgbWFjIGFuZCBhc3NpZ24gYSBjbGFzcyB0byB0aGUgaHRtbCB0YWdcbmZ1bmN0aW9uIGlzTWFjaW50b3NoKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ01hYycpID4gLTFcbn1cbmZ1bmN0aW9uIGlzV2luZG93cygpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKCdXaW4nKSA+IC0xXG59XG5pZihpc1dpbmRvd3MoKSl7XG5cdCQoJGh0bWwpLmFkZENsYXNzKCd3aW5kb3dzJyk7XG59ZWxzZSBpZihpc01hY2ludG9zaCgpKXtcblx0JCgkaHRtbCkuYWRkQ2xhc3MoJ21hYycpO1xufVxuXG4vLyBUZXN0IGFuZCBTZXQgJ21vYmlsZScgb3IgJ2Rlc2snIGNsYXNzIG9uIGh0bWwgYmFzZWQgb24gdGhlIHdpbmRvdy53aWR0aFxuLy8gOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuLy8gOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuYXBwLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5mdW5jdGlvbiBhc3NpZ25EZXNrdG9wTW9iaWxlQ2xhc3MoKXtcblx0JCgkaHRtbCkucmVtb3ZlQ2xhc3MoJ2Rlc2t0b3AnKTtcblx0JCgkaHRtbCkucmVtb3ZlQ2xhc3MoJ21vYmlsZScpO1xuXHRpZihhcHAudmlldyA9PT0gJ21vYmlsZScpe1xuXHRcdCQoJGh0bWwpLmFkZENsYXNzKCdtb2JpbGUnKTtcblx0fWVsc2UgaWYoYXBwLnZpZXcgPT09ICdkZXNrdG9wJyl7XG5cdFx0JCgkaHRtbCkuYWRkQ2xhc3MoJ2Rlc2t0b3AnKTtcblx0fVxufVxuLy8gRGVib3VuY2UgdGhlIFJlc2l6ZSBUZXN0aW5nIHRvIG1pdGlnYXRlIHVubmVjY2Vzc2FyeSBjYWxsc1xudmFyIHRlc3RXaW5kb3dXaWR0aCA9IGRlYm91bmNlKGZ1bmN0aW9uKCl7XG5cdGFwcC53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOyBcblx0Ly8gVGVzdFxuXHRpZihhcHAud2luZG93V2lkdGggPD0gNzY4KXtcblx0XHRhcHAudmlldyA9ICdtb2JpbGUnO1xuXHR9ZWxzZXtcblx0XHRhcHAudmlldyA9ICdkZXNrdG9wJztcblx0fVxuXHQvLyBBc3NpZ25cblx0YXNzaWduRGVza3RvcE1vYmlsZUNsYXNzKCk7XG5cdFxufSwgMjAwKTtcbnRlc3RXaW5kb3dXaWR0aCgpO1xuXG4vLyAvLyBIaWRlIC8gU2hvdyBGaXhlZCBoZWFkZXIgYmFzZWQgb24gc2Nyb2xsXG4vLyB2YXIgdGVzdFNjcm9sbCA9IGRlYm91bmNlKGZ1bmN0aW9uKCl7XG4vLyBcdGlmKGFwcC5pc0hvbWUpe1xuLy8gXHRcdHZhciBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcbi8vIFx0XHR2YXIgaGVhZGVySHQgPSAkaG9tZUhlYWRlci5vdXRlckhlaWdodCgpIC0gNjA7XG4vLyBcdFx0dmFyIHZhbHVlO1xuLy8gXHRcdGlmKHNjcm9sbCA8IGhlYWRlckh0KXtcbi8vIFx0XHRcdHZhbHVlID0gc2Nyb2xsIC8gaGVhZGVySHQ7XHRcbi8vIFx0XHR9ZWxzZXtcbi8vIFx0XHRcdHZhbHVlID0gMTtcbi8vIFx0XHR9XG4vLyBcdFx0JGhlYWRlckJnLmNzcygnb3BhY2l0eScsIHZhbHVlKTtcbi8vIFx0fVxuLy8gfSk7XG5cbi8vIFJlc2l6aW5nIFdpbmRvdyA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcblx0Ly8gUmV0ZXN0IHdpbmRvd1dpZHRoXG5cdHRlc3RXaW5kb3dXaWR0aCgpO1xufSk7XG5cbi8vIC8vIFdpbmRvdyBTY3JvbGxcbi8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbi8vIFx0dGVzdFNjcm9sbCgpO1xuLy8gfSk7XG5cblxuLy8gQXBwbGljYXRpb24gSlMgQmVsb3cgIDo6ICBVdGlsaXRpZXMgQWJvdmVcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIFJlbW92ZSBBbGwgU3R5bGVndWlkZSBjbGFzcyBmcm9tIEFsbCBlbGVtZW50cyAoIC5zZyApIDogQ29tbWVudCBmb3IgcHJvZHVjdGlvbjogdW5jb21tZW50IGZvciBzdHlsZWd1aWRlXG4vLyBEb24ndCBmb3JnZXQgdG8gY29tbWVudCBvdXQgdGhlIC5zZyBTdHlsZXMgYXMgd2VsbCBpbiBtYWluLnNjc3Ncbi8qIFxudmFyIHNnRWxlbWVudHNUb1JlbW92ZSA9ICQoJy5zZy1yZW1vdmUnKTtcbiQoc2dFbGVtZW50c1RvUmVtb3ZlKS5lYWNoKGZ1bmN0aW9uKGVsKXtcblx0JCh0aGlzKS5yZW1vdmVDbGFzcygnc2cnKS5yZW1vdmVDbGFzcygnc2ctcmVtb3ZlJyk7XG59KTtcbiovICBcblxuLy8gVXRpbGl0eSB0byBmaW5kIEFsbCBlbGVtZW50cyB3LyAuc2cgOiBjYW4gYmUgdXNlZCB0byBzZWUgaWYgdGhlcmUgc2hvdWxkIGJlIGEgLnNnLXJlbW92ZSBjbGFzcyBuZWVkZWRcbi8vIEFsbCBFbGVtZW50cyB3LyAuc2cgT05MWSB3aWxsIE9OTFkgYmUgdXNlZCBmb3IgU3R5bGVndWlkZVxuLy8gQWxsIEVsZW1lbnRzIHcvIC5zZy5zZy1yZW1vdmUgd2lsbCBuZWVkIHRvIGhhdmUgdGhlIGNsYXNzIG9mIC5zZyByZW1vdmVkIGZvciBwcm9kdWN0aW9uc1xuLyogIFxudmFyIHNnRWxlbWVudHMgPSAkKCcuc2cnKTtcbiQoc2dFbGVtZW50cykuZWFjaChmdW5jdGlvbihlbCl7XG5cdGNvbnNvbGUubG9nKHRoaXMpO1xufSk7XG4qL1xuXG5cblxuXG5cblxuLy8gQWRkIC5hY3RpdmUgY2xhc3MgdG8gdGhlIFxuXG4kKFwiOmlucHV0XCIpLmZvY3VzKGZ1bmN0aW9uKCkge1xuXG5cdGlmKCAhJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnZXJyb3InKSApe1xuXHRcdCQoXCJsYWJlbFtmb3I9J1wiICsgdGhpcy5pZCArIFwiJ11cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cdH1cbiAgXG59KS5ibHVyKGZ1bmN0aW9uKCkge1xuICAkKFwibGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuLy86Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxufSkoKTsgLy86OiBFbmQgQXBwIl19