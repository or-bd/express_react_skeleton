import React from 'react';
import { isMobile } from './Helper';

class AnimatedBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleClass: '',
      visibilityClass: 'focused',
      isMobile: isMobile(),
    };

    this.boxRef = React.createRef();
    this.setVisibility = this.setVisibility.bind(this);
  }

  componentDidMount() {
    setInterval(this.setVisibility, 300);
  }

  setRandomTitleAnimation(isVisible) {
    const titleClass = 'visible';
    const random = this.state.isMobile ? 0 : (Math.random() * 1000);
    if (isVisible && this.state.titleClass !== titleClass) {
      setTimeout(() => this.setState({ titleClass }), random);
    } else if (!isVisible) {
      this.setState({ titleClass: '' });
    }
  }

  setVisibility() {
    let visibilityClass = 'no-focus';
    const windowHeight = window.innerHeight;
    const scrolled = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    const componenetHeight = this.boxRef.current.getBoundingClientRect().height;
    const componentPosition = this.boxRef.current.offsetTop;

    if ((componentPosition + (componenetHeight * 0.3)) < windowHeight + scrolled) {
      if (componenetHeight + componentPosition > scrolled + componenetHeight) {
        this.setRandomTitleAnimation(true);
        visibilityClass = 'focused';
      }
    }

    if (visibilityClass === 'no-focus') {
      this.setRandomTitleAnimation(false);
    }

    this.setState({ visibilityClass });
  }

  render() {
    return (
      <section id={this.props.id} className={this.state.visibilityClass} ref={this.boxRef}>
        <div className="box">
          <h2 className={this.state.titleClass}>{this.props.title}</h2>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default AnimatedBox;
