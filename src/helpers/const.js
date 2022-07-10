/*
    Export constants from here
*/

const port = process.env.PORT || 3001;
const mailjetApiKey = process.env.MAILJET_APIKEY || "";
const mailjetApiSecret = process.env.MAILJET_APISECRET || "";

module.exports = {
	port,
	mailjetApiKey,
	mailjetApiSecret,
};
