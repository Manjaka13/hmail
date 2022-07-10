const { success, failure } = require("../services/response.js");
const Email = require("../services/email");
const validation = require("../services/validation");

/*
    Controller for email
*/

const emailController = {
	// Sends email
	send: (req, res) => {
		const { from, to, subject, html, text } = req.body;
		try {
			if (!validation.name(from)) throw "Please use a valid sender name";
			else if (!validation.email(to)) throw "Invalid recipient email";
			else if (!subject || subject.length < 3) throw "Invalid email subject";
			else if (!html || html.length < 3 || !text || text.length < 3)
				throw "Invalid email message";

			Email.send(from, to, subject, html, text)
				.then(() => res.json(success("Email successfully sent")))
				.catch((err) => res.json(failure("Failed to send the email")));
		} catch (err) {
			res.json(failure(err));
		}
	},

	// Describe doc
	documentation: (req, res) => {
		res.json(
			success("HMail API documentation", {
				route: "/send",
				type: "POST",
				parameters: {
					from: "Sender name",
					to: "Recipient email",
					subject: "Email subject",
					html: "Message HTML",
					text: "Message text",
				},
			})
		);
	},
};

module.exports = emailController;
