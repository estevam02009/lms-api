const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('dev'));

// Routes

//admin register
app.post('/api/v1/admin/register', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "O administrador foi registrado",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// Admin Login
app.post('/api/v1/admin/login', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin logado com sucesso!",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// get all admins
app.get('/api/v1/admins', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Todos os admins",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// get single admins
app.get('/api/v1/admins/:id', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Single admin",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// Update admin
app.put('/api/v1/admins/:id', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin atualizado com sucesso!",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// Delete admin
app.delete('/api/v1/admins/:id', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin deletado com sucesso!",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// admin suspend teacher
app.put('/api/v1/admins/suspend/teacher/:id', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Professor suspendido com sucesso!",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// admin unsuspend teacher
app.put('/api/v1/admins/unsuspend/teacher/:id', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Professor desuspendido com sucesso!",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        })
    }
});

// admin withdraw teacher
app.put('/api/v1/admins/withdraw/teacher/:id', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Professor retirado com sucesso!",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// admin unwithdraw teacher
app.put('/api/v1/admins/unwithdraw/teacher/:id', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Professor não retirado com sucesso!",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// admin publish exam results teacher
app.put('/api/v1/admins/publish/exam/:id', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Resultados do exame publicados com sucesso!",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});

// admin unpublish exam results teacher
app.put('/api/v1/admins/unpublish/exam/:id', (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Resultados do exame despublicado com sucesso!",
        });
    } catch (error) {
        res.json({
            status: "error",
            error: error.message,
        });
    }
});




module.exports = app;