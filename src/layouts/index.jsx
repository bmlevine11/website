import React from 'react';

import styles from './index.module.css';

const Template = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header} >
        LEVINE
      </h1>
      <p
        className={styles.subtext}
      >
        coming soon...
      </p>
      {/* {children()} */}
    </div>
  );
}

export default Template
