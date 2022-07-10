const Mailjet = require("node-mailjet");
const { mailjetApiKey, mailjetApiSecret } = require("../helpers/const");

/*
    Email service
*/

const mailjet = new Mailjet({
	apiKey: mailjetApiKey,
	apiSecret: mailjetApiSecret,
});

module.exports = {
	send: (from, to, subject, html, text) =>
		mailjet
			.post("send", { version: "v3.1" })
			.request({
				Messages: [
					{
						From: {
							Email: "manjaka.rajaonson@gmail.com",
							Name: from,
						},
						To: [
							{
								Email: to,
								Name: "Recipient",
							},
						],
						Subject: subject,
						TextPart: text,
						HTMLPart: html,
						CustomID: "AppGettingStartedTest",
					},
				],
			})
			.then(({ body }) => body),
};
