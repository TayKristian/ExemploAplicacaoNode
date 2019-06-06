const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('../conexao')
// criando um amigo do model amigo
const amigo = mongoose.model('amigo');

// configs
router = express(express.json())
router.use(bodyParser.urlencoded({ extended: false}))
router.use(bodyParser.json())
var jsonParser = bodyParser.json({ type: 'application/*+json'});

// rota GET
router.get('/amigos', (req, res) => {
    console.log('Rota GET executando');
    amigo.find((err, amigos) => {
        // se der erro, envia erro na resposta
        if (err) 
            res.send(err)
        // mostra todos os amigos encontrados no BD
        res.json(amigos);
    });
});

// rota para salvar amigo
router.post('/amigos', jsonParser, (req, res) => {
    //res.send(req.body);
    console.log('Rota POST funcionando');
    console.log(req.body.amigo)
    novoAmigo = new amigo({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade
    });
    novoAmigo.save()
        .then(() => {
            console.log('Amigo salvo...')
            res.json('Salvo')
        }).catch((err) => {
            console.log('Erro ao salvar amigo...' + err)
        })
});

router.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
});