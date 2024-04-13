import Navbar from "../page_objects/components/Navbar";
import LoginPage from "../page_objects/pages/LoginPage";

describe("Login", () => {
	beforeEach(() => {
		cy.visit("/index.html");
		Navbar.clickSignIn();
	});

	it("Login page with valid credentials", () => {
		LoginPage.login("username", "password");
	});

	it("Should display the error message", () => {
		LoginPage.login("invalid_username", "invalid_password");
		LoginPage.displayErrorMessage();
	});

	it("Should logout", () => {
		LoginPage.login("username", "password");
		Navbar.logout();
		Navbar.displaySignInButton();
	});
});
