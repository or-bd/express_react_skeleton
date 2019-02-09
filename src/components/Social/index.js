import React from 'react';
import './style.scss';
import AnimatedBox from '../../common/AnimatedBox';

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      networks: [
        { id: 1, class: 'fab fa-facebook', link: 'https://www.facebook.com/or.bendahan' },
        { id: 2, class: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/or-ben-dahan-81a74ba5' },
        { id: 3, class: 'fab fa-instagram', link: 'https://www.instagram.com/or_ben_dahan' },
      ],
    };
  }

  visitSocialPage(link) {
    setTimeout(() => {
      window.open(link, '_blank');
    }, 400);
  }

  render() {
    return (
      <AnimatedBox id="social" title="Social">
        {this.state.networks.map((social) => {
          return <i key={social.id} className={social.class} onClick={() => this.visitSocialPage(social.link) }/>;
        })}
      </AnimatedBox>
    );
  }
}

export default Social;
