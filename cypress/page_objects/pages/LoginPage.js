import BasePage from "./BasePage";

class LoginPage extends BasePage {
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

module.exports = new LoginPage();
