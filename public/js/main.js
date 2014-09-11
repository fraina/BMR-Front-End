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
			$container = $('.container'),
			$audio_player = $('#audio-player'),
			$icon_queue = $(".icon-openQueue"),
			$icon_search = $('.icon-search'),
			$overlay = $('.overlay'),
			$mobileList = $('.mobileList'),
			$queueList_mobile = $('.queueList-mobile'),
			$queueList_mobileList = $('.queueList-mobileList'),
			$queueList_mobile_li = $('.queueList-mobileList ul li'),
			$searchBar_mobileList = $('.searchBar-mobileList'),
			$queuelist_option_i = $('.queuelist-option i'),
			$queuelist_list = $('.queuelist-list');

	// $('#coverflow').coverflow();

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
		$('html').niceScroll({
			zindex: 99999,
			styler: "fb",
			cursorcolor: '#2F7096',
			cursorborder: '#2F7096'
		});
	}
	scrollable();

	$icon_queue.click(function() {
		$(this).toggleClass("on");
		$container.stop(false,true).toggleClass('hide');
		$queueList_mobile.toggleClass('is-active');

		if ( ! $container.hasClass('hide')) {
			$overlay.stop(false,true).fadeOut();
			$icon_search.hide();
			$mobileList.stop(false,true).fadeOut();
			$body.delay(300).queue(function(next){
				$(this).removeClass('ofh');
				next();
			})
		} else {
			$overlay.stop(false,true).fadeIn('fast');
			$icon_search.stop(false,true).fadeIn();
			$mobileList.stop(false,true).fadeIn();
			$body.addClass('ofh');
		}
	});

	$icon_search.click(function(event) {
		var qm = $queueList_mobileList.offset(),
				sm = $searchBar_mobileList.offset();

		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')) {
			$queueList_mobileList.hide();
			$searchBar_mobileList.fadeIn('fast');
		} else {
			$queueList_mobileList.fadeIn('fast');
			$searchBar_mobileList.hide();
		}
	});

	$queuelist_option_i.click(function(){
		if ( ! $(this).hasClass('is-active')) {
			$(this).addClass('is-active').siblings().toggleClass('is-active');
			$queuelist_list.find('ul:visible').hide().siblings().fadeIn('fast');
		}
	})

})