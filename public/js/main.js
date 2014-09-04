require({
	baseUrl : "js",
	paths: {
			"jquery": "lib/jquery/jquery-git2",
			"angular": "lib/angularjs/angular.1.3.x.min",
			"angular-route": "lib/angularjs/angular-route.min",
			"angularAMD": "lib/angularjs/angularAMD"
	},

	shim: {
		'angularAMD': ['angular'],
		'angular-route': ['angular']
	},

	deps: ['app']
});