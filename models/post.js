const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos", {
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.INTEGER
    }
})

//Agendamentos.sync({force: true})

module.exports = Agendamentos