const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
const app = express();

//MIDDLEWARE
require('dotenv').config();
app.use(cors());

app.use('/', (req, res) => res.send('Hello World'));


//LOCALHOST
app.listen(port, () => {
    console.log(`Server is listening on PORT ${port} on URL: http://localhost:5000/`)
});

