import React from 'react';
import { Button } from '@material-ui/core';
import stylesLogin from '../LoginModalStyles';
import stylesCommon from '../../styles/stylesCommon';

export default function GoogleLogin() {
  const loginStyles = stylesLogin();
  let commonStyles = stylesCommon();

  const googleLoginButton = `
  ${commonStyles.button}
  ${loginStyles.login}
`;
  const oauthLoginUrl = '/auth/google';

  let login = () => {
    window.location.replace(oauthLoginUrl);
  }

  return (
    <Button
      className={googleLoginButton}
      onClick={login}
    >
      <img src='./assets/icons/google.png' alt='google logo' />
          Google
    </Button>
  );
}