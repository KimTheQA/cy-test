class BasePage {
	pause = (ms) => {
		cy.wait(ms);
	};

	static loginInfo(message) {
		cy.log(message);
	}
}

export default BasePage();
