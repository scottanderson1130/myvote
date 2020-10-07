require('dotenv').config();
const express = require('express');
const authRoutes = require('./auth-routes/auth.js');
const homeRoutes = require('./auth-routes/homepage.js');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('../db/index');
const { SERVER_PORT } = process.env;
const cookieSession = require('cookie-session');
const keys = require('./config/keys.js');
const cors = require('cors');

//////////////////            ROUTES TO DATABASE            /////////////////
/////////////////////////////////////////////////////////////////////////////

const usersRoute = require('../db/routes/Users.routes');
const voterRoute = require('../db/routes/Voter.routes');
const mayorRoute = require('../db/routes/Mayor.routes');
const sosRoute = require('../db/routes/Sos.routes');
const gubRoute = require('../db/routes/Gub.routes');
const veepRoute = require('../db/routes/Veep.routes');
const potusRoute = require('../db/routes/Potus.routes');
const ballotRoute = require('../db/routes/Ballot.routes');

const DIR = path.join(__dirname, '../build');
const html_file = path.join(DIR, 'index.html');
const app = express();
app.use(cors());
app.use(express.static(DIR));
app.use(bodyParser.json());

app.set('view engine', 'html');

////////////////        routes for authentication       ///////////////
app.use(
  cookieSession({
    // cookie goes stale after a day
    maxAge: 24 * 60 * 60 * 1000, // hours, minutes, seconds, milliseconds
    keys: [keys.session.cookieKey], // encrypt cookie
  })
);

app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/homepage', homeRoutes);
///////////////////////////////////////////////////////////////////////

///////////////         routes for database            ///////////////
app.use('/api/users', usersRoute);
app.use(voterRoute);
app.use(mayorRoute);
app.use(sosRoute);
app.use(gubRoute);
app.use(veepRoute);
app.use(potusRoute);
app.use(ballotRoute);

app.get('/', (req, res) => {
  res.render(html_file);
});

connectDB().then(() => {
  app.listen(SERVER_PORT, () => {
    console.info(`listening on http://localhost:${SERVER_PORT}`);
  });
});
