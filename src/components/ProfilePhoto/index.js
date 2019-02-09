import React from 'react';
import './style.scss';

const profile = require('../../media/profile.png');

class ProfilePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTitleVisible: false,
    };
  }

  render() {
    return (
      <section id="photo">
        <img src={profile} alt="Or Ben Dahan" title="Or Ben Dahan"/>
      </section>
    );
  }
}

export default ProfilePhoto;
