const express = require('express');
const mathUtils = require('./lib/mathUtils');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/sum', (req, res) => {
   const sum = mathUtils.sumNums(req.body.a, req.body.b);
   res.send({sum});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
