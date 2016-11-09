module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/*.js',
				dest: 'build/*.min.js'
			}
		},
		karma: {
			unit: {
				options: {
					files: [
						'src/tests/*.js',
					],
					frameworks: ['jasmine'],
					plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
					browsers: ['PhantomJS'],
					port: 9999,
					singleRun: true,
					logLevel: 'ERROR',
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-karma');

	function start_server() {

		// Force task into async mode and grab a handle to the "done" function.
		var done = this.async();
		// Run some sync stuff.
		grunt.log.writeln('Processing task...');

		try {

			require('./src/server.js')();

		} catch (e) {
			console.error(e);
			done();
		}
	}

	grunt.registerTask('start_server', start_server);
	grunt.registerTask('test', ['karma']);
	grunt.registerTask('start', ['test', 'start_server']);

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'start']);
};