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
}

module.exports = new AccountLinks();
