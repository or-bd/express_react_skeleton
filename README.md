[![Express](https://img.shields.io/badge/express-v4.16.0-blue.svg)](https://www.npmjs.com/package/express/v/4.16.0)
[![React](https://img.shields.io/badge/react-v16.8.2-blue.svg)](https://www.npmjs.com/package/react/v/16.8.2)
[![Babel](https://img.shields.io/badge/babel-v7.2.2-blue.svg)](https://www.npmjs.com/package/@babel/core/v/7.2.2)
[![Eslint](https://img.shields.io/badge/eslint-v5.11.1-blue.svg)](https://www.npmjs.com/package/eslint/v/5.11.1)
[![Webpack](https://img.shields.io/badge/webpack-v4.28.4-blue.svg)](https://www.npmjs.com/package/webpack/v/4.28.4)

# React & Express skeleton

Skeleton project for those who want to use React at the client and Express as a server in the same project.

### Installation:

```
& git clone https://github.com/or-bd/express_react_skeleton.git
```

__Development__ - Install all of the NPM dependencies:

```
& cd express_react_skeleton && npm i
```

__Production__ - You don't need to install all the client dependencies in production so just add the `--production` flag: 

```
& cd express_react_skeleton && npm i --production
```

*__IMPORTANT__: Don't forget to run `npm run build:prod` in your local machine 
__AFTER__ you finished your develop, it build the `public` folder and 
Express will look for it in production.*

### How it works

The `src` directory should contain all of your client files 
(JSX, styles etc..) while all the other are server (Express) 
related. In the `package.json` file you'll find three main scripts:
* `npm start` - will start the Express on http://localhost:3001.
* `npm run dev` - will start `webpack-dev-server` on http://localhost:3000 and will listen to your `src` changes (hot-reload).
* `npm run build:prod` - will create the `public` directory with compiled `bundle.js` (and other client resources) in it.

By default, Express will looks for static files in the `public` directory and
if it does'nt exists you'll get an error while you try to visit http://localhost:3001,
which is OK if you are developing your app, BUT - when you finished 
you must execute the `npm run build:prod` command to create this folder, 
Express will serve your compiled files from there.

Another main thing is that Express will listening to route `/api` and will send 
all the other requests to your client side, it means that you should handle 
your pages routes in React (consider [React-router](https://github.com/ReactTraining/react-router) as a main router).
and if you need to send requests to your server just start with `/api`, for example:
 
`
GET /api/users/:id
`

*NOTE: ports configuration stored in `config.json` file.*
