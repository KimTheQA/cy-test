export default class Navbar {
	clickOnLogo = () => {
		cy.get(".brand").click();
	};

	search = (text) => {
		cy.get("#searchTerm").type(`${text} {enter}`);
	};

	static clickSignIn = () => {
		cy.get("#signin_button").click();
	};
}
