const http = require('http');
const app = require('./app/app');


const PORT = process.envPORT || 2020;



// Srever
const server = http.createServer(app);
app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`));