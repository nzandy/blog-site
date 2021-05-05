var express = require('express');

var app = express();
const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('hello from test');
});

app.listen(port, () => {
    debug(`Listening at port ${chalk.green(port)}`);
});