
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import stylesLogin from './LoginModalStyles';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '824384593344-7noatcalu0r0mbi96u4vq0pbv5jdibcg.apps.googleusercontent.com';

function closeModal(e) {
  document.getElementById('login-modal_container').classList.toggle('hidden');
}

export default function LoginContent() {
  const loginStyles = stylesLogin();

  const [isLogined, setIsLogined] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  let login = (response) => {
    if (response.accessToken) {
      setIsLogined(true);
      // setAccessToken(response.accessToken);
    }

    // close modal window
    document.getElementById('login-modal_container').classList.toggle('hidden');

    // add check for existing user
  }

  let logout = (response) => {
    setIsLogined(false);
    setAccessToken('');
    document.getElementById('login-modal-text').innerText = 'Login in the game:';
  }

  let handleLoginFailure = (response) => {
    document.getElementById('login-modal_window').innerHTML = <p>Failed to log in!</p>
  }

  let handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

  return (
    <div className={loginStyles.modal_container} id='login-modal_container'>
      <div className={loginStyles.modal_window} id='login-modal_window'>
        <Button className={loginStyles.cross_button} onClick={closeModal}>
          <img src='./assets/icons/crossIcon.png' alt='cross button' />
        </Button>
        <p id='login-modal-text'>Login in the game:</p>
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