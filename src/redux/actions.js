export function toggleSetting(setting) {
  return {
    type: 'TOGGLE_SETTINGS',
    target: setting.target.name,
    value: setting.target.checked,
    payload: setting,
  };
}

export function toggleLang(lang) {
  return {
    type: 'TOGGLE_LANG',
    value: lang.target.value || lang.target.parentNode.value,
    payload: lang,
  };
}

export function toggleIsLogged(auth) {
  return {
    type: 'TOGGLE_ISLOGGED',
    loggedIn: auth.loggedIn,
    value: auth.userProfile,
    payload: auth.userProfile,
  };
}
