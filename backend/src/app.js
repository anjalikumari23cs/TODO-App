const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));


app.post('/login', (req, res) => {
  const { username } = req.body;
  req.session.user = { name: username };
  res.json({ message: 'User logged in', user: req.session.user });
});

app.get('/profile', (req, res) => {
  if (req.session.user) {
    res.json({ profile: req.session.user });
  } else {
    res.status(401).json({ message: 'No active session' });
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.json({ message: 'Logged out successfully' });
  });
});

module.exports = app;