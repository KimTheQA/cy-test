class Navbar {
	clickOnLogo = () => {
		cy.get(".brand").click();
	};

	search = (text) => {
		cy.get("#searchTerm").type(`${text} {enter}`);
	};

	displaySignInButton = () => {
		cy.isVisible("#signin_button");
	};

	clickSignIn = () => {
		cy.get("#signin_button").click();
	};

	clickSettings = () => {
		cy.contains("Settings").click();
	};

	logout = () => {
		cy.contains("username").click();
		cy.get("#logout_link").click();
	};
}

module.exports = new Navbar();
