const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Habit = sequelize.define("Habit",{
 id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
 title:DataTypes.STRING,
 completed:{type:DataTypes.BOOLEAN,defaultValue:false}
});

User.hasMany(Habit);
Habit.belongsTo(User);

module.exports = Habit;
