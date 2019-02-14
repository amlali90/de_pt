var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');
var jwt      = require('jsonwebtoken');
mongoose.Promise    = global.Promise;
mongoose.connect('mongodb://localhost:27017/chat',{ useNewUrlParser: true });
var User = mongoose.Schema({
	//fullname
    username             : { type: String},
    password             : { type: String}
})

User.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.createUser=function(obj){
    this.username=obj.username
    this.password=this.generateHash(obj.password)

}
//checkPasswordValidationrequi

User.methods.isValidPassword = function(password){
	if(!this.password) return false;
	console.log(`checking that ${password} = ${this.password}`)
	return bcrypt.compareSync(password, this.password);
};


User.pre('save', function(next) {
	this.updatedAt = new Date();
	next();
});

module.exports = mongoose.model('User', User);