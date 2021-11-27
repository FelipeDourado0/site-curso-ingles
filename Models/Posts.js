const db = require('./db');

const post = db.sequelize.define('estudantes', {
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type:db.Sequelize.STRING,
        allowNull: false
    },
    sobrenome:{
        type:db.Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:db.Sequelize.STRING,
        allowNull: false
    },
    cidade:{
        type:db.Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type:db.Sequelize.STRING,
        allowNull: false
    },
    sexo:{
        type:db.Sequelize.STRING,
        allowNull: false
    },
    nivel:{
        type:db.Sequelize.STRING,
        allowNull: false
    }
});
post.sync();
module.exports = post;