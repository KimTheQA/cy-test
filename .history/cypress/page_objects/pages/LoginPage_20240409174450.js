import cypress from "cypress";

export default class LoginPage {
	login = (username, password) => {
		cy.login(username, password);
	};

	clickForgotPassword = () => {
		cy.contains("Forgot your password ?").click();
	};

	displayErrorMessage = (username, password) => {};
}
