import * as Sequelize from 'sequelize'

export interface TrainingAttribute {
    id?:number
    time?:Date
    latitude?:string
    longitude?:string
    temperature?:number
    cadence?:number 
    heartrate?:number
}

export interface TrainingInstance extends Sequelize.Instance<TrainingAttribute>, TrainingAttribute {}

export default function defineTraining(sequelize: Sequelize.Sequelize, DataTypes) {
    const training = sequelize.define<TrainingInstance, TrainingAttribute>('training', {
        time: DataTypes.DATE,
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
        temperature: DataTypes.FLOAT,
        cadance: DataTypes.INTEGER,
        heartrate: DataTypes.INTEGER
    }, {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        });
    return training;
};