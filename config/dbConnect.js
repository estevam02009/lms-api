const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        console.log(process.env)
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Banco de dados conectado.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    }
};

dbConnect();