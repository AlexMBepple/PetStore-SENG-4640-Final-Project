var express = require('express');
var app = express();
const path = require('path')

// go into server folder and run node server.js to get app running
    // runs back end

    app.use(express.static(path.join(__dirname, '..','lists','build')));

    app.use('/admin', (req, res) => {
        console.log('admin');
    });

    app.use('/', (req, res) => {
        console.log('home');
        res.sendFile(path.join(__dirname, '..','lists','build', 'index.html'))
    });

    app.listen(3000, () => {
        console.log('Listening on port 3000');
        });
        