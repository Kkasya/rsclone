import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavCustom from './NavCustom/NavCustom';
import SwitchCustom from './SwitchCustom/SwitchCustom';

export default function App() {
  return (
    <Router>
      <NavCustom />
      <SwitchCustom />
    </Router>
  );
}
