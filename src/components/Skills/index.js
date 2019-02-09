import React from 'react';
import Lottie from '../../common/LottieAnimation';
import wave from './wave';
import './style.scss';
import AnimatedBox from '../../common/AnimatedBox';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        { id: 1, label: 'Linux', class: '', level: { current: 0, to: 7 }, logo: 'sprite sprite-linux' },
        { id: 2, label: 'Docker', class: '', level: { current: 0, to: 5 }, logo: 'sprite sprite-docker' },
        { id: 3, label: 'Mongo', class: '', level: { current: 0, to: 6 }, logo: 'sprite sprite-mongodb' },
        { id: 4, label: 'MySql', class: '', level: { current: 0, to: 8 }, logo: 'sprite sprite-mysql' },
        { id: 5, label: 'Node.js', class: '', level: { current: 0, to: 9 }, logo: 'sprite sprite-nodejs' },
        { id: 6, label: 'PHP', class: '', level: { current: 0, to: 7 }, logo: 'sprite sprite-php' },
        { id: 7, label: 'React', class: '', level: { current: 0, to: 8 }, logo: 'sprite sprite-react' },
        { id: 8, label: 'RNative', class: '', level: { current: 0, to: 4 }, logo: 'sprite sprite-react' },
        { id: 9, label: 'jQuery', class: '', level: { current: 0, to: 9 }, logo: 'sprite sprite-jquery' },
        { id: 10, label: 'Webpack', class: '', level: { current: 0, to: 10 }, logo: 'sprite sprite-webpack' },
        { id: 11, label: 'Gulp', class: '', level: { current: 0, to: 6 }, logo: 'sprite sprite-gulp' },
        { id: 12, label: 'Sass', class: '', level: { current: 0, to: 7 }, logo: 'sprite sprite-sass' },
        { id: 13, label: 'Less', class: '', level: { current: 0, to: 6 }, logo: 'sprite sprite-less' },
        { id: 14, label: 'HTML5', class: '', level: { current: 0, to: 10 }, logo: 'sprite sprite-html' },
      ],
    };
  }

  componentDidMount() {
    this.showSkills();
  }

  showSkills() {
    const skills = [...this.state.skills];
    const shuffledSkills = [...this.state.skills].sort(() => Math.random() - 0.5);

    const interval = setInterval(() => {
      if (shuffledSkills.length) {
        const skill = shuffledSkills[0];
        const skillIndex = skills.findIndex(s => s.id === skill.id);
        skills[skillIndex].level.current = skills[skillIndex].level.to;
        skills[skillIndex].class = 'visible';
        this.setState({ skills });
        shuffledSkills.shift();
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  render() {
    return (
      <AnimatedBox id="skills" title="Skills">
        <div id="skills-container">
          {this.state.skills.map((skill) => {
            const className = `skill ${skill.class}`;
            return <div key={skill.id} className={className}>
              <div className="skill-content">
                <i className={skill.logo}/>
                <div className="skill-name">{skill.label}</div>
              </div>
              <div className="level-fill" style={{ height: `calc(${skill.level.current * 10}% - 17px)` }}>
                <Lottie animtion={wave} height={20} width={57}/>
              </div>
            </div>;
          })}
          <div className="clear"/>
        </div>
      </AnimatedBox>
    );
  }
}

export default Skills;
