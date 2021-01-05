import React from 'react';
import styles from '../common/styles/styles';

export default function AboutPage() {
  const commonStyles = styles();
  return (
    <div className={commonStyles.aboutPage}>
      <h1>AboutPage</h1>
    </div>
  );
}