const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "http://zero.webappsecurity.com",
	},
	watchForFileChanges: false,
	chromeWebSecurity: false,
	viewportWidth: 1000,
	viewportHeight: 600,
	waitForAnimation: true,
	animationDistanceThreshold: 20,
	defaultCommandTimeout: 6000,
	execTimeout: 60000,
	pageLoadTimeout: 60000,
	requestTimeout: 15000,
	responseTimeout: 15000,
	// video: false,
	failOnStatusCode: false,
});
