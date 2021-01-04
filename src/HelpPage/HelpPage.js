import React from 'react';
import styles from '../common/styles/styles';

export default function HelpPage() {
  const commonStyles = styles();
  return (
    <div className={commonStyles.helpPage}>
      <h1>HelpPage</h1>
    </div>
  );
}
