import React from 'react';
import './style.scss';
import AnimatedBox from '../../common/AnimatedBox';

class Me extends React.Component {
  render() {
    return (
      <AnimatedBox id="me" title="Me">
        <span id="first-name">or</span>
        <span id="last-name">ben dahan</span>
        <span id="position">Full-stack developer</span>
      </AnimatedBox>
    );
  }
}

export default Me;
