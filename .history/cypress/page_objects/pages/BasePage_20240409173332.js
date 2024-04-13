export default class BasePage {
	pause = (ms) => {
		cy.wait(ms);
	};

	loginInfo = (message) => {
		cy.log(message);
	};

	setMobileViewport = () => {
		cy.viewport("i-phonex");
	};

	setTabletViewport = () => {
		cy.viewport("ipad-2");
	};
}

// export default BasePage();
