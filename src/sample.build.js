({
	// base url, relative to appDir
	baseUrl: './',

	// output directory, relative to this file
	dir: '../build',

	// closure, closure.keepLines, none
	optimize: 'uglify',

	pragmas: {
		asynchLoader: true
	},

	locale: 'en-us',
	
	packages: [
		{
			name: 'dojo',
			location: 'dojo',
			main:'lib/main-browser',
			lib: '.'
		},
		{
			name: 'dijit',
			location: 'dijit',
			main:'lib/main',
			lib: '.'
		}
	],

	modules: [
		{
			// build everything into a single script
			name: 'requirejs/require',
			includeRequire: true,
			include: [
				'app/App',
				'app/config'
			]
		}
	]
})

