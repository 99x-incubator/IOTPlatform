'use strict';
const { OAuth2Client } = require('google-auth-library');

module.exports = {
	getGoogleAuthClient: () => {
		const oauth2Client = new OAuth2Client(
			process.env.CLIENTID,
			process.env.CLIENT_SECRET,
			process.env.REDIRECT_URIS
		);

		oauth2Client.setCredentials({
			access_token: process.env.ACCESS_TOKEN,
			refresh_token: process.env.REFRESH_TOKEN,
			expiry_date: process.env.EXPIRY_DATE
		});

		return oauth2Client;
	}
};
