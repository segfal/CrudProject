const { DataTypes } = require("sequelize");
const db = require("../db");





const Students = db.define('students', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://i.stack.imgur.com/l60Hf.png"
    },
    gpa: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

console.log(Students); 

const findStudents = async () => {
    try{
        const allStudents = await Students.findAll();
        return allStudents;
    } catch(error) {
        next(error);
    }
}



module.exports = {Students,findStudents};