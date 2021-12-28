const env = process.env.NODE_ENV;
if (env === "production") {
	require("dotenv").config();
}
const config = {
	env: env,
	oauth: {
		authorize:
			process.env.REACT_APP_OAUTH_SERVER_AUTHORIZE ||
			"https://192.168.4.162:5000/api/auth/authorize",
		token:
			process.env.REACT_APP_OAUTH_SERVER_TOKEN ||
			"https://192.168.4.162:5000/api/auth/token",
		redirect:
			process.env.REACT_APP_REDIRECT_URI ||
			"http://192.168.4.162:3000/callback",
	},
	api: {
		equipment:
			process.env.REACT_APP_GET_EQUIPMENT ||
			"http://192.168.4.162:6000/equipment",
	},
};

export default config;
