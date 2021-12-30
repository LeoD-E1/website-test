import React from "react";
import getLogin from "../oauth/getAuthorizationCode";
import getAccessToken from "../oauth/getAccessToken";


const Home: React.FC = () => {

	return (
		<div className='App'>
			<h1>Hello world</h1>
			<button onClick={getLogin}>authorization code grant</button><br />
			<button onClick={getAccessToken}>Client Credentials grant</button>
			<br />
			<button>Log out</button>
		</div>
	);
};

export default Home;
