require({
	baseUrl : "js",
	paths: {
			"jquery": "lib/jquery/jquery-git2",
			"jqueryui": "lib/jquery-ui/jquery-ui.min",
			"angular": "lib/angularjs/angular.1.3.x.min",
			"angular-route": "lib/angularjs/angular-route.min",
			"angularAMD": "lib/angularjs/angularAMD",

			"coverflowjs": "vendor/coverflow/coverflow",
			"renderer3d": "vendor/coverflow/renderer.3d",
			"rendererClassic": "vendor/coverflow/renderer.classic",
			"supportCore": "vendor/coverflow/support.core",
			"supportTransform": "vendor/coverflow/support.transform3d",

			"mediaElement": "vendor/media-element/mediaelement-and-player.min",
			"niceScroll": "vendor/nicescroll/jquery.nicescroll.min",
			"niceScrollplus": "vendor/nicescroll/jquery.nicescroll.plus"
	},

	shim: {
		"angularAMD": ['angular'],
		"angular-route": ['angular'],
		"renderer3d" : [ "jquery", "rendererClassic" ],
		"rendererClassic" : [ "jquery" ],
		"supportCore" : [ "jquery" ],
		"supportTransform" : [ "jquery" ],
		"coverflowjs" : {
			deps : [
				"jquery",
				"jqueryui",
				"renderer3d",
				"rendererClassic",
				"supportCore",
				"supportTransform"
			]
		}
	},

	deps: ['app']
});

require([
	'jquery',
	'coverflowjs',
	'mediaElement',
	'niceScroll',
	'niceScrollplus'
], function (jquery, coverflowjs, mediaElement, niceScroll, niceScrollplus) {

	var $body = $('body'),
			$container = $(".container"),
			$audio_player = $('#audio-player'),
			$icon_queue = $(".icon-openQueue"),
			$queueList_mobile = $('.queueList-mobile'),
			$queueList_mobileList = $('.queueList-mobileList'),
			$queueList_mobile_li = $('.queueList-mobileList ul li');

	$('#coverflow').coverflow();

	$audio_player.mediaelementplayer({
		alwaysShowControls: true,
		features: ['playpause','progress','volume'],
		audioVolume: 'horizontal',
		audioWidth: '100%',
		iPadUseNativeControls: true,
		iPhoneUseNativeControls: true,
		AndroidUseNativeControls: true
	});

	function scrollable() {
		$body.niceScroll({
			zindex: 99999,
			styler: "fb",
			cursorcolor: '#2F7096',
			cursorborder: '#2F7096'
		});
	}

	scrollable();

	$queueList_mobile_li.hide();
	$icon_queue.click(function() {
		$(this).toggleClass("on");
		$container.toggleClass('hide');
		$queueList_mobile.toggleClass('is-active');

		if ( ! $container.hasClass('hide')) {
			$queueList_mobile.animate({'background-color':'rgba(0, 0, 0, 0)'},'fast');
			$queueList_mobile_li.fadeOut();
			$body.delay(300).queue(function(next){
				$(this).removeClass('ofh');
				next();
			})
		} else {
			$queueList_mobile.animate({'background-color':'rgba(0, 0, 0, .7)'},'fast');
			$queueList_mobileList.show();
			$body.addClass('ofh');
			$queueList_mobile_li.fadeIn();
		}
	});

})