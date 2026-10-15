//Core Modules
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const MongoStore = require('connect-mongo').default;

//Local Modules

//Common Commands

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, 'public')));

//Routes


//Server
const PORT = 8000;
mongoose.connect(process.env.MONGODB_URL).then((client) => {
    console.log('Connected To MongoDB');
    app.listen(PORT, () => {
        console.log(`Server Running on http://localhost:${PORT}`);
    })
}).catch((err) => {
    console.log(err);
})