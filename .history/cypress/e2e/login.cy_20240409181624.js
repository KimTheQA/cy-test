import Navbar from "../page_objects/components/Navbar";
import Login from "../page_objects/pages/LoginPage";

describe("Login", () => {
	beforeEach(() => {
		cy.visit("/index.html");
		Navbar.clickSignIn();
	});

	it("Login page with valid credentials", () => {
		Login.login("username", "password");
	});

	it("Should display the error message", () => {
		Login.login("invalid_username", "invalid_password");
		Login.displayErrorMessage();
	});
});
