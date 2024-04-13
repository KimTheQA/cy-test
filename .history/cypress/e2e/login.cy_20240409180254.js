import Navbar from "../page_objects/components/Navbar";
import Login from "../page_objects/pages/LoginPage";

describe("Login", () => {
	beforeEach(() => {
		cy.visit(Cypress.env("/"));
		Navbar.clickSignIn();
	});

	it("Login page with valid credentials", () => {
		Login.login("username", "password");
	});
});
