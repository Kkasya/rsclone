import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteCustom from './Navigation/RouteCustom/RouteCustom';
import SwitchCustom from './Navigation/SwitchCustom/SwitchCustom';
import stylesCommon from './common/styles/stylesCommon';

export default function App() {
  const commonStyles = stylesCommon();
  return (

    <Router>
      <div className={commonStyles.root}>
        <RouteCustom isMain={false} />
        <SwitchCustom />
      </div>
    </Router>
  );
}