const express = require('express');
const db = require('./config/connection');
const routes = require('./api');

// get the current working directory
const cwd = process.cwd();

const PORT = 3001;
const app = express();

const activity = cwd.includes('print-sleeve-tracker') ? cwd.split('/print-sleeve-tracker/')[1] : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} running on port ${PORT}!`);
    });
});