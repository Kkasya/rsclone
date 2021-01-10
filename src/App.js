import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './common/Navigation/Routing/Routing';
import Switcher from './common/Navigation/Switcher/Switcher';
import stylesCommon from './common/styles/stylesCommon';

export default function App() {
  const commonStyles = stylesCommon();
  return (
    <Router>
      <div className={commonStyles.root}>
        <Routing isMain={false} />
        <Switcher />
      </div>
    </Router>
  );
}
