const express = require('express');
const main = require('./lib/post_request.js');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('text-test', (req, res) => {
    main();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
