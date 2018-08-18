import React from 'react';
import get from 'lodash/get'
import Helmet from 'react-helmet'

import styles from './index.module.css';

// Import typefaces
import 'typeface-oswald';
import 'typeface-raleway';

const Template = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <section>
      <Helmet title={siteTitle} />
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
    </section>
  );
}

export default Template;

export const pageQuery = graphql `
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

