import React from 'react';
import { Button } from '@material-ui/core';
import stylesLogin from '../LoginStyles';
import GoogleLogin from './GoogleLogin';

function closeModal() {
  document.getElementById('login-modal_container').classList.add('hidden');
}

export default function AuthModal(props) {
  const modalText = props.modalText;
  const isLoginButton = props.isLoginButton;
  const loginStyles = stylesLogin();

  return (
    <div className={loginStyles.modal_container} id='login-modal_container'>
      <div className={loginStyles.overlay} />
      <div className={loginStyles.modal_window} id='login-modal_window'>
        <Button className={loginStyles.cross_button} onClick={closeModal}>
          <img src='./assets/icons/crossIcon.png' alt='cross button' />
        </Button>
        <p id='login-modal-text'>{modalText}</p>
        {isLoginButton ? <GoogleLogin /> : <div />}
      </div>
    </div>
  );
}