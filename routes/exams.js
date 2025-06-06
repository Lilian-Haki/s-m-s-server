const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');

// Create an exam
router.post('/', async (req, res) => {
try {
const exam = new Exam(req.body);
await exam.save();
res.status(201).json(exam);
} catch (err) {
res.status(400).json({ error: err.message });
}
});

// Get all exams
router.get('/', async (req, res) => {
try {
const exams = await Exam.find().populate('teacherId');
res.json(exams);
} catch (err) {
res.status(500).json({ error: err.message });
}
});

// Get a single exam by ID
router.get('/:id', async (req, res) => {
try {
const exam = await Exam.findById(req.params.id);
if (!exam) return res.status(404).json({ message: 'Exam not found' });
res.json(exam);
} catch (err) {
res.status(500).json({ error: err.message });
}
});

// Update an exam
router.put('/:id', async (req, res) => {
try {
const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, {
new: true,
});
if (!exam) return res.status(404).json({ message: 'Exam not found' });
res.json(exam);
} catch (err) {
res.status(400).json({ error: err.message });
}
});

// Delete an exam
router.delete('/:id', async (req, res) => {
try {
const deleted = await Exam.findByIdAndDelete(req.params.id);
if (!deleted) return res.status(404).json({ message: 'Exam not found' });
res.json({ message: 'Exam deleted successfully' });
} catch (err) {
res.status(500).json({ error: err.message });
}
});

module.exports = router;