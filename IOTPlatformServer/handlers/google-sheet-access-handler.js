'use strict';
const AWS = require('aws-sdk');
const googleAuthService = require();

const oauth2Client = googleAuthService.getGoogleAuthClient();
const appScript = google.script({ version: process.env.GOOGLE_SCRIPT_API_VERSION, auth: oauth2Client });

module.exports.getSubscriber = (event, context, callback) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Go Serverless v1.0! Your function executed successfully!',
			input: event
		})
	};

	callback(null, response);
};
