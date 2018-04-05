// SCRIPTS
var ytScriptTag = document.createElement("script");
	ytScriptTag.src = "https://www.youtube.com/iframe_api";

var ytAPI = document.getElementsByTagName("script")[0];
	ytAPI.parentNode.insertBefore(ytScriptTag, ytAPI);





// YOUTUBE API READY
//var YouTubeDeferred = $.Deferred();


window.onYouTubeIframeAPIReady = function() {

	console.log("YouTube API ready.");
	
	//YouTubeDeferred.resolve(window.YouTubeFunc);
	YouTubePlayer = new Array();
	
	var iYouTubePlayer = document.querySelectorAll("iframe.yt-player");

	for (var i = 0; i < iYouTubePlayer.length; i++) {

			var iYouTubePlayerID = new YT.Player(iYouTubePlayer[i].id, {

				playerVars: {
					'autoplay': 0,
					'modestbranding': 1,
				},

				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}

			});

			YouTubePlayer.push(iYouTubePlayerID);

	}

	
	// EVENTS
	function onPlayerReady(e) {

		console.log("Player ready.");

		//e.target.playVideo();


	}

	function onPlayerStateChange(e) {

		if (e.data === YT.PlayerState.PLAYING) {

			var iYouTubePlayer = e.target.a.src;
				//YouTubePlayerID = $("iframe.yt-players");

			for (var i = 0; i < YouTubePlayer.length; i++) {

				if (YouTubePlayer[i].a.src != iYouTubePlayer) YouTubePlayer[i].pauseVideo();

			}
		}

	}
	
	
};


	




