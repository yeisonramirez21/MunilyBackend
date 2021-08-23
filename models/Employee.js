const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createError = require('http-errors');

//crear datos para la tabla en la base de datos
let Employee = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)