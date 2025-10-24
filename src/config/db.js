const { Sequelize } = require('sequelize');

const database = 'kiskecodetunes';

const username = 'root';
const password = 'root';

const host = 'localhost';

const sequelize = new Sequelize(database, username, password, { host: host, dialect: 'mysql' });

const connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexion BBDD satisfactoria');
    } catch (error) {
        console.log(error);

    }
}

module.exports = {
    sequelize, connectToDB
}
