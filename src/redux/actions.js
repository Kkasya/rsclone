export default function toggleSetting(setting) {
  return {
    type: 'CHANGE_SETTINGS',
    payload: setting,
  };
}
