import React, { useEffect, useState } from "react";
import { getUrlParams } from "../helpers/getUrlParams";
import { useNavigate } from "react-router-dom";
import config from "../config/config";

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
      // state no se pasa, queda aca, por que?, no lo se
			const response = await fetch(`${config.oauth.token}?grant_type=authorization_code&code=${params.code}&redirect_uri=&client_id=4iWebsite&redirect_uri=${config.oauth.redirect}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
          charset: "utf-8",
				},
			})
      // retorna el token
      const token = await response.json();
      return token;
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
