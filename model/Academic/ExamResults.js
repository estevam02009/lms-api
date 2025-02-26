const mongoose = require('mongoose');

const { Schema } = mongoose;

// Exam result Schema
const examResultSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        },
        exam: {
            type: Schema.Types.ObjectId,
            ref: 'Exam',
            required: true
        },
        grade: {
            type: Number,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        pasMark: {
            type: Number,
            required: true,
            default: 50,
        },
        // failed/pssed
        status: {
            type: String,
            required: true,
            enum: ['passed', 'failed'],
            default: 'failed',
        },
        // Excelent , Good,  Poor
        remarks: {
            type: String,
            required: true,
            enum: ['excellent', 'good', 'poor'],
            default: 'poor',
        },
        position: {
            type: Number,
            required: true,
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject',
        },
        classLevel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ClassLevel',
        },
        academicTerm: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AcademicTerm',
            required: true,
        },
        academicYear: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AcademicYear',
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true }
);

const ExamResult = mongoose.model('ExamResult', examResultSchema);

module.exports = ExamResult;