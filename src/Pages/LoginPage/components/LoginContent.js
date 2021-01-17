
import React, { useState } from 'react';
import stylesCommon from '../../../common/styles/stylesCommon';
import stylesLogin from '../LoginStyles';
import { Button } from '@material-ui/core';

function loginWithPassword() {
  alert("test");
}

export default function LoginContent() {
  const commonStyles = stylesCommon();
  const loginStyles = stylesLogin();
  const buttonAndBig = `
    ${commonStyles.button}
    ${commonStyles.containerInlineCenter}
  `;

  const [userEmail, setUseEmail] = useState('');

  const handleSubmit = () => {
    alert(userEmail);
  }

  return (
    <div className={loginStyles.login_container}>
      <form className={loginStyles.login_form} onSubmit={handleSubmit}>
        <div className={loginStyles.input_form}>
          <label>Email:</label>
          <input type='email' placeholder='Enter email' />
        </div>
        <div className={loginStyles.input_form}>
          <label>Password:</label>
          <input type='password' placeholder='Enter password' />
        </div>
        <div className={loginStyles.button_form}>
          <Button type='submit' className={buttonAndBig} onClick={loginWithPassword}>Login</Button>
          <Button className={buttonAndBig}>Google</Button>
        </div>
      </form>
    </div>
  );
}