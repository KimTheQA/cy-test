import Navbar from "../page_objects/components/Navbar";
describe("Login", () => {
	beforeEach(() => {
		cy.visit("http://zero.webappsecurity.com/index.html");
		Navbar.clickSignIn();
	});
});
