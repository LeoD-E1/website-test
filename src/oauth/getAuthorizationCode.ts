import config from "../config/config";

const params = {
	authorize_endpoint: config.oauth.authorize,
	client_id: "4iWebsite",
	redirect_uri: config.oauth.redirect,
	response_type: "code",
	scope: "equipment",
	state: "12345",
};

const getLogin = async () => {
	try {
		const response = await fetch(
			`${params.authorize_endpoint}?client_id=${params.client_id}&scope=${params.scope}l&redirect_uri=${params.redirect_uri}&state=${params.state}&response_type=${params.response_type}`,
			{
				mode: "cors", // this mode is for hit an endpoint remotely ej. of localhost to 192.168.8.157
				method: "GET",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		);
		window.location.href = response.url;
	} catch (error) {
		console.log(error);
	}
};

export default getLogin;
