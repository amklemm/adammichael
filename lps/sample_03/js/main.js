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
var $logo = $('.logo');
var $search = $('.search img.search-icon');
var $paperStack = $('.brand img.paper-stack');
var $aside = $('aside');
var $header = $('header');
var $footer = $('footer');

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
app.windowHeight = window.innerHeight;
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
});


app.productMap = {



	online: [
		'Landing Pages',
		'Retail',
		'Mail'		
	],

	retail: [
		'Posters',
		'Brochures',
		'Table Tents'
	],

	email: [
		'Awareness',
		'Welcome',
		'Power User',
		'Inactive',
		'Lapsed',
		'Abandon',
		'Conversion',
		'Upgrade'
	]
};

// app.product = {

// 	medium: 'online',
// 	obj: {

// 	}




// 	online: {
// 		hash: 'online',

// 		landing: {
// 			title: 'Landing Pages',
// 			subs: [
// 				'Schedule a Payment',
// 				'Instructions',

// 			]
// 		}

// 	}
// }

app.map2 = {

	product: {

	}
}


// var map = [

// 	{
// 		hash: 'online',
// 		title: 'Online',
// 		campaigns: [
// 			{
// 				hash: 'landing',
// 				title: 'Landing Pages',
// 				subs: [
// 					{
// 						hash: 'schedule-a-payment',
// 						title: 'Schedule a Payment Instructions'
// 					},
// 					{
// 						hash: 'power-user',
// 						title: 'Power User Instructions'
// 					},
// 					{
// 						hash: 'faq',
// 						title: 'FAQ Instructions'
// 					},
// 					{
// 						hash: 'savings-calculator',
// 						title: 'Savings Calculator Instructions'
// 					},
// 					{
// 						hash: 'enrollment',
// 						title: 'Enrollment Instructions'
// 					}
// 				]
// 			},
// 			{
// 				hash: 'demo-videos',
// 				title: 'Demo Videos',
// 				subs: [
// 					{
// 						hash: 'one-click',
// 						title: 'OneClick Bill Pay'
// 					},
// 					{
// 						hash: 'plus-bill-pay',
// 						title: 'Plus Bill Pay Instructions'
// 					},
// 				]
// 			},
// 			{
// 				hash: 'banner-ads',
// 				title: 'Banner Ads',
// 				subs: [
// 					{
// 						hash: 'power-user',
// 						title: 'Power User Instructions'
// 					},
// 					{
// 						hash: 'simplify-your-life',
// 						title: 'Simplify your Life Instructions'
// 					},
// 					{
// 						hash: 'this-is-freedom',
// 						title: 'This is Freedom Instructions'
// 					}
// 				]
// 			}
// 		]
// 	},


// 	{
// 		hash: 'retail',
// 		title: 'Retail (In-Branch)',
// 		campaigns: [
// 			{
// 				hash: 'posters',
// 				title: 'Posters',
// 				subs: [
// 					{
// 						hash: 'simplify-your-life',
// 						title: 'Simplify your Life 11x7'
// 					},
// 					{
// 						hash: 'simplify-your-life',
// 						title: 'Simplify your Life 24x36'
// 					},
// 				]
// 			}

// 		]

// 	}

// ];

