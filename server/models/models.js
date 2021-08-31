const requelize = require('../db')
const {DataTypes} = require ('sequelize')


const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER,primaryKey:true, autoIncrement: true},
    email:{type:DataTypes.STRING,unique: true,},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,unique: true,defaultValue: "USER"},

})
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})
const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})
const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    rating:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING,defaultValue:0},

})
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique:true,allowNull:false},
})
const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
})
const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
})