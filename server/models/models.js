const requelize = require('../db')
const {DataTypes} = require ('sequelize')


const User = sequelize.define('user',{
    id: {type:DataTypes.integer,primaryKey:true, autoIncrement: true},
    email:{type:DataTypes.string,unique: true,},

})