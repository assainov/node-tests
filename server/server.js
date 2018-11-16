const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200). send([
        {
            name: 'Ilyas Assainov',
            age: 25
        },
        {
            name: 'Azaliya Assainova',
            age: 24
        },
        {
            name: 'Talgat Assainov',
            age: 1
        },
        {
            name: 'Erkinzhas Assainov',
            age: 26
        }
    ]);
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});

module.exports.app = app;