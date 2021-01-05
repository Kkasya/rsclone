export default function toggleLang(lang) {
  return {
    type: 'TOGGLE_LANG',
    payload: lang,
  };
}
