const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
title: { type: String, required: true },
subject: { type: String, required: true },
date: { type: Date, required: true },
class: { type: String, required: true },
teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
});

module.exports = mongoose.model('Exam', examSchema);
