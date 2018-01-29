const models = require('../models')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.username, config.password, config)


sequelize.query("SELECT avg(cadance) FROM trainings", { type: Sequelize.QueryTypes.SELECT })
    .then((avg:number) => console.log(avg))
    .catch((error:string) => console.log(error))