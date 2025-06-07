//import express from 'express';
//import cors from 'cors';
//import bodyParser from 'body-parser';
//import studentRoutes from './routes/students.jsx';
//import teacherRoutes from './routes/teachers';
//import examRoutes from './routes/exams';
//import attendanceRoutes from './routes/attendance';
//import courseRoutes from './routes/courses';

// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/school', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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

const teacherRoutes = require('./routes/teachers');
app.use('/api/teachers', teacherRoutes);

const courseRoutes = require('./routes/courses');
app.use('/api/courses', courseRoutes);

const examRoutes = require('./routes/exams');
app.use('/api/exams', examRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
