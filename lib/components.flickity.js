function loadComponents() {
	"use strict";
	
	/* -------------------------------------------------- */
	/* FONTS AND COPY
	/* -------------------------------------------------- */
	/*
	$("li, p").flowtype({
		minimum: 320,
		maximum: 2560,
		minFont: 12,
		maxFont: 34,
		fontRatio: 100
	});	
	*/
	
	// HEADER
	/*
	$(".h1").fitText(1, {
		maxFontSize: "80px",
		minFontSize: "18px"
	});

	$(".h2").fitText(1, {
		maxFontSize: "72px",
		minFontSize: "18px"
	});	

	$(".h3").fitText(1, {
		maxFontSize: "64px",
		minFontSize: "18px"
	});	

	$(".h4").fitText(1, {
		maxFontSize: "56px",
		minFontSize: "18px"
	});	

	$(".h5").fitText(1, {
		maxFontSize: "48px",
		minFontSize: "18px"
	});	
				
	$(".h6").fitText(1, {
		maxFontSize: "40px",
		minFontSize: "18px"
	});
	
	$(".h7").fitText(1, {
		maxFontSize: "32px",
		minFontSize: "18px"
	});
	
	$(".h8").fitText(1, {
		maxFontSize: "24px",
		minFontSize: "18px"
	});
	*/
	/* -------------------------------------------------- */
	/* VISIBILITY API
	/* -------------------------------------------------- */
	
	var page = new Visibility({
		onHidden: isPageHidden,
		onVisible: isPageVisible
	});

	function isPageHidden () {
		//console.log("Page is inactive.");
		TweenMax.set([".slider-parent", ".slider-nav"], {opacity: 0});
	}

	function isPageVisible () {
		//console.log("Page is active");
		TweenMax.to(".slider-nav", 1, {opacity: 1, delay: 0.5, ease: Expo.easeOut});
		TweenMax.to(".slider-parent", 1, {opacity: 1, delay: 0.75, ease: Expo.easeOut});
	}
	
	/* -------------------------------------------------- */
	/* DATA ATTRIBUTES
	/* -------------------------------------------------- */

	// IMAGE
	var dataImage = document.querySelectorAll("*[data-image]");
	for (var iImage = 0; iImage < dataImage.length; iImage++) {
		var urlImage = dataImage[iImage].getAttribute("data-image");
		dataImage[iImage].style.backgroundImage = "url('" + urlImage + "')";
	}

	// COLOR
	var dataColor = document.querySelectorAll("*[data-color]");
	for (var iColor = 0; iColor < dataColor.length; iColor++) {
		var hexColor = dataColor[iColor].getAttribute("data-color");
		dataColor[iColor].style.backgroundColor = hexColor;
	}
	
	// PAGE
	var dataPage = document.querySelectorAll("*[data-page]");
	for (var iPage = 0; iPage < dataPage.length; iPage++) {
		var idPage = dataPage[iPage].getAttribute("data-page");
	}
	
	/* -------------------------------------------------- */
	/* RELLAX
	/* -------------------------------------------------- */
	
	/*
	var rellax = new Rellax(".rellax", {
		center: false,
		round: true,
		wrapper: pageContent
  	});
	*/

	/* -------------------------------------------------- */
	/* TILT
	/* -------------------------------------------------- */
	
	/*
	$(".tilt").tilt({
		maxTilt: 8,
		speed: 1000,
		easing: "cubic-bezier(0.03,0.98,0.52,0.99)",
		perspective: 1000,
		axis: null,
		glare: false,
		maxGlare: 0.5,
		scale: 1.04,
		reset: true
	});
	*/
	
	/* -------------------------------------------------- */
	/* GRADIENTS
	/* -------------------------------------------------- */
	
	var granimInstance = new Granim({
		element: "#background-gradient",
		name: "basic-gradient",
		direction: "diagonal", // diagonal, left-right, top-bottom, radial
		opacity: [1, 1],
		loop: true,
		stateTransitionSpeed: 500,
		isPausedWhenNotInView: true,
		states : {
			
			"default-state": {
				gradients: [
					["#12bbbb", "#94e7b8"],
					["#94e7b8", "#12bbbb"]
				]
			},
			
			"state-01": {
				gradients: [
					["#d296e6", "#1f39ba"],
					["#1f39ba", "#d296e6"]
				]
			},
			
			"state-02": {
				gradients: [
					["#d66d75", "#e29587"],
					["#e29587", "#d66d75"]
				]
			},
			
			"state-03": {
				gradients: [
					["#f1e767", "#feb645"],
					["#feb645", "#f1e767"]
				]
			},
			
			"state-04": {
				gradients: [
					["#e29587", "#1d2671"],
					["#1d2671", "#e29587"]
				]
			},
			
			"state-05": {
				gradients: [
					["#34e89e", "#0f3443"],
					["#0f3443", "#34e89e"]
				]
			},
			
			"state-06": {
				gradients: [
					["#6190e8", "#a7bfe8"],
					["#a7bfe8", "#6190e8"]
				]
			},
			
			"state-07": {
				gradients: [
					["#200122", "#6f0000"],
					["#6f0000", "#200122"]
				]
			},
			
			"state-08": {
				gradients: [
					["#0575e6", "#021b79"],
					["#021b79", "#0575e6"]
				]
			},
			
			"state-09": {
				gradients: [
					["#ff0000", "#b80000"],
					["#b80000", "#ff0000"]
				]
			},
			
			"state-10": {
				gradients: [
					["#43C6ac", "#f8ffae"],
					["#f8ffae", "#43C6ac"]
				]
			},
			
			"state-11": {
				gradients: [
					["#ffafbd", "#ffc3a0"],
					["#ffc3a0", "#ffafbd"]
				]
			},
			
			"state-12": {
				gradients: [
					["#e8cbc0", "#636fa4"],
					["#636fa4", "#e8cbc0"]
				]
			},
			
			"state-13": {
				gradients: [
					["#dce35b", "#45b649"],
					["#45b649", "#dce35b"]
				]
			},
			
			"state-14": {
				gradients: [
					["#c0c0aa", "#1cefff"],
					["#1cefff", "#c0c0aa"]
				]
			},
			
			"state-15": {
				gradients: [
					["#dbe6f6", "#c5796d"],
					["#c5796d", "#dbe6f6"]
				]
			},
			
			"state-16": {
				gradients: [
					["#00b000", "#006307"],
					["#006307", "#00b000"]
				]
			},
			
			"state-17": {
				gradients: [
					["#67b26f", "#4ca2cd"],
					["#4ca2cd", "#67b26f"]
				]
			},
			
			"state-18": {
				gradients: [
					["#f3904f", "#3b4371"],
					["#3b4371", "#f3904f"]
				]
			},
			
			"state-19": {
				gradients: [
					["#ee0979", "#ff6a00"],
					["#ff6a00", "#ee0979"]
				]
			},
			
			"state-20": {
				gradients: [
					["#a770ef", "#fdb99b"],
					["#fdb99b", "#a770ef"]
				]
			},
			
			"state-21": {
				gradients: [
					["#f4c4f3", "#fc67fa"],
					["#fc67fa", "#f4c4f3"]
				]
			},
			
			"state-22": {
				gradients: [
					["#00c3ff", "#ffff1c"],
					["#ffff1c", "#00c3ff"]
				]
			},
			
			"state-23": {
				gradients: [
					["#e96443", "#904e95"],
					["#904e95", "#e96443"]
				]
			},
			
			"state-24": {
				gradients: [
					["#ff00cc", "#333399"],
					["#333399", "#ff00cc"]
				]
			},
			
			"state-25": {
				gradients: [
					["#0ee817", "#2657eb"],
					["#2657eb", "#0ee817"]
				]
			},
			
			"state-26": {
				gradients: [
					["#ef32d9", "#89fffd"],
					["#89fffd", "#ef32d9"]
				]
			},
			
			"state-27": {
				gradients: [
					["#1d1d1d", "#000000"],
					["#000000", "#1d1d1d"]
				]
			}

		}
	});	
	
	/*
	window.backgroundDefault = function() {
		granimInstance.changeState("default-state");
	};	
	
	window.state01 = function() {
		granimInstance.changeState("state-01");
	};
	*/

	/* -------------------------------------------------- */
	/* UI
	/* -------------------------------------------------- */

	var uiLight = function() {

		//console.log("Light UI");
		//var socialItemsClass = "round-md button button-width-xxxs button-height-xxxs border-xxxs border-solid border-charcoal text-primary text-charcoal-hover background-charcoal background-transparent-hover";
		
		$(".hamburger").addClass("active");
		$(".cross").addClass("active");
		
		$(".logo-desktop").css("color", "#ffffff"); 
		$(".logo-mobile path").css("fill", "#ffdb55");
		
		$("#nav-panel-items ul").css("color", "#ffffff");
		$("#nav-panel-contents .border-top").css("border-color", "#ffffff");
		$("#nav-panel-contents div p").css("color", "#ffffff");
		
		$("#nav-contact-info li").css("color", "#ffffff");
		
		$(".slider-nav div a").css("color", "#ffffff");
		
		$(".flickity-page-dots .dot").css("background-color", "#ffffff");
		$(".flickity-page-dots .dot.is-selected").css("background-color", "#ff0000");
		
		$(".slider-item .cell h1").css("color", "#ffffff");
		$(".slider-item .cell p").css("color", "#ffffff");
		
		$("#nav-social li").removeClass().addClass("round-md button button-width-xxxs button-height-xxxs border-xxxs border-solid border-white border-primary-hover text-charcoal text-white-hover background-white background-primary-hover");
		
		$(".social-share-title").css("color", "#ffffff");
		$(".social-share-items li").removeClass().addClass("round-md button button-width-xxxs button-height-xxxs border-xxxs border-solid border-white border-primary-hover text-charcoal text-white-hover background-white background-primary-hover");
		
		$("footer").css("color", "#ffffff");
		
		//$("#nav-social li").css("border-color", "#ffffff").css("background-color", "#ffffff").css("color", "#1d1d1d");

	};

	var uiDark = function() {

		//console.log("Dark UI");
		
		$(".hamburger").removeClass("active");
		$(".cross").removeClass("active");
		
		$(".logo-desktop").css("color", "#1d1d1d"); 
		$(".logo-mobile path").css("fill", "#1d1d1d"); 
		
		$("#nav-panel-items ul").css("color", "#1d1d1d");
		$("#nav-panel-contents .border-top").css("border-color", "#1d1d1d");
		$("#nav-panel-contents div p").css("color", "#1d1d1d");

		$("#nav-contact-info li").css("color", "#1d1d1d");	
		
		$(".slider-nav div a").css("color", "#1d1d1d");
	
		$(".flickity-page-dots .dot").css("background-color", "#1d1d1d");
		$(".flickity-page-dots .dot.is-selected").css("background-color", "#ffffff");	
		
		$(".slider-item .cell h1").css("color", "#1d1d1d");
		$(".slider-item .cell p").css("color", "#1d1d1d");
		
		$("#nav-social li").removeClass().addClass(socialItemsClass);
		
		$(".social-share-title").css("color", "#1d1d1d");
		$(".social-share-items li").removeClass().addClass(socialItemsClass);
		
		$("footer").css("color", "#1d1d1d");

	};
		
	/* -------------------------------------------------- */
	/* SUBNAV
	/* -------------------------------------------------- */





	/* -------------------------------------------------- */
	/* IMAGE GALLERY 
	/* -------------------------------------------------- */
	
	

	/* -------------------------------------------------- */
	/* SLIDER 
	/* -------------------------------------------------- */
	
	// CACHE SELECTORS / ELEMENTS
	var link1967PocketRadio = ".1967-pocket-radio";
	var link1970VCR = ".1970-vcr";
	var link1974LaserdiscPlayer = ".1974-laserdisc-player";
	var link1975DigitalWatch = ".1975-digital-watch";
	var link1975AtariPongHomeConsole = ".1975-atari-pong-home-console";
	var link1978HomeComputer = ".1978-home-computer";
	var link1981Camcorder = ".1981-camcorder";
	var link1981CompactDiscPlayer = ".1981-compact-disc-player";
	var link1982Commodore64Computer = ".1982-commodore-64-computer";
	var link1985NES = ".1985-nintendo-entertainment-system";
	var link1990DigitalAudioTechnology = ".1990-digital-audio-technology";
	var link1994DigitalSatelliteSystem = ".1994-digital-satellite-system";
	var link1996DVDPlayer = ".1996-dvd-player";
	var link1998HDTV = ".1998-hdtv";
	var link1999DVR = ".1999-dvr";
	var link2000SatelliteRadio = ".2000-satellite-radio";
	var link2001MicrosoftXbox = ".2001-microsoft-xbox";
	var link2003BluRay = ".2003-blu-ray";
	var link2005IPTV = ".2005-iptv";
	var link2010TabletsAndAndroidDevices = ".2010-tablets-and-android-devices";
	var link2011SmartTV = ".2011-smart-tv";
	var link2011SmartAppliance = ".2011-smart-appliance";
	var link2013DriverlessCarTechnology = ".2013-driverless-car-technology";
	var link20143DPrinter = ".2014-3d-printer";
	var link2014WearableTechnology = ".2014-wearable-technology";
	var link20154KTV = ".2015-4k-tv";
	var link2015VR = ".2015-vr";

	// SET INDEX
	var newIndexNumber = Number;

		if (window.location.hash === $(link1967PocketRadio).attr("href") ) {

			newIndexNumber = 0;

		}

		if (window.location.hash === $(link1970VCR).attr("href") ) {
			
			newIndexNumber = 1;

		}
		
		if (window.location.hash === $(link1974LaserdiscPlayer).attr("href") ) {

			newIndexNumber = 2;

		}
		
		if (window.location.hash === $(link1975DigitalWatch).attr("href") ) {

			newIndexNumber = 3;

		}
		
		if (window.location.hash === $(link1975AtariPongHomeConsole).attr("href") ) {
			
			newIndexNumber = 4;

		}

		if (window.location.hash === $(link1978HomeComputer).attr("href") ) {
			
			newIndexNumber = 5;

		}
		
		if (window.location.hash === $(link1981Camcorder).attr("href") ) {

			newIndexNumber = 6;

		}
	
		if (window.location.hash === $(link1981CompactDiscPlayer).attr("href") ) {

			newIndexNumber = 7;

		}

		if (window.location.hash === $(link1982Commodore64Computer).attr("href") ) {
			
			newIndexNumber = 8;

		}
		
		if (window.location.hash === $(link1985NES).attr("href") ) {
			
			newIndexNumber = 9;

		}
		
		if (window.location.hash === $(link1990DigitalAudioTechnology).attr("href") ) {

			newIndexNumber = 10;

		}

		if (window.location.hash === $(link1994DigitalSatelliteSystem).attr("href") ) {

			newIndexNumber = 11;

		}
		
		if (window.location.hash === $(link1996DVDPlayer).attr("href") ) {

			newIndexNumber = 12;

		}	
		
		if (window.location.hash === $(link1998HDTV).attr("href") ) {

			newIndexNumber = 13;

		}

		if (window.location.hash === $(link1999DVR).attr("href") ) {
			
			newIndexNumber = 14;

		}
		
		if (window.location.hash === $(link2000SatelliteRadio).attr("href") ) {

			newIndexNumber = 15;

		}
		
		if (window.location.hash === $(link2001MicrosoftXbox).attr("href") ) {

			newIndexNumber = 16;

		}
	
		if (window.location.hash === $(link2003BluRay).attr("href") ) {

			newIndexNumber = 17;

		}

		if (window.location.hash === $(link2005IPTV).attr("href") ) {
			
			newIndexNumber = 18;

		}
		
		if (window.location.hash === $(link2010TabletsAndAndroidDevices).attr("href") ) {

			newIndexNumber = 19;

		}
		
		if (window.location.hash === $(link2011SmartTV).attr("href") ) {

			newIndexNumber = 20;

		}

		if (window.location.hash === $(link2011SmartAppliance).attr("href") ) {
			
			newIndexNumber = 21;

		}
		
		if (window.location.hash === $(link2013DriverlessCarTechnology).attr("href") ) {

			newIndexNumber = 22;

		}

		if (window.location.hash === $(link20143DPrinter).attr("href") ) {

			newIndexNumber = 23;

		}
		
		if (window.location.hash === $(link2014WearableTechnology).attr("href") ) {

			newIndexNumber = 24;

		}

		if (window.location.hash === $(link20154KTV).attr("href") ) {
			
			newIndexNumber = 25;

		}
		
		if (window.location.hash === $(link2015VR).attr("href") ) {

			newIndexNumber = 26;

		}

		//console.log("New Number: " + newIndexNumber);

	// CREATE SLIDER OBJECT INSTANCE
	var sliderParent = $(".slider-parent").flickity({
		
		// SET-UP
		cellSelector: ".slider-item",
		initialIndex: newIndexNumber,
		accessibility: true,
		setGallerySize: true,
		resize: true,
		
		// CELL POSITION
		cellAlign: "center",
		contain: false,
		imagesLoaded: true,
		percentPosition: true,
		rightToLeft: false,

		// BEHAVIOR
		draggable: true,
		freeScroll: false,
		wrapAround: false,
		groupCells: false,
		autoPlay: false,
		pauseAutoPlayOnHover: false,
		adaptiveHeight: true,
		watchCSS: false,
		dragThreshold: 25,
		selectedAttraction: 0.2, // Higher attraction and higher friction = faster transitions.
		friction: 1,
		freeScrollFriction: 0.03,
		
		// UI
		prevNextButtons: false,
		pageDots: true,
		
		//LAZYLOAD
		lazyLoad: 2,
		bgLazyLoad: 1,
		
	});




		
	// NAV
	$(".slider-nav").flickity({
		
		// CONTROLLER
  		asNavFor: ".slider-parent",
		
		// SET-UP
		cellSelector: "div",
		initialIndex: newIndexNumber,
		accessibility: true,
		setGallerySize: true,
		resize: true,
		
		// CELL POSITION
		cellAlign: "center",
		contain: true,
		imagesLoaded: true,
		percentPosition: true,
		rightToLeft: false,

		// BEHAVIOR
		draggable: true,
		freeScroll: true,
		wrapAround: false,
		groupCells: false,
		autoPlay: false,
		pauseAutoPlayOnHover: false,
		adaptiveHeight: true,
		watchCSS: false,
		dragThreshold: 25,
		selectedAttraction: 0.1, // Higher attraction and higher friction = faster transitions.
		friction: 0.4,
		freeScrollFriction: 0.03,
		
		// UI
		prevNextButtons: false,
		pageDots: false,
		
		//LAZYLOAD
		lazyLoad: 2,
		bgLazyLoad: 1,
		
		
	});
	
	// INIT SLIDER
	//sliderParent[0].offsetHeight;
	sliderParent.flickity();
	
	
	
	
	
	// SET VARS
	var sliderItemIndex = sliderParent.data("flickity");
	
	
	
	

	// STATIC CLICK
	sliderParent.on("staticClick.flickity", function(event, pointer, cellElement, cellIndex) {
		
		// Dismiss if cell was not clicked.
		if (!cellElement) {
			
			return;
			
		} else {
		
			console.log( 'Cell ' + ( cellIndex + 1 )  + ' clicked' );
			
		}
		
	});
	
	
	
	
	
	// LAZYLOAD
	/*
	sliderParent.on("lazyLoad.flickity", function(event, cellElement) {
		
		var img = event.originalEvent.target;
		console.log(event.originalEvent.type, img.src);
		
	});
	
	sliderParent.on( "bgLazyLoad.flickity", function(event, element) {
		
		var img = event.originalEvent.target;
		console.log(event.originalEvent.type, img.src);
		
	});
	*/
	
	
	
	
	
	// DISABLE DRAGGING ON SCROLL
	//var isDraggable = true;
	var sliderParentEnableDragging = function() {
		//console.log("Dragging enabled on silder.");
		sliderParent.flickity("bindDrag");
	};
	
	var sliderParentDisableDragging = function() {
		//console.log("Dragging disabled on silder.");
		sliderParent.flickity("unbindDrag");
	};
	
	
	
	
	
	// DESTROY
	/*
	if ( isTouch && isPhone ) {
		console.log("Mobile device detected. Destroying slider object.");
		sliderParent.flickity("destroy");
	}
	*/
	
	/* -------------------------------------------------- */
	/* CUSTOM 
	/* -------------------------------------------------- */
	
	var animSlideItemIn = function() {


		TweenMax.to(".slider-item.is-selected", 0.75, {autoAlpha: 1, scale: 1, y: 0, delay: 0.5, ease: Back.easeOut,
										   onStart:

											   function() {

												   TweenMax.set(".slider-item.is-selected", {webkitFilter: "blur(0)", filter: "blur(0)"});
												   $(".slider-nav").removeClass("pointer-disabled");

												   TweenMax.to(".slider-item.is-selected .cell img", 0.25, {autoAlpha: 1, scale: 1, y: 0, ease: Back.easeIn});

											   },

										   onComplete:

											   function() {



											   }

										  });




		/*
		var tlAnimSlideItemIn = new TimelineMax({paused: false, delay: 1, repeat: 0, repeatDelay: 0, yoyo: false});
			tlAnimSlideItemIn.to(".slider-item", 0.25, {autoAlpha: 1, scale: 1, y: 0, ease: Back.easeOut})
							 .to(".slider-item .cell img", 0.25, {autoAlpha: 1, scale: 1, y: 0,ease: Back.easeOut});

							 .set(".slider-item", {webkitFilter: "blur(0)", filter: "blur(0)"});
		*/

	};

	var animSlideItemOut = function() {

		if ( !isTouch && !$(".slider-item").hasClass(".is-selected") ) {

			$(".slider-nav").addClass("pointer-disabled");

			TweenMax.to(".slider-item", 0.75, {autoAlpha: 0.5, scale: 1, y: 0, ease: Back.easeOut});
			TweenMax.set(".slider-item .cell img", {autoAlpha: 1, scale: 0.75, y: 10});
			TweenMax.set(".slider-item", {webkitFilter: "blur(3px)", filter: "blur(3px)"});

		}

		/*
		var tlAnimSlideItemOut = new TimelineMax({paused: false, delay: 0, repeat: 0, repeatDelay: 0, yoyo: false});
			tlAnimSlideItemOut.to(".slider-item", 0.25, {autoAlpha: 0.5, scale: 1, y: 0, ease: Expo.easeIn})
							  .to(".slider-item .cell img", 0.25, {autoAlpha: 0, scale: 0.75, y: 20,ease: Expo.easeIn});

							 .set(".slider-item", {webkitFilter: "blur(0)", filter: "blur(0)"});
		*/

	};

	animSlideItemIn();
	//animSlideItemOut();





	// HASH NAVIGATION (DEEP LINKING)
	var sliderItemIndexHash = window.location.hash.substr(1);
	var sliderItemIndexDataID = $(sliderItemIndex.selectedElement).attr("data-id");
	
	sliderParent.flickity("selectCell", '[id=" '+sliderItemIndexHash+' "]', null, true);
	window.location.hash = sliderItemIndexDataID;
	
	sliderParent.on("select.flickity", function() {
		
		$('a[href="'+window.location.hash+'"]').addClass("active");
		
		$('.slider-nav div a.active[href="'+window.location.hash+'"]').addClass("active");
		//TweenMax.to('.slider-nav div a.active[href="'+window.location.hash+'"]', 0.5, {autoAlpha: 1, scale: 4, y: 0, transformOrigin: "center center", ease: Back.easeOut});
		
		sliderItemIndexDataID = $(sliderItemIndex.selectedElement).attr("data-id");
		window.location.hash = sliderItemIndexDataID;

		animSlideItemIn();

		
	});

	

	
	
	// SHARE LINKS	
	$(".button-share-facebook").click( function(e) {
		e.preventDefault();
		
		//$("meta[property='og\\:title']").attr("content", "test");
		var shareURL = $(this).data("share");
		
		window.open('https://www.facebook.com/sharer/sharer.php?u='+shareURL+'');
		
		return false;
	});
	
	$(".button-share-twitter").click( function(e) {
		e.preventDefault();
		
		//var shareHost = window.location.href;
		//var shareHash = $(sliderItemIndex.selectedElement).attr("data-id");
		//console.log(shareURLTest);
		//var shareTitle = $(this).text( $(".slider-item.is-selected .cell h1").text() );
		var shareURL = $(this).data("share");
		
		window.open('https://twitter.com/share?url='+shareURL+'&via=twitterdev&related=twitterapi%2Ctwitter&hashtags=example%2Cdemo&text=custom%20share%20text');
		
		return false;
	});


	
	
	
	// ANIMATE ACTIVE / INACTIVE
	sliderParent.on("select.flickity dragMove.flickity pointerMove.flickity", function() {
				
		$(sliderParent).addClass("selection-disabled");
		animSlideItemOut();

	});

	
	
	sliderParent.on("dragEnd.flickity pointerUp.flickity", function() {

		$(sliderParent).removeClass("selection-disabled");
		animSlideItemIn();

	});
	
	
	
	
	
	
	
	// DETECT FIRST / LAST SLIDE
	sliderParent.on("select.flickity", function() {
		
  		if ( sliderItemIndex.selectedIndex === sliderItemIndex.cells.length - 1 ) {
			
			animSlideItemIn();
			
  		}
		
	});
	
	sliderParent.on("select.flickity", function() {
		
  		if ( sliderItemIndex.selectedIndex === 0 ) {
			
			animSlideItemIn();
			
  		}
		
	});	

	// COOKIE
	// Create cookie object to reference if cookie is stored.
	var cookieCurrentHash = "user";
	var valueCurrentHash = "value";

	// Define vars for current url.
	//var currentHost = window.location.host; // Ex: www.google.com
	//var currentURLLocation = window.location.href; // Ex: https://google.com
	//var currentURLPath = window.location.pathname; // Ex: https://google.com/example/example.html
	//var currentURLHash = window.location.hash; // Ex: https://google.com/#example

	// Check for cookie.
	//var currentSliderItemIndexHash = window.location.hash;

	var setCookieSliderItemIndexHash = function() {

		console.log("Cookie set to: " + valueCurrentHash );
		Cookies.set(cookieCurrentHash, valueCurrentHash);



	};

	var getCookieSliderItemIndexHash = function () {

		if (Cookies("user")) {	

			console.log("Cookie found, redirecting to: " +  sliderItemIndexDataID );
			window.location.hash = valueCurrentHash;

		} else {

			console.log("Cookie not found.");
			Cookies.set(cookieCurrentHash, valueCurrentHash);

		}

	};

	//getCookieSliderItemIndexHash();


	// FUNCTIONS
	var func1967PocketRadio = function() {

		uiDark();
		sliderParent.flickity("selectCell", 0);
		granimInstance.changeState("default-state");

	};
	
	var func1970VCR = function() {

		uiLight();
		sliderParent.flickity("selectCell", 1);
		granimInstance.changeState("state-01");

	};
	
	var func1974LaserdiscPlayer = function() {

		uiLight();
		sliderParent.flickity("selectCell", 2);
		granimInstance.changeState("state-02");

	};
	
	var func1975DigitalWatch = function() {

		uiDark();
		sliderParent.flickity("selectCell", 3);
		granimInstance.changeState("state-03");

	};
	
	var func1975AtariPongHomeConsole = function() {

		uiLight();
		sliderParent.flickity("selectCell", 4);
		granimInstance.changeState("state-04");

	};
	
	var func1978HomeComputer = function() {

		uiLight();
		sliderParent.flickity("selectCell", 5);
		granimInstance.changeState("state-05");

	};
	
	var func1981Camcorder = function() {

		uiDark();
		sliderParent.flickity("selectCell", 6);
		granimInstance.changeState("state-06");

	};
	
	var func1981CompactDiscPlayer = function() {

		uiLight();
		sliderParent.flickity("selectCell", 7);
		granimInstance.changeState("state-07");

	};
	
	var func1982Commodore64Computer = function() {

		uiLight();
		sliderParent.flickity("selectCell", 8);
		granimInstance.changeState("state-08");

	};
	
	var func1985NES = function() {

		uiLight();
		sliderParent.flickity("selectCell", 9);
		granimInstance.changeState("state-09");

	};
	
	var func1990DigitalAudioTechnology = function() {

		uiDark();
		sliderParent.flickity("selectCell", 10);
		granimInstance.changeState("state-10");

	};
	
	var func1994DigitalSatelliteSystem = function() {

		uiDark();
		sliderParent.flickity("selectCell", 11);
		granimInstance.changeState("state-11");

	};
	
	var func1996DVDPlayer = function() {

		uiLight();
		sliderParent.flickity("selectCell", 12);
		granimInstance.changeState("state-12");

	};
	
	var func1998HDTV = function() {

		uiDark();
		sliderParent.flickity("selectCell", 13);
		granimInstance.changeState("state-13");

	};
	
	var func1999DVR = function() {

		uiDark();
		sliderParent.flickity("selectCell", 14);
		granimInstance.changeState("state-14");

	};
	
	var func2000SatelliteRadio = function() {

		uiDark();
		sliderParent.flickity("selectCell", 15);
		granimInstance.changeState("state-15");

	};
	
	var func2001MicrosoftXbox = function() {

		uiLight();
		sliderParent.flickity("selectCell", 16);
		granimInstance.changeState("state-16");

	};
	
	var func2003BluRay = function() {

		uiLight();
		sliderParent.flickity("selectCell", 17);
		granimInstance.changeState("state-18");

	};
	
	var func2005IPTV = function() {

		uiLight();
		sliderParent.flickity("selectCell", 18);
		granimInstance.changeState("state-19");

	};
	
	var func2010TabletsAndAndroidDevices = function() {

		uiDark();
		sliderParent.flickity("selectCell", 19);
		granimInstance.changeState("state-20");

	};
	
	var func2011SmartTV = function() {

		uiDark();
		sliderParent.flickity("selectCell", 20);
		granimInstance.changeState("state-21");

	};
	
	var func2011SmartAppliance = function() {

		uiDark();
		sliderParent.flickity("selectCell", 21);
		granimInstance.changeState("state-22");

	};
	
	var func2013DriverlessCarTechnology = function() {

		uiLight();
		sliderParent.flickity("selectCell", 22);
		granimInstance.changeState("state-23");

	};
	
	var func20143DPrinter = function() {

		uiLight();
		sliderParent.flickity("selectCell", 23);
		granimInstance.changeState("state-24");

	};	

	var func2014WearableTechnology = function() {

		uiLight();
		sliderParent.flickity("selectCell", 24);
		granimInstance.changeState("state-25");

	};
	
	var func20154KTV = function() {

		uiDark();
		sliderParent.flickity("selectCell", 25);
		granimInstance.changeState("state-26");

	};
	
	var func2015VR = function() {

		uiLight();
		sliderParent.flickity("selectCell", 26);
		granimInstance.changeState("state-27");

	};	
	
	// BUTTONS
	$(link1967PocketRadio).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1967PocketRadio();
 		 

	});	

	$(link1970VCR).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1970VCR();
 		 

	});

	$(link1974LaserdiscPlayer).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1974LaserdiscPlayer();
 		 

	});

	$(link1975DigitalWatch).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1975DigitalWatch();
 		 

	});	
	
	$(link1975AtariPongHomeConsole).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1975AtariPongHomeConsole();
 		 

	});	
	
	$(link1978HomeComputer).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1978HomeComputer();
 		 

	});	
	
	$(link1981Camcorder).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1981Camcorder();
 		 

	});	

	$(link1981CompactDiscPlayer).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1981CompactDiscPlayer();
 		 

	});

	$(link1982Commodore64Computer).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1982Commodore64Computer();
 		 

	});

	$(link1985NES).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1985NES();
 		 

	});	
	
	$(link1990DigitalAudioTechnology).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1990DigitalAudioTechnology();
 		 

	});	
	
	$(link1994DigitalSatelliteSystem).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1994DigitalSatelliteSystem();
 		 

	});	

	$(link1996DVDPlayer).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1996DVDPlayer();
 		 

	});	

	$(link1998HDTV).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1998HDTV();
 		 

	});

	$(link1999DVR).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func1999DVR();
 		 

	});

	$(link2000SatelliteRadio).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2000SatelliteRadio();
 		 

	});	
	
	$(link2001MicrosoftXbox).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2001MicrosoftXbox();
 		 

	});	
	
	$(link2003BluRay).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2003BluRay();
 		 

	});	

	$(link2005IPTV).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2005IPTV();
 		 

	});

	$(link2010TabletsAndAndroidDevices).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2010TabletsAndAndroidDevices();
 		 

	});

	$(link2011SmartTV).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2011SmartTV();
 		 

	});	
	
	$(link2011SmartAppliance).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2011SmartAppliance();
 		 

	});	
	
	$(link2013DriverlessCarTechnology).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2013DriverlessCarTechnology();
 		 

	});
	
	$(link20143DPrinter).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func20143DPrinter();
 		 

	});

	$(link2014WearableTechnology).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2014WearableTechnology();
 		 

	});

	$(link20154KTV).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func20154KTV();
 		 

	});	
	
	$(link2015VR).on("click", function(e) {
		e.preventDefault();

  		var sliderItemHash = $(this).attr("href");
		window.location.hash = sliderItemHash;

 		func2015VR();
 		 

	});	

	// HASH NAV
	window.onhashchange = function() {
		
		console.log(window.location.hash + " Hash changed");
		
		$("a").removeClass("active");
		
		hashChange();

	};


	var hashChange = function() {

		if (window.location.hash === $(link1967PocketRadio).attr("href") ) {

			func1967PocketRadio();

		}

		if (window.location.hash === $(link1970VCR).attr("href") ) {
			
			func1970VCR();

		}
		
		if (window.location.hash === $(link1974LaserdiscPlayer).attr("href") ) {

			func1974LaserdiscPlayer();

		}
		
		if (window.location.hash === $(link1975DigitalWatch).attr("href") ) {

			func1975DigitalWatch();

		}
		
		if (window.location.hash === $(link1975AtariPongHomeConsole).attr("href") ) {
			
			func1975AtariPongHomeConsole();

		}

		if (window.location.hash === $(link1978HomeComputer).attr("href") ) {
			
			func1978HomeComputer();

		}
		
		if (window.location.hash === $(link1981Camcorder).attr("href") ) {

			func1981Camcorder();

		}
	
		if (window.location.hash === $(link1981CompactDiscPlayer).attr("href") ) {

			func1981CompactDiscPlayer();

		}

		if (window.location.hash === $(link1982Commodore64Computer).attr("href") ) {
			
			func1982Commodore64Computer();

		}
		
		if (window.location.hash === $(link1985NES).attr("href") ) {
			
			func1985NES();

		}
		
		if (window.location.hash === $(link1990DigitalAudioTechnology).attr("href") ) {

			func1990DigitalAudioTechnology();

		}

		if (window.location.hash === $(link1994DigitalSatelliteSystem).attr("href") ) {

			func1994DigitalSatelliteSystem();

		}
		
		if (window.location.hash === $(link1996DVDPlayer).attr("href") ) {

			func1996DVDPlayer();

		}	
		
		if (window.location.hash === $(link1998HDTV).attr("href") ) {

			func1998HDTV();

		}

		if (window.location.hash === $(link1999DVR).attr("href") ) {
			
			func1999DVR();

		}
		
		if (window.location.hash === $(link2000SatelliteRadio).attr("href") ) {

			func2000SatelliteRadio();

		}
		
		if (window.location.hash === $(link2001MicrosoftXbox).attr("href") ) {

			func2001MicrosoftXbox();

		}
	
		if (window.location.hash === $(link2003BluRay).attr("href") ) {

			func2003BluRay();

		}

		if (window.location.hash === $(link2005IPTV).attr("href") ) {
			
			func2005IPTV();

		}
		
		if (window.location.hash === $(link2010TabletsAndAndroidDevices).attr("href") ) {

			func2010TabletsAndAndroidDevices();

		}
		
		if (window.location.hash === $(link2011SmartTV).attr("href") ) {

			func2011SmartTV();

		}

		if (window.location.hash === $(link2011SmartAppliance).attr("href") ) {
			
			func2011SmartAppliance();

		}
		
		if (window.location.hash === $(link2013DriverlessCarTechnology).attr("href") ) {

			func2013DriverlessCarTechnology();

		}

		if (window.location.hash === $(link20143DPrinter).attr("href") ) {

			func20143DPrinter();

		}
		
		if (window.location.hash === $(link2014WearableTechnology).attr("href") ) {

			func2014WearableTechnology();

		}

		if (window.location.hash === $(link20154KTV).attr("href") ) {
			
			func20154KTV();

		}
		
		if (window.location.hash === $(link2015VR).attr("href") ) {

			func2015VR();

		}

	};
	
	hashChange();

	/* -------------------------------------------------- */
	/* HERO
	/* -------------------------------------------------- */

		
			
		
		
}
