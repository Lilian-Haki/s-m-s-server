// routes/students.js
const express = require('express');
const router = express.Router();

// In-memory data (replace with DB)
let students = [];

// GET all students
router.get('/', (req, res) => {
  res.json(students);
});

// GET single student
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === req.params.id);
  student ? res.json(student) : res.status(404).json({ message: 'Not found' });
});

// CREATE student
router.post('/', (req, res) => {
  const { id, name, age, grade } = req.body;
  students.push({ id, name, age, grade });
  res.status(201).json({ message: 'Student created' });
});

// UPDATE student
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === req.params.id);
  if (student) {
    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    student.grade = req.body.grade || student.grade;
    res.json({ message: 'Student updated' });
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

// DELETE student
router.delete('/:id', (req, res) => {
  students = students.filter(s => s.id !== req.params.id);
  res.json({ message: 'Student deleted' });
});

module.exports = router;
