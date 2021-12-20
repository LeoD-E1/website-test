import React, { useEffect, useState } from "react";
import { getUrlParams } from "../helpers/getUrlParams";
import { useNavigate } from "react-router-dom";

const Callback: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let params = getUrlParams(window.location.search);
  let token = localStorage.getItem("token");

  const verifyToken = async () => {
    if (token) {
      setIsLoading(false);
    }else{
      const getToken = await getAccessToken();
      if(getToken){
        localStorage.setItem("token", getToken);
        setIsLoading(false);
      }
    }
  }

  !isLoading && navigate("/equipment")

	const getAccessToken = async () => {
		try {
			const response = await fetch("https://192.168.4.162:5000/api/auth/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					code: params.code,				
					state: params.state,
				}),
			})
      // retorna el token
      const token = await response.json();
      return token;
      // guardar token en localStorage
      // 
      // !isLoading && navigate("/equipment");
		} catch (error) {
      console.log(error);
		}
	};

  useEffect(() => {
    verifyToken();
  });

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
