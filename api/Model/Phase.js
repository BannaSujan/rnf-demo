const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const phaseSchema = new mongoose.Schema({
    phaseTitle: String,
    phaseTimeline: String,
    phaseDescription: String,
    phaseTasks: [String],
    phaseActions: [String],
    phaseValue: String
})

module.exports = mongoose.model('Phase', phaseSchema);