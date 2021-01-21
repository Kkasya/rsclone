
import React, { useState } from 'react';
import stylesCommon from '../../../common/styles/stylesCommon';
import stylesLogin from '../LoginStyles';
import { Button } from '@material-ui/core';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '824384593344-7noatcalu0r0mbi96u4vq0pbv5jdibcg.apps.googleusercontent.com';

export default function LoginContent() {
  const commonStyles = stylesCommon();
  const loginStyles = stylesLogin();
  const loginButton = `${loginStyles.button_login} + ${commonStyles.button}`;

  const handleSubmit = () => {
    // add POST request for login
  }

  const [isLogined, setIsLogined] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userName, setUserName] = useState('');

  let login = (response) => {
    if (response.accessToken) {
      setIsLogined(true);
      setAccessToken(response.accessToken);
      setUserName(response.name);
    }

    // add check for existing user
  }

  let logout = (response) => {
    setIsLogined(false);
    setAccessToken('');
  }

  let handleLoginFailure = (response) => {
    alert('Failed to log in')
  }

  let handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

  return (
    <div className={loginStyles.login_container}>
      <div className={loginStyles.button_form}>
        {isLogined ?
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Sign Out'
            onLogoutSuccess={logout}
            onFailure={handleLogoutFailure}
            className={loginStyles.button_google}
          >
          </GoogleLogout> : <GoogleLogin
            clientId={CLIENT_ID}
            buttonText='Sign In'
            onSuccess={login}
            onFailure={handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            responseType='code,token'
            className={loginStyles.button_google}
          />
        }
      </div>
    </div>
  );
}