var users = [
	"PimpCSGO",
	"TeamVGJ",
	"Sylphin",
	"moonduckTV",
	"SethLynch",
	"sodapoppin",
	"GooseTroop",
	"jessirocks",
	"Darkoje",
	"RampageZone",
	"onurke",
	"mehmets06",
	"ESL_SC2",
	"OgamingSC2",
	"cretetion",
	"freecodecamp",
	"storbeck",
	"habathcx",
	"RobotCaleb",
	"noobs2ninjas"
];

users.map( function ( user ) {
	var url = "https://api.twitch.tv/kraken/streams/" + user;
	var url2 = "https://api.twitch.tv/kraken/channels/" + user;

	var status = "";
	var offlineuser = "offline";
	var onlineuser = "online";

	var html = "";
	$.ajax( {
		type: "GET",
		url: url,
		headers: {
			"Client-ID": "h3ctcfbglbiqq9rgyopzbwhkbc5kq6"
		},
		success: function ( checkStatus ) {
			if ( checkStatus.stream === null ) {
				status = offlineuser;
			} else {
				status = onlineuser; //console.log(status)
			}
			$.ajax( {
				type: "GET",
				url: url2,
				headers: {
					"Client-ID": "h3ctcfbglbiqq9rgyopzbwhkbc5kq6"
				},
				success: function ( data ) {
					// console.log(data.url)

					html = '<div class="' + status + '">' + '<div class="column row ' + status + ' "  ><img src="' + data.logo + '" id="logo" alt="sanane">' + '<div class="column dik">' + '<h3 style="text-align:center" id="name">' + data.display_name + "</h3>" + '<h3 style="text-align:center" id="game">' + data.game + "</h3>" + '<h3 style="text-align:center" id="status">' + data.status + "</h3>" + '<h3 style="text-align:center" id="viewers">' + "</h3>" + '<a style="text-align:center" target="_blank" href="' + data.url + '"><h3>' + status + "</h3><h3>Visit Streamer!</h3></a>";
					( "</div></div></div>" );

					$( "#start" ).append( html );
				}
			} );
		}
	} );
} );

$( document ).ready( function () {
	$( "#buttononline" ).on( "click", function () {
		$( ".offline" ).hide();
		$( ".online" ).show();
	} );
	$( "#buttonoffline" ).on( "click", function () {
		$( ".online" ).hide();
		$( ".offline" ).show();
	} );
	$( "#buttonall" ).on( "click", function () {
		$( ".offline" ).show();
		$( ".online" ).show();
	} );
} );
