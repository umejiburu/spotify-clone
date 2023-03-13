import React from 'react'
import {useState, useEffect} from 'react'
import Dashboard from './Dashboard';

function Login() {
  const CLIENT_ID = 'd3ea18099f8b4de291b8d4455eb7f446'
  const REDIRECT_URI = 'http://localhost:5173/callback';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize/';
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);

      console.log(token);
    }

    setToken(token);
  }, [token]);

  return (
    <>
    {!token ?
    <div>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a>
    
    </div>
    :
    <Dashboard />
    }
    </>
  )
}

export default Login