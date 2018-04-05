
function loadComponents() {
	"use strict";
	
	/* -------------------------------------------------- */
	/* YOUTUBE API
	/* -------------------------------------------------- */

	

	/* -------------------------------------------------- */
	/* VISIBILITY API
	/* -------------------------------------------------- */
	
    var page = new Visibility({
        onHidden: isPageHidden,
        onVisible: isPageVisible
    });

    function isPageHidden () {
        //console.log("Page is inactive.");
		
		/*
		if (!isTouch && !isPhone) {
			disableParticles();
		}
		*/
        
    }

    function isPageVisible () {
        //console.log("Page is active");

		/*
    	if (!isTouch && !isPhone) {
        	enableParticles();
		}
		*/
		
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
	/* PARALLAX
	/* -------------------------------------------------- */

    /*
	var rellax = new Rellax(".rellax", {
		center: true,
		round: true,
		vertical: true,
		horizontal: false
  	});
    */
    
	/* -------------------------------------------------- */
	/* PARTICLES
	/* -------------------------------------------------- */
    
    // Destroy on mobile devices.
	/*
    if (isTouch && isPhone) {

        disableParticles();

    } else {

        enableParticles();

    }
	*/
    
	/* -------------------------------------------------- */
	/* TILT
	/* -------------------------------------------------- */
	
	/*
	if (!isTouch) {
		
		$(".tilt").tilt({
			maxTilt: 4,
			speed: 1,
			easing: "cubic-bezier(0.86, 0, 0.07, 1)",
			perspective: 800,
			axis: null,
			glare: false,
			maxGlare: 0.5,
			scale: 1,
			reset: true
		});
		
	}
	*/
	
	/*
	$(".tilt").on("click touchend mouseup mouseleave", function() {
		
		$(this).tilt.destroy.call(this);
		
	}).on("click touchend mouseup mouseleave", function() {
		
		$(this).tilt();
		
	});
	*/
    
	/*
	var tilt = $('.tilt').tilt();
	
    if (isTouch) {
        tilt.methods.destroy.call(tilt);
    }
	*/
	
	/* -------------------------------------------------- */
	/* GRADIENTS
	/* -------------------------------------------------- */
	
	/*
	var granimInstance = new Granim({
		element: "#background-gradient",
		name: "granim",
		direction: "diagonal", // diagonal, left-right, top-bottom, radial
		opacity: [1, 1],
		loop: false,
		stateTransitionSpeed: 500,
		isPausedWhenNotInView: true,
		scrollDebounceThreshold: 300,
		states : {
			
			"default-state": {
				gradients: [
					["#fa0096", "#3200fa"],
					["#fa0096", "#fa0096"]
				]
			},
			
			"gradient-charcoal": {
				gradients: [
					["#000", "#1d1d1d"],
					["#1d1d1d", "#000"]
				]
			}

		},
		onStart: function() {
			//console.log('Granim: onStart');
			
		},
		onGradientChange: function(colorDetails) {
			//console.log('Granim: onGradientChange, details: ');
			//console.log(colorDetails);
			
		},
		onEnd: function() {
			//console.log('Granim: onEnd');
			
		}
		
		
	});
	*/
	
	/*
	window.backgroundDefault = function() {
		granimInstance.changeState("default-state");
	};
	*/

    /* -------------------------------------------------- */
    /* SCROLL PROGRESS
    /* -------------------------------------------------- */
	
	var scrollProgress = function() {

		var windowScrollProgressTop = $(window).scrollTop(),
			documentScrollProgressHeight = $(document).height(),
			windowScrollProgressHeight = $(window).height();

		//console.log(wintop);

		var totalScroll = (windowScrollProgressTop / (documentScrollProgressHeight - windowScrollProgressHeight)) * 100;

		//console.log("total scroll" + totalScroll);

		$(".scroll-progress").css("width", totalScroll+"%");

	};
	
	//$(pageContent).on("scroll", _.throttle(scrollProgress, 0));
	
    // CONTROLLER
	/*
    var ScrollMagicScrollProgressController = new ScrollMagic.Controller({
                            container: pageContent,
                            vertical: true,
                            globalSceneOptions: {
                                triggerHook: "0"
                            },
                            refreshInterval: 0,
                            loglevel: 2
                         });
	*/

    // ANIMATION


    // SCENE  
	/*
	TweenMax.set(".scroll-progress", {rotation: 0.01, z: 0.01, transformOrigin: "top left", force3D: true, autoRound: false});


	var ScrollMagicScrollProgressScene = new ScrollMagic.Scene({triggerElement: this, duration: $(body).height(), offset: $("#footer").outerHeight() })
                                     .setTween(".scroll-progress", 1, {width: "100%", ease: Linear.easeNone}) 
                                     .addTo(ScrollMagicScrollProgressController);
	*/
	
    /* -------------------------------------------------- */
    /* EMERGENCE
    /* -------------------------------------------------- */

    emergence.init({
        container: pageContent,
        reset: false,
        handheld: false,
        throttle: 300,
        elemCushion: 0,
        offsetTop: 0,
        offsetRight: 0,
        offsetBottom: 0,
        offsetLeft: 0,
        callback: function(element, state) {
            
        if (state === "visible") {
            
            //console.log("Element is visible.");
            
			var clearProps = function() {
			
				TweenMax.set(".tip-top, .tip-bottom, .tip-left, .tip-right", {clearProps: "transform"});
				
			};
			
			
			TweenMax.to($(element), 0.35, {autoAlpha: 1, delay: 0, ease: Expo.easeInOut});	
			TweenMax.staggerTo($(element).children(), 0.35, {autoAlpha: 1, y: 0, ease: Expo.easeInOut, onComplete: clearProps}, 0.12);
            
            
        } else if (state === "reset") {
            
            //console.log("Element is hidden with reset.");
            
			TweenMax.set($(element), {autoAlpha: 0});
			TweenMax.set($(element).children(), {autoAlpha: 0, y: 50});
            
            
        } else if (state === "noreset") {
            
            //console.log("Element is hidden with NO reset.");
            
        }
            
      }
    });
    
    emergence.engage();
	//emergence.disengage();
	
	// Destroy on mobile devices.
	if (isPhone) {
    	emergence.disengage();
	}
	
    /* -------------------------------------------------- */
    /* HERO HEADER INTRO
    /* -------------------------------------------------- */
	
	// SET-UP
	var tlHeroHeader = new TimelineMax({paused: false, delay: 2, repeat: 0, repeatDelay: 0, yoyo: false});
		
	var heroHeaderSplitText = new SplitText("#hero-header", {type:"words, chars, lines"}), 
		heroHeaderSplitText = heroHeaderSplitText.chars;
	
	var heroSubheaderSplitText = new SplitText("#hero-subheader", {type:"words, chars, lines"}), 
		heroSubheaderSplitText = heroSubheaderSplitText.chars;
	
	// ANIMATION
	TweenLite.set(["#hero-logo", "#hero-header", "#hero-subheader", $("#hero-buttons").children()], {perspective: 400, transformOrigin:"center center"});

	tlHeroHeader.staggerFrom($("#hero-logo"), 2, {opacity: 0,  ease: Expo.easeOut})
				.staggerFrom(heroHeaderSplitText, 2, {opacity: 0, y: 0,  ease: Back.easeInOut}, 0.02, "-=1.5")
				.staggerFrom(heroSubheaderSplitText, 1, {opacity: 0, y: 0, ease: Back.easeInOut}, 0.01, "-=1.75")
				.staggerFrom($("#hero-buttons").children(), 1, {opacity: 0, y: 20,  ease: Back.easeOut}, 0.12, "-=1.25")
				.staggerFrom($(".sidebar-social-icons li"), 1, {opacity: 0, x: 20,  ease: Back.easeOut}, 0.12, "-=1.25")
				.from($("#hero-elements"), 0.5, {opacity: 0, y: 100,  ease: Expo.easeOut}, "-=1")
				.from(".scroll-hint", 0.5, {opacity: 0,  y: 100, ease: Expo.easeOut}, "-=1.25");

	// BUTTON EVENTS
	$("#button-white-paper").on("touchstart mouseenter", function() {
		
		//granimInstance.changeState("gradient-charcoal");
		//$("#hero-header").css({"color": "#fa0096"});
		
		
	}).on("touchend touchmove mouseleave mouseup", function() {
		
		//granimInstance.changeState("default-state");
		//$("#hero-header").css({"color": ""});
		
	});	
	
	$("#button-learn-more").on("touchstart mouseenter", function() {
		
		//granimInstance.changeState("gradient-charcoal");
		//$("#hero-header").css({"color": "#3200fa"});
		
	}).on("touchend touchmove mouseleave mouseup", function() {
		
		//granimInstance.changeState("default-state");
		//$("#hero-header").css({"color": ""});
		
	});	

    /* -------------------------------------------------- */
    /* SLIDER
    /* -------------------------------------------------- */

	var sliderDefaultAdapt = $(".slider-default.adapt").flickity({});
	
	// SET-UP
    $(".slider-default.adapt").each(function() {
        
        // Move '.flickity-page-dots' above slider.
		$(this).find("ol.flickity-page-dots").prependTo( $(this).find(".flickity-viewport") );
        
		// Bug fix: Flickity does not set correct 'height' for content other than images.
		$(this).find(".flickity-viewport").css("height", ''+$(this).find(".flickity-viewport .slider-item.is-selected .cell").height()+'' + "px" );
        
    });
    
	// Disable 'href' links when clicking.
	$(".slider-item a").on("click touchdown", function(e) {
        
		e.preventDefault();
		return false;
        
	});

	// SLIDER ADAPT
	sliderDefaultAdapt.on("select.flickity", function() {

		//var sliderItemIndex = $(this).data("flickity");
		//console.log(sliderItemIndex.selectedIndex);

        $(this).each(function() {
			
			// Bug fix: Flickity does not set correct 'height' for content other than images.
           $(this).find(".flickity-viewport").css("height", ''+$(this).find(".flickity-viewport .slider-item.is-selected .cell").height()+'' + "px" );
		            
        });
		
		

	});
	
	// VIDEO
	var sliderVideo = $(".slider-video").flickity({});
	
	sliderVideo.on("settle.flickity", function() {

        $(".slider-video .yt-player").each(function() {

            $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		            
        });

	});

    
		/* -------------------------------------------------- */
		/* INDUSTRIES
		/* -------------------------------------------------- */

		// NAV
		//var sliderNavIndustries = $("#slider-nav-industries").flickity({});
		//sliderNavIndustries.on("select.flickity", function() {});

		// SLIDER
		/*
		var sliderIndustries = $("#slider-industries").flickity({});

		sliderIndustries.on("select.flickity", function() {


		});
		*/
	
		/* -------------------------------------------------- */
		/* STORIES
		/* -------------------------------------------------- */

		// NAV
		//var sliderNavStories = $("#slider-nav-stories").flickity({});
		//sliderNavStories.on("select.flickity", function() {});

		// SLIDER
		/*
		var sliderStories = $("#slider-stories").flickity({});

		sliderStories.on("select.flickity", function() {


		});
		*/

		/* -------------------------------------------------- */
		/* TESTIMONIALS
		/* -------------------------------------------------- */ 
    
		// SLIDER
		//var sliderTestimonials = $("#slider-testimonials").flickity({});
		/*
		sliderTestimonials.on("select.flickity", function() {

            
		});
		*/

    
    
    
    
	
}
