


const Students = require('./students');
const Campuses = require('./campuses');


Students.belongsToMany(Campuses, {through: 'student_campus'});
Campuses.belongsToMany(Students, {through: 'student_campus'});



module.exports = {Students, Campuses};