app.map = {

	consumerBillPay: {

		hash: 'consumerBillPay',
		title: 'Consumer Bill Pay',

		online: {

			title: 'Online',

			landingPages: {

				title: 'Landing Pages',

				scheduleAPayment: {

					hash: 'schedule-a-payment',
					title: 'Schedule a Payment Instructions',
					link: '#',
					image: '#'
				},
				powerUser: {

					hash: 'powerUser',
					title: 'Power User Instructions',
					link: '#',
					image: '#'
				},
				faq: {

					hash: 'faq',
					title: 'FAQ Instructions',
					link: '#',
					image: '#'
				},
				savingsCalculator: {

					hash: 'savings-calculator',
					title: 'Savings Calculator Instructions',
					link: '#',
					image: '#'
				},
				entrollment: {

					hash: 'entrollment',
					title: 'Entrollment Instructions',
					link: '#',
					image: '#'
				},

			},
			

			demoVideos: {

				title: 'Demo Videos'
			},

			bannerAds: {

				title: 'Banner Ads'
			}
		},

		retail: {

			title: 'Retail',

			posters: {


			},

			brochures: {


			},

			tableTents: {


			}
		},

		mail: {

			statementStuffers: {


			},

			postcards: {


			}
		},

		email: {

			awareness: {


			},

			welcome: {


			},

			powerUser: {


			},

			inactive: {


			},

			lapsed: {


			},

			abandon: {


			},

			conversion: {


			},

			upgrade: {


			}
		},

		social: {

			driveEnrollment: {


			},

			driveUsage: {


			}
		},

		content: {

			driveEnrollment: {


			},

			ebillGetStarted: {


			},

			makeAPayment: {


			},

			announceConversion: {


			},

			announceUpgrade: {


			}
		},

		training: {

			oneClickGoodFunds: {


			},

			oneClickFunds: {

						
			},

			oneClickHybridRisk: {


			},

			oneClickGetStarted: {


			},

			oneClickOverview: {


			},

			plusGetStarted: {


			},

			plusOverview: {


			},

			masterSiteGoodFunds: {


			},

			masterSiteFundsVerification: {


			}

		}
	},

	businessBillPay: {

		stuff: 'stuff here'
	},

	billSimple: {


	},

	mobileBanking: {


	}
}

// var first = Lazy(app.map)
// 						.pluck('campaigns')
// 						.take(1);
// 						// .each(function(x) {
// 						// 	console.log(x);
// 						// });



// console.log(first);

// var results = Lazy(app.map)

// 		.pluck('campaigns')
// 		.each(function(x) { console.log(x); });

// var first = Lazy(app.map)
// 		.pluck('title')
// 		.take(1);


// var next = Lazy(first)
// 		.each(function(x) { console.log(x); });




// console.log(results);


// Application JS Below  ::  Utilities Above
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
app.selectionObject = {};
window.so = app.selectionObject;

so.tier1 = 'hello';
so.tier2 = 'world';

function testNavHeight(){
	var totalHeight = $aside.height() + $header.outerHeight() + $footer.outerHeight();

	if(totalHeight < app.windowHeight) {
		// Make the Nav Fixed Position
		$header.css('position', 'fixed');

	}else{
		// Make the Nav Absolute Position so that it can scroll.  The nav is too long to be fixed
		$header.css('position', 'absolute');
		// $('html, body').animate({scrollTop:0}, 600);
	}
}

var $totop = $('.totop');
$totop.on('click', function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

$logo.on('click', function(){
	console.log('clicking logo');
});

$search.on('click', function(){
	console.log('clicking search');
});

$paperStack.on('click', function(){
	console.log('clicking paper stack');
});





var $navFilter = $('.panel-title a');
var $level2 = $('a.level-2');
var $level3 = $('.level-3');

$level2.on('click', function(e){
	e.preventDefault();

	var target = e.target;
	var el;
	var dataOption;
	var active;
	if(target.nodeName === "SPAN" || target.nodeName === "DIV" || target.nodeName === "IMG"){
		// clicked on the span: target the parent
		$(e.target.parentElement).toggleClass('active');
		dataOption = $(e.target.parentElement).attr('data-option');
		el = $('ul.subnav-b.' + dataOption);
		$(el).toggleClass('hidden');

	}else{
		// clicked on the anchor: target the anchor
		$(e.target).toggleClass('active');
		dataOption = $(e.target).attr('data-option');
		el = $('ul.subnav-b.' + dataOption);
		$(el).toggleClass('hidden');
	}

});
$level3.on('click', function(e){
	e.preventDefault();
	$(e.target).toggleClass('active');

	var x = $(e.target).attr('data-option');
});

$navFilter.on('click', function(e){
	e.preventDefault();
	$(e.target).toggleClass('active');
});



$('#accordion').on('shown.bs.collapse', function(){
	testNavHeight();
});
$('#accordion').on('hidden.bs.collapse', function(){
	testNavHeight();
});



function bsCarouselAnimHeight() {
    $('.carousel').carousel({
        interval: 5000
    }).on('slide.bs.carousel', function (e) {
        var nextH = $(e.relatedTarget).height();
        $(this).find('.active.item').parent().animate({
            height: nextH
        }, 500);
    });
}

bsCarouselAnimHeight();



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
})(); //:: End App