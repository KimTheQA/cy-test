import Navbar from "../page_objects/components/Navbar";

describe("Login", () => {
	beforeEach(() => {
		cy.visit("/");
		Navbar.clickSignIn();
	});

	it("Login page with valid credentials", () => {
		cy.login("username", "password");
	});
});
