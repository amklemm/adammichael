(function () {
void 0;

// Global Object for All Global Vars
window.g = {};
/*
g = globals
mobile <= 768
desk > 768
*/
g.windowWidth = window.innerWidth;
function testWindowWidth(){
	g.windowWidth = window.innerWidth; 
	if(g.windowWidth <= 768){
		g.view = 'mobile';
	}else{
		g.view = 'desk';
	}
}
testWindowWidth();


//________________________________________________________________________
// Bucket Heights ////////////////////////////////////////////////////////

// Cache $
var $bucketLeft = $('.bucket.left .inner');
var $bucketCenter = $('.bucket.center .inner');
var $bucketRight = $('.bucket.right .inner');

// bucketHts Object
var bucketHts = {};

function normalizeBuckets(){
	if(g.view === 'desk'){
		
		// normalize
		$($bucketLeft).removeAttr('style');
		$($bucketCenter).removeAttr('style');
		$($bucketRight).removeAttr('style');

		// do bucket height testing
		bucketHts.left = $bucketLeft.innerHeight();
		bucketHts.center = $bucketCenter.innerHeight();
		bucketHts.right = $bucketRight.innerHeight();
		var max = Math.max(bucketHts.left,bucketHts.center,bucketHts.right);

		// assign heights
		$($bucketLeft).innerHeight(max);
		$($bucketCenter).innerHeight(max);
		$($bucketRight).innerHeight(max);

	}else if(g.view === 'mobile'){

		// normalize :: columns are stacked :: no need for same size columns
		$($bucketLeft).removeAttr('style');
		$($bucketCenter).removeAttr('style');
		$($bucketRight).removeAttr('style');
	}
}
normalizeBuckets();

//________________________________________________________________________
// Graph Animations //////////////////////////////////////////////////////
var $blueCounter = $('.graph .alliant-savings h6.count');
var $greyCounter = $('.graph .national-average h6.count');
var $blueBar = $('.graph .alliant-savings .bar');
var $greyBar = $('.graph .national-average .bar');
var $results = $('.graph .alliant-savings .results');
var $h = $('.graph .alliant-savings .results h4');
var $placeholder = $('.graph .national-average');
var blueNumber = 0.00;
var greyNumber = 0.00;


var blueCount = function(){
 	var interval = setInterval(function(){
 		if(blueNumber <= 1.0){
 			blueNumber += 0.01;
	 		$blueCounter.html(blueNumber.toFixed(2) + '%');	
 		}else{
 			blueNumber = 1.0;
 			$blueCounter.html(blueNumber.toFixed(2) + '%');
 			clearInterval(interval);
 		}  
 },10);
}
var greyCount = function(){
 	var interval = setInterval(function(){
 		if(greyNumber <= 0.07){
 			greyNumber += 0.01;
	 		$greyCounter.html(greyNumber.toFixed(2) + '%');	
 		}else{
 			greyNumber = 0.07;
 			$greyCounter.html(greyNumber.toFixed(2) + '%');
 			clearInterval(interval);
 		}  
 },50);
}
greyCount();
TweenMax.set($h, {scale:0});
TweenMax.to($greyBar, .75, {ease: Power2.easeOut, height:"10px"});
TweenMax.to($blueBar, 2.25, {delay: 1, ease: Back.easeOut.config(1), height:"140px"});
TweenMax.to($placeholder, 1, {opacity:1, onComplete:blueCount})
TweenMax.to($results, 1, {delay: 2.25,  opacity: 1});
TweenMax.to($h, 1, {delay: 2.25, scale: 1, ease:Back.easeOut.config(3)});

// ___________________________________________________________________________
// End Graph Animations //////////////////////////////////////////////////////











// Debounce Function
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


// Resizing Window :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Keep this function last as it will usually rely on previously defined functions

$(window).resize(function(){

	// Retest windowWidth
	testWindowWidth();
	normalizeBuckets();

});

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
})(); //:: End App


