const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/sign', (req, res) => {
    const login = 'matheusleal';
    const password = '123';

    if (req.body.login === login && req.body.password === password) {
        const data = {
            nome: 'Matheus Leal',
            email,
            role: ['admin']
        };
        const token = jwt.sign({data}, "SECRET", {
            expiresIn: 100000,
        });
        return res.json({token: token});
    }
    res.status(500).json({message: 'Incorrect username or password'});
});

app.listen(port, () => {
    console.log(`link => http://localhost:${port}`);
})

