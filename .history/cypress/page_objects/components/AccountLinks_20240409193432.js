class AccountLinks {
	clickSummary = () => {
		cy.get("#account_summary_tab").click();
	};

	clickActivity = () => {
		cy.get("#account_activity_tab").click();
	};

	clickTransferFunds = () => {
		cy.get("#transfer_funds_tab").click();
	};

	clickPayBills = () => {
		cy.get("#pay_bills_tab").click();
	};

	clickMoneyApp = () => {
		cy.get("#money_map_tab").click();
	};

	clickOnlineStatements = () => {
		cy.get("#online_statements_tab").click();
	};
}

module.exports = new AccountLinks();
