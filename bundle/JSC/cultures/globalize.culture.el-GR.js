/*
 * Globalize Culture el-GR
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator * Portions (c) Corporate Web Solutions Ltd.
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "el-GR", "default", {
	name: "el-GR",
	englishName: "Greek (Greece)",
	nativeName: "Ελληνικά (Ελλάδα)",
	language: "el",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "μη αριθμός",
		negativeInfinity: "-Άπειρο",
		positiveInfinity: "Άπειρο",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],
				namesAbbr: ["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],
				namesShort: ["Κυ","Δε","Τρ","Τε","Πε","Πα","Σά"]
			},
			months: {
				names: ["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος",""],
				namesAbbr: ["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ",""]
			},
			monthsGenitive: {
				names: ["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου",""],
				namesAbbr: ["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ",""]
			},
			AM: ["πμ","πμ","ΠΜ"],
			PM: ["μμ","μμ","ΜΜ"],
			eras: [{"name":"μ.Χ.","start":null,"offset":0}],
			patterns: {
				d: "d/M/yyyy",
				D: "dddd, d MMMM yyyy",
				f: "dddd, d MMMM yyyy h:mm tt",
				F: "dddd, d MMMM yyyy h:mm:ss tt",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));