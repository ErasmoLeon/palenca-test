const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const authRoute = require('./routes/auth.route');
const profileRoute = require('./routes/profile.route');
const errorHandler = require('./services/error.handler');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/uber/login', authRoute);
app.use('/uber/profile', profileRoute);

app.get('/', (req, res) => {
    res.json("Hello Palenca");
});

app.use((err, req, res, next) => {
    errorHandler(err, res);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));