export default class BasePage {
	pause = (ms) => {
		cy.wait(ms);
	};

	loginInfo = (message) => {
		cy.log(message);
	};
}

// export default BasePage();
