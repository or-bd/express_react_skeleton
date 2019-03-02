const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { SERVER_PORT } = require('./config.json');

const app = express();
const port = process.env.PORT || SERVER_PORT;
const indexRouter = require('./routes/index');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
