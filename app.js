const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('hello from test');
});

app.listen(port, () => {
  debug(`Listening at port ${chalk.green(port)}`);
});
