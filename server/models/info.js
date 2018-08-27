const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Info = new Schema({
    email: String,
    firstName: String,
    middleName: String,
    lastName: String,
    gender: String,
    dateBirth: String,
    countryRes: String,
    mailStreetAdd1: String,
    mailStreetAdd2: String,
    state: String,
    zip: String,
    cell: String,
    profession: String,
    confirm: Boolean
},
{
    collection : 'info'
});

module.exports = mongoose.model('Info',Info );


