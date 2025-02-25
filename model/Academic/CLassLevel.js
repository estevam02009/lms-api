const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClassLevelSchema = new Schema(
    {
        // lavel 100/200/300/400
        name: { type: String, required: true },
        description: { type: String },
        createdBy: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
        // Os alunos serão adicionados ao nível da classe quando forem designados para uma classe
        students: [
            { type: Schema.Types.ObjectId, ref: 'Student' },
        ],
        // Opcional
        subjectcs: [
            {
                subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
            },
        ],
        teachers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Teacher',

            },
        ],
    },
    { timestamps: true }
);

const ClassLevel = mongoose.model('ClassLevel', ClassLevelSchema);

module.exports = ClassLevel;