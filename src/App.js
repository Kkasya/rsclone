import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteCustom from './Navigation/RouteCustom/RouteCustom';
import SwitchCustom from './Navigation/SwitchCustom/SwitchCustom';
import styles from './common/styles/styles';

export default function App() {
  const commonStyles = styles();
  return (
    <Router>
      <div className={commonStyles.root}>
        <RouteCustom isMain={false} />
        <SwitchCustom />
      </div>
    </Router>
  );
}
