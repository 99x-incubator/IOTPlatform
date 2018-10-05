'use strict';
const { auth } = require('google-auth-library');
const { clientSecret } = require('../configs/google/client-secrets');
const { credentials } = require('../configs/google/credentials');

module.exports = {
	getGoogleAuthClient: () => {
		const oauth2Client = new OAuth2Client(
			clientSecret.installed.client_id,
			clientSecret.installed.client_secret,
			clientSecret.installed.redirect_uris[1]
		);

		oauth2Client.setCredentials({
			access_token: credentials.access_token,
			refresh_token: credentials.refresh_token,
			expiry_date: credentials.expiry_date
		});

		return oauth2Client;
	}
};
