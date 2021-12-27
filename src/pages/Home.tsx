import React from "react";

if (process.env.NODE_ENV === "production") {
  require("dotenv").config();
  console.log("Environ", process.env.NODE_ENV);
}

const Home: React.FC = () => {

	
	const params = {
		full_path: "https://192.168.4.162:5000/api/auth/authorize" || process.env.REACT_APP_OAUTH_SERVER_AUTHORIZE,
		client_id: "4iWebsite",
		redirect_uri: "http://192.168.4.162:3000/callback" || process.env.REACT_APP_REDIRECT_URI,
		response_type: "code",
		scope: "equipment",
		state: "12345",
	};

	const getLogin = async () => {
		try {
			const response = await fetch(
				`${params.full_path}?client_id=${params.client_id}&scope=${params.scope}l&redirect_uri=${params.redirect_uri}&state=${params.state}&response_type=${params.response_type}`,
				{
					//mode: "cors", // this mode is for hit an endpoint remotely ej. of localhost to 192.168.8.157
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

	return (
		<div className='App'>
			<h1>Hello world</h1>
			<button onClick={getLogin}>4i connect</button>
			<br />
			<button>Log out</button>
		</div>
	);
};

export default Home;
