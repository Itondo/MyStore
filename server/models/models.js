const requelize = require('../db')
const {DataTypes} = require ('sequelize')


const User = requelize.define('user',{
    id: {type:DataTypes.INTEGER,primaryKey:true, autoIncrement: true},
    email:{type:DataTypes.STRING,unique: true,},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,unique: true,defaultValue: "USER"},

})
const Basket = requelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})
const BasketDevice = requelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})
const Device = requelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    rating:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING,defaultValue:0},

})
const Type = requelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique:true,allowNull:false},
})
const Brand = requelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
})
const Rating = requelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})
const DeviceInfo = requelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING,allowNull: false},
    description: {type:DataTypes.STRING,allowNull:false},
})

const TypeBrand = requelize.define('type_brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

/**Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)*/
User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)
Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through:TypeBrand })
Brand.belongsToMany(Type,{through:TypeBrand })

module.exports =
{
    User,
        Basket,
        BasketDevice,
        Device,
        Type,
        Brand,
        Rating,
        TypeBrand,
        DeviceInfo
}

