// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy users data
const users = [
  { email: 'admin@school.com', password: 'admin123' },
  { email: 'teacher@school.com', password: 'teacher123' },
];

// Routes
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// server.js
const studentRoutes = require('./routes/students');
app.use('/api/students', studentRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
