import FeedbackPage from "../page_objects/pages/FeedbackPage";

describe("Feedback", () => {
	beforeEach(() => {
		cy.visit("http://zero.webappsecurity.com/feedback.html");
	});

	it("Submits the feedback", () => {
		FeedbackPage.submitFeedback();
	});
});
