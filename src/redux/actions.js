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
