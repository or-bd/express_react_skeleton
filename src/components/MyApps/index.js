import React from 'react';
import './style.scss';
import AnimatedBox from '../../common/AnimatedBox';

const garlicGame = require('../../media/garlic-site.png');
const hezLaor = require('../../media/hez-site.png');
const fastnums = require('../../media/fastnums-app.png');

class MyApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [
        {
          id: 1,
          link: 'https://hez-laor.com',
          class: 'no-opacity',
          description: 'Responsive site, designed and built from scratch.',
          logo: hezLaor,

        },
        {
          id: 2,
          link: 'https://garlic.sudozone.com',
          class: 'no-opacity garlic-logo',
          description: 'Responsive JS game, React & NodeJs.',
          logo: garlicGame,
        },
        {
          id: 3,
          link: 'https://play.google.com/store/apps/details?id=com.orxyss.fastfingers',
          class: 'no-opacity',
          description: 'ReactNative game, available for Android devices only.',
          logo: fastnums,
        },
      ],
      myApp: {},
    };
  }

  componentDidMount() {
    this.showApps();
    this.showMyApp(1);
  }

  showApps() {
    const apps = [...this.state.apps];
    apps.forEach((app, i) => {
      setTimeout(() => {
        app.class = `${app.class.replace('no-opacity', '')} bounceIn`;
        this.setState({ apps });
        if (i === apps.length - 1) {
          this.removeAppsBounceIn();
        }
      }, i * 600);
    });
  }

  removeAppsBounceIn() {
    const apps = [...this.state.apps];
    apps.forEach((app) => {
      app.class = app.class.replace('bounceIn', '').trim();
    });

    setTimeout(() => {
      this.setState({ apps });
    }, 600);
  }

  showMyApp(appId) {
    let myApp = {};
    this.setState({ myApp }, () => {
      setTimeout(() => {
        const apps = [...this.state.apps].map((app) => {
          if (app.id === appId && !app.class.includes('app-selected')) {
            app.class += ' app-selected';
            myApp = app;
          } else if (app.id !== appId) {
            app.class = app.class.replace('app-selected', '').trim();
          }
          return app;
        });

        this.setState({ myApp, apps });
      }, 200);
    });
  }

  render() {
    return (
      <AnimatedBox id="my-apps" title="My Apps">
        <ul id="app-list">
          {this.state.apps.map((app) => {
            const className = `app ${app.class}`;
            return <li
              key={app.id}
              className={className}
              onClick={() => this.showMyApp(app.id)}
            >
              <img src={app.logo}/>
            </li>;
          })}
        </ul>
        <div id="my-app" className={this.state.myApp.link ? 'fade-in' : 'no-opacity'}>
          <div id="description">
            <div>{this.state.myApp.description}</div>
          </div>
          <div id="link">
            <a href={this.state.myApp.link} target="_blank">
              <span>Visit</span>
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </AnimatedBox>
    );
  }
}

export default MyApps;
