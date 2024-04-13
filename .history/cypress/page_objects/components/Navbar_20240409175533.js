class Navbar {
	clickOnLogo = () => {
		cy.get(".brand").click();
	};

	search = (text) => {
		cy.get("#searchTerm").type(`${text} {enter}`);
	};

	clickSignIn = () => {
		cy.get("#signin_button").click();
	};
}

module.exports = new Navbar();
