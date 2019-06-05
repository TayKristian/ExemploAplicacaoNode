const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projetoMongose',{useNewUrlParser: true})
        .then(() => {
            console.log('Conectado com sucesso')
        })
        .catch((err) => {
            console.log('Erro na conexao' + err)
        })