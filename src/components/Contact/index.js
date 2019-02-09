import React from 'react';
import './style.scss';
import AnimatedBox from '../../common/AnimatedBox';

class Contact extends React.Component {
  render() {
    return (
      <AnimatedBox id="contact" title="Contact">
        <span className="text-machine"><i className="fas fa-phone-square"/>054-6665158</span>
        <span className="text-machine"><i className="fas fa-at"/>orxyss@gmail.com</span>
      </AnimatedBox>
    );
  }
}

export default Contact;
