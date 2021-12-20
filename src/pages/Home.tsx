import React from "react";

const Home: React.FC = () => {
	const params = {
		client_id: "4iWebsite",
		redirect_uri: "https://192.168.4.162:3000/callback",
		response_type: "code",
		scope: "equipment",
		state: "12345",
	};

	const getLogin = async () => {
		try {
			const response = await fetch(
				`https://192.168.4.162:5000/api/auth/authorize?client_id=${params.client_id}&scope=${params.scope}l&redirect_uri=${params.redirect_uri}&state=${params.state}&response_type=${params.response_type}`,
				{
					mode: "cors",
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
