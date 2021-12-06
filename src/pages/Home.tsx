import React from "react";

const Home: React.FC = () => {
	const getLogin = async () => {
		try {
			const res = await fetch("http://localhost:5000/api/auth/authorize", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					// redirectUri: "http://localhost:4000/callback",
					scope: "openid profile email",
					responseType: "code",
					client_id: "4iWebsite",
					localState: "12345",
				}),
			});
			window.location.href = res.url;
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
