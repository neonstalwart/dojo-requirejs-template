({
	// base url, relative to appDir
	baseUrl: './',

	// output directory, relative to this file
	dir: '../build',

	// closure, closure.keepLines, none
	optimize: 'closure',

	closure: {
		// WHITESPACE_ONLY, SIMPLE_OPTIMIZATIONS, ADVANCED_OPTIMIZATIONS
		CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
		// see http://closure-compiler.googlecode.com/svn/trunk/javadoc/com/google/javascript/jscomp/CompilerOptions.html
		CompilerOptions: {
			prettyPrint: false,
			aliasKeywords: false
		},
		// SEVERE, WARNING, INFO, CONFIG, FINE, FINER, FINEST, OFF, ALL
		loggingLevel: 'WARNING'
	},

	// need to have requirejs GREATER THAN (not equal) to 0.15.0 for this to do what it needs to do.
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
		}
	],

	modules: [
		{
			name: 'app/App',
			include: [
				'app/config'
			]
		}
	]
})

