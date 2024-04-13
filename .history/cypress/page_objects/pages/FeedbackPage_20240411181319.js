class FeedbackPage {
	submitFeedback = () => {
		cy.fixture("feedback").then((data) => {
			const name = data.name;
			const email = data.email;
			const subject = data.subject;
			const message = data.message;
		});
	};
}

module.exports = new FeedbackPage();
