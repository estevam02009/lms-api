const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProgramSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        duration: {
            type: String,
            required: true,
            default: "4 anos",
        },
        // Criado automaticamente
        // CSFTY
        code: {
            type: String,
            deafult: function () {
                return (
                    this.name
                        .split(" ")
                        .map(name => name[0])
                        .join("")
                        .toUpperCase() +
                        Math.floor(10 + Math.random() * 90) +
                        Math.floor(10 + Math.random() * 90)
                );
            },
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true
        },
        // Vamos pressionar os professores responsáveis ​​pelo programa
        teachers: [
            {
                type: Schema.Types.ObjectId,
                ref: "Teacher",
                // default: [],
            },
        ],
        students: [
            {
                type: Schema.Types.ObjectId,
                ref: "Student",
                default: [],
            },
        ],
        // Nós iremos empurrar os assuntos que estão no programa quando o programa for criado
        subjects: [
            {
                type: Schema.Types.ObjectId,
                ref: "Course",
                default: [],
            },
        ],
    },
    { timestamps: true }
);

const Program = mongoose.model("Program", ProgramSchema);

module.exports = Program;