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

			"mediaElement": "vendor/media-element/mediaelement-and-player.min"
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
	'mediaElement'
], function (jquery, coverflowjs, mediaElement) {
  $('#coverflow').coverflow();

  $('#audio-player').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause','progress','volume'],
    audioVolume: 'horizontal',
    audioWidth: '100%',
    iPadUseNativeControls: true,
    iPhoneUseNativeControls: true,
    AndroidUseNativeControls: true
  });
})