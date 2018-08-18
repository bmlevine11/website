import React from 'react'

// Import typefaces
import 'typeface-oswald';
import 'typeface-raleway';

import profilePic from '../../public/static/levine_prof.jpg';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: 15,
        }}
      >
        <img
          src={profilePic}
          alt={`Brian Levine`}
          style={{
            marginRight: 10,
            marginBottom: 0,
            width: 30,
            height: 30,
          }}
        />
        <p>Bio text goes here</p>
      </div>
    )
  }
}

export default Bio
