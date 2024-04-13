const cypress = require("cypress");
const { beforeEach } = require("mocha");

describe("Login", () => {
	beforeEach(() => {
		cy.visit("http://zero.webappsecurity.com/index.html");
	});
});
