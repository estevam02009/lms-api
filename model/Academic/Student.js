const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        studentId: {
            type: String,
            required: true,
            default: function () {
                return (
                    "STU" +
                    Math.floor(Math.random() * 900) +
                    Date.now().toString().slice(2, 4) +
                    this.name
                        .split(" ")
                        .map(name => name[0])
                );
            },
        },
        isWithdrawn: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: 'student'
        },
        // As aulas vão do nível 1 ao 6
        // acompanhar o nível de classe em que o aluno está
        classLevels: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ClassLevels'
            },
        ],
        currentClassLevel: {
            type: String,
            default: function () {
                return this.classLevels[this.classLevels.length - 1];
            },
        },
        academicYear: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AcademicYear',
            required: true
        },
        dateAdmitted: {
            type: Date,
            default: Date.now
        },
        exameResults: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ExameResults'
            },
        ],
        program: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Program',
            required: true
        },
        isPromotedToLevel200: {
            type: Boolean,
            default: false
        },
        isPromotedToLevel300: {
            type: Boolean,
            default: false
        },
        isPromotedToLevel400: {
            type: Boolean,
            default: false
        },
        isGraduated: {
            type: Boolean,
            default: false
        },
        isWithdrawn: {
            type: Boolean,
            default: false
        },
        isSuspended: {
            type: Boolean,
            default: false
        },
        prefectName: {
            type: String,
        },
        // behaviorReport: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: 'BehaviorReport'
        //     },
        // ],
        financialreport: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'FinancialReport'
            },
        ],
        // Year group
        yearGraduated: {
            type: String,
        },
    },
    { timestamps: true },
);

// model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;