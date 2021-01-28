import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import stylesLogin from './LoginModalStyles';
import stylesCommon from '../styles/stylesCommon';

function closeModal() {
  document.getElementById('login-modal_container').classList.add('hidden');
}

function googleLogin(urlPath) {
  window.location.replace(urlPath);
}

export default function LoginContent() {
  const loginStyles = stylesLogin();
  let commonStyles = stylesCommon();

  const googleLoginButton = `
  ${commonStyles.button}
  ${loginStyles.login}
`;

  const [isLogined, setIsLogined] = useState(false);

  const oauthLoginUrl = '/auth/google';

  let login = () => {
    if (googleLogin(oauthLoginUrl)) {
      setIsLogined(true);
      alert("google success")
    } else {
      handleLoginFailure();
    }
  }

  let handleLoginFailure = () => {
    document.getElementById('login-modal-text').innerText = 'Failed to log in! Please, try again.';
  }

  return (
    <div className={loginStyles.modal_container} id='login-modal_container'>
      <div className={loginStyles.overlay} />
      <div className={loginStyles.modal_window} id='login-modal_window'>
        <Button className={loginStyles.cross_button} onClick={closeModal}>
          <img src='./assets/icons/crossIcon.png' alt='cross button' />
        </Button>
        <p id='login-modal-text'>Sign in using your google account:</p>
        <Button
          className={googleLoginButton}
          onClick={login}
        >
          <img src='./assets/icons/google.png' alt='google logo' />
          Google
          </Button>
        {isLogined ?
          closeModal()
          : handleLoginFailure
        }
      </div>
    </div>
  );
}