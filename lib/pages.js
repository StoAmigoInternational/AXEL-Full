/* -------------------------------------------------- */
/* SET-UP
/* -------------------------------------------------- */

var runPageDefaults = function() {
	"use strict";

	// > = greatar than
	// < = less than

	/* -------------------------------------------------- */
	/* HOME
	/* -------------------------------------------------- */

	if ($(".page").data("page") === "home") {
		console.log("Home Page");
		
		$(".button-home").addClass("inactive");
	}

	/* -------------------------------------------------- */
	/* WORK
	/* -------------------------------------------------- */

	else if ($(".page").data("page") === "work") {
		console.log("Work Page");
		
		$(".button-work").addClass("inactive");
	}

	/* -------------------------------------------------- */
	/* SERVICES
	/* -------------------------------------------------- */

	else if ($(".page").data("page") === "services") {
		console.log("Services Page");

		$(".button-services").addClass("inactive");
	}

	/* -------------------------------------------------- */
	/* ABOUT
	/* -------------------------------------------------- */

	else if ($(".page").data("page") === "about") {
		console.log("About Page");

		$(".button-about").addClass("inactive");
	}

	/* -------------------------------------------------- */
	/* CONTACT
	/* -------------------------------------------------- */

	else if ($(".page").data("page") === "contact") {
		console.log("Contact Page");
		
		$(".button-contact").addClass("inactive");
	}

	/* -------------------------------------------------- */
	/* TEMPLATE
	/* -------------------------------------------------- */

	else if ($(".page").data("page") === "template") {
		console.log("Template Page");

		$(".button-template").addClass("inactive");
	}

	/* -------------------------------------------------- */
	/* ERROR
	/* -------------------------------------------------- */

	else {
		console.log("Error Page");
	}
	
};
