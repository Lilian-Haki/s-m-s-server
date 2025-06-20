const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
name: { type: String, required: true },
grade: { type: String, required: true },
subjects: { type: String, required: true },
class: { type: String, required: true }
});

module.exports = mongoose.model('Teacher', teacherSchema);
