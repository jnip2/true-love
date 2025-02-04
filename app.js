const express = require("express");
const bodyParser = require("body-parser")
const database = require("./databaseConnection");
const cookieSession = require("cookie-session");


const app = express();

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const signUpRouter = require('./routes/signup');
const triviaRouter = require('./routes/trivia');
const lobbyRouter = require('./routes/lobby')

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signUpRouter);
app.use('/trivia', triviaRouter);
app.use('/lobby', lobbyRouter);

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieSession({
    name: 'session',
    keys: ['28@$()@Y%932h59237b#*)hfsb'],
}));

database.getConnection((err, dbConnection) => {
    if (!err) {
        console.log("Succesfully connected to MySQL");
    } else {
        console.log("Error Connecting to MySQL");
        console.log(err);
    }
});

module.exports = app;