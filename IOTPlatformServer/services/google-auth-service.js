'use strict';
const { auth } = require('google-auth-library');
const { clientSecret } = require('../configs/google/client-secrets');
const { credentials } = require('../configs/google/credentials');

module.exports = {
	getGoogleAuthClient: () => {
		const oauth2Client = new OAuth2Client(
			process.env.CLIENTID,
			process.env.CLIENT_SECRET,
			process.env.REDIRECT_URIS
		);

		oauth2Client.setCredentials({
			access_token: process.env.ACCESS_TOKEN,
			refresh_token: credentials.REFRESH_TOKEN,
			expiry_date: credentials.EXPIRY_DATE
		});

		return oauth2Client;
	}
};
