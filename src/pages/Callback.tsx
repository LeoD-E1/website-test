import React, { useEffect, useState } from "react";
import { getUrlParams } from "../helpers/getUrlParams";
import { useNavigate } from "react-router-dom";

const Callback: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
 
  let params = {
    code: "",
    state: "",
    scope: "",
    client_id: "",
  }

  let token = localStorage.getItem("token");
  
  !isLoading && navigate("/equipment");

  const verifyToken = () => {
    if (token) {
      setIsLoading(false);
    }else{
      getAccessToken();
    }
  }

	const getAccessToken = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					code: params.code,
					client_id: params.client_id,
					scope: params.scope,
					state: params.state,
				}),
			})
      // retorna el token
      const token = await response.json();
      // guardar token en localStorage
      localStorage.setItem("token", token);
		} catch (error) {
      console.log(error);
		}
	};


  useEffect(() => {
    params = getUrlParams(window.location.search);
    console.log(" params necesarios para obtener el token: ", params)
    verifyToken();
  }, []);

	return (
		<div>
      {
        isLoading && (
          <h1>is Loading ...</h1>
        ) 
      }
		</div>
	);
};

export default Callback;
