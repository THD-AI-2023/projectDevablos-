const express = require('express');
const mathUtils = require('./lib/mathUtils');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/gcd', express.json(), (req, res) => {
    if (!req.body || !req.body.a || !req.body.b) {
        res.status(400).send('Bad request');
        return;
    }
    try {
        const { a, b } = req.body;
        console.log(`Calculating GCD for ${a} and ${b}`);
        const gcd = mathUtils.calculateGCD(a, b);
        res.send({ gcd });
    } catch (error) {
        console.error('Failed to create document:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
