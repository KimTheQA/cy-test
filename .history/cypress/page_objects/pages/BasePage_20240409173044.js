class BasePage {
	pause = (ms) => {
		cy.wait(ms);
	};
}

module.exports = BasePage();
