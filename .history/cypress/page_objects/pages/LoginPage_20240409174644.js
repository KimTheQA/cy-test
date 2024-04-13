import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
	login = (username, password) => {
		cy.login(username, password);
	};

	clickForgotPassword = () => {
		cy.contains("Forgot your password ?").click();
	};

	displayErrorMessage = (username, password) => {
		cy.isVisible(".alert-error");
	};
}
