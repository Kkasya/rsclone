import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavCustom from './NavCustom/NavCustom';
import SwitchCustom from './SwitchCustom/SwitchCustom';
import styles from './common/styles/styles';

export default function App() {
  const commonStyles = styles();
  return (
    <Router>
      <div className={commonStyles.root}>
        <NavCustom />
        <SwitchCustom />
      </div>
    </Router>
  );
}
