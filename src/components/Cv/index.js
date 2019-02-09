import React from 'react';
import './style.scss';
import { isMobile } from '../../common/Helper';

import ProfilePhoto from '../ProfilePhoto';
import Me from '../Me';
import Contact from '../Contact';
import Social from '../Social';
import Skills from '../Skills';
import Experience from '../Experience';
import Education from '../Education';
import MyApps from '../MyApps';

class Cv extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    const isMobileDevice = isMobile();
    const contactAndSocial = <React.Fragment><Contact/><Social/></React.Fragment>;

    return (
      <div id="cv-container">
        <aside>
          <ProfilePhoto/>
          <Me/>
          {isMobileDevice ? '' : contactAndSocial}
        </aside>
        <main>
          <Skills/>
          <Experience/>
          <Education/>
          <MyApps/>
          {isMobileDevice ? contactAndSocial : ''}
        </main>
      </div>
    );
  }
}

export default Cv;
