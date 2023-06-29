const {Sequelize} = require("sequelize");





//database is collegeinfo
/* two tables campus(
    name: string
    imageURl: string
    address: string
    description: string
 )


*/


//access postgress database
const sequelize = new Sequelize('collegeinfo', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min:0,
        require: 30000,
        idle: 10000
    }
});





module.exports = sequelize;