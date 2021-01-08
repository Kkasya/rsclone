export function toggleSetting(setting) {
  return {
    type: 'TOGGLE_SETTINGS',
    payload: setting,
  };
}

export function toggleLang(lang) {
  return {
    type: 'TOGGLE_LANG',
    payload: lang,
  };
}
