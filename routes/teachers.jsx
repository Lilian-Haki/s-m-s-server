// routes/teachers.js
const express = require('express');
const router = express.Router();

// Dummy data (replace with DB later)
let teachers = [];

// GET all teachers
router.get('/', (req, res) => {
  res.json(teachers);
});

// GET single teacher
router.get('/:id', (req, res) => {
  const teacher = teachers.find(t => t.id === req.params.id);
  teacher ? res.json(teacher) : res.status(404).json({ message: 'Not found' });
});

// CREATE teacher
router.post('/', (req, res) => {
  const { id, name, subject, email } = req.body;
  teachers.push({ id, name, subject, email });
  res.status(201).json({ message: 'Teacher created' });
});

// UPDATE teacher
router.put('/:id', (req, res) => {
  const teacher = teachers.find(t => t.id === req.params.id);
  if (teacher) {
    teacher.name = req.body.name || teacher.name;
    teacher.subject = req.body.subject || teacher.subject;
    teacher.email = req.body.email || teacher.email;
    res.json({ message: 'Teacher updated' });
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

// DELETE teacher
router.delete('/:id', (req, res) => {
  teachers = teachers.filter(t => t.id !== req.params.id);
  res.json({ message: 'Teacher deleted' });
});

module.exports = router;
