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

// Ca$hes
var $html = $('html');
var $body = $('body');


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
	app.windowHeight = window.innerHeight;
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

// Resizing Window :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
$(window).resize(function(){
	// Retest windowWidth
	testWindowWidth();
	// sizePDF();
	sizeMainArea();
});


// Application JS Below  ::  Utilities Above
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________

function clearActiveLinks(buttons){
	$(buttons).removeClass('active');
}


// Set the Sizing for the Main Area
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
var $docbox = $('#docbox');

function sizeMainArea(){
	app.windowHeight = window.innerHeight;
	var headerHt = $('header').outerHeight();
	var footerHt = $('footer').outerHeight();
	var availableHt = app.windowHeight - (headerHt + footerHt) - 1;
	var mediaHt = availableHt - 30; // 30 = Padding top & bottom :: 15 each

	console.log('available height: ' + availableHt);
	$('.main.container').css('height', availableHt);
	$('.media-window').css('height', mediaHt);

	app.docHeight = mediaHt;

	$('#docbox').attr('height', $('.media-window .inner').height());
}
sizeMainArea();








// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
$('.link a').on('click', function(e){
	e.preventDefault();

	// Style Active Element
	clearActiveLinks($('.link a'));
	$(e.target).addClass('active');

	// 
	var docType = e.target.getAttribute('data-type');
	var src = e.target.getAttribute('data-src');
	var $container = $('.media-window .inner');

	$('#loading').removeClass('hidden');
	$container.html('')

	switch(docType){
		case 'html':
			// Append a wrapper that has styles : overflow: scroll
			$container.append('<div id="template-wrapper"></div>');
			// Load the html in the wrapper
			$( "#template-wrapper" ).load( "html/sample.html", function(html) {
			  $(this).html(html);
			});
			break;

		case 'doc':
			// construct the element
			var el = "<iframe id='docbox' src='https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fcdn.jacobsclevenger.com%2F2016%2Fintranet%2F" + src + "' width='100%' height='" + app.docHeight + "' frameborder='0'>This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a>.</iframe>";
			// Load the element in the container
			$container.html(el);
			break;

		case 'pdf':
			// Construct the element
			var el = '<object data="' + src + '" type="application/pdf" id="docbox" width="100%" height="' + app.docHeight  + '" internalinstanceid="3" title="">alt: <a href="pdf/test.pdf">test.pdf</a></object>';
			// Load the element in the container
			$container.html(el);
			break;
	}

	$('#loading').addClass('hidden');

	// resize 
	sizeMainArea();

});


var newDate = new Date();




// Date and Time
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
function displayDay(day){
	var actualDay = '';
	switch(day){
		case 0:
			actualDay = 'Sunday';
			break;
		case 1:
			actualDay = 'Monday';
			break;
		case 2:
			actualDay = 'Tuesday';
			break;
		case 3:
			actualDay = 'Wednesday';
			break;
		case 4:
			actualDay = 'Thursday';
			break;
		case 5:
			actualDay = 'Friday';
			break;
		case 6:
			actualDay = 'Saturday';
			break;
	}
	return actualDay;
}





$('h5.day').html( displayDay(newDate.getDay()) );


var minutes = newDate.getMinutes();
var hours = newDate.getHours();

console.log(minutes);

var timeFormat = hours + ' : ' + minutes;

console.log(timeFormat);


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
})(); //:: End App




