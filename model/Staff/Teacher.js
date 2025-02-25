const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        deleteEmployed: { type: Date, default: Date.now },
        teacherId: { 
            type: String, 
            required: true, 
            default: function () {
                return (
                    "TEA" +
                    Math.floor(Math.random() * 900) +
                    Date.now().toString().slice(2, 4) +
                    this.name
                     .split( " ")
                     .map(name => name[0])
                     .join("")
                     .toUpperCase()
                );
            }, 
        },
        // se retirado o professor não conseguirá fazer login
        isWithdrawn: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            deafult: 'teacher',
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject',
            required: true,
        },
        applicationStatus: {
            type: String,
            enum: ['pendente', 'aprovado', 'rejeitado'],
            default: 'pendente',
        },
        program: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Program',
            required: true,
        },
        // Um professor pode ensinar em mais de um nível de classe
        classLevel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ClassLevel',
        },
        academicYear: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AcademicYear',
            required: true,
        },
        examsCreated: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exam',
        },
        cretaedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Admin',
            required: true,
        },
        academicTerm: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AcademicTerm',
            required: true,
        },
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;