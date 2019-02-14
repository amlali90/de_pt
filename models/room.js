var mongoose = require('mongoose');
var User =require('./user')

var Room = mongoose.Schema({
	//fullname
    name             : { type: String},
    users             : [{type:mongoose.Schema.Types.ObjectId,ref:'User'}]
})

Room.methods.createRoom=function(name,user){
    this.name=name
    this.users.push(user);

}
Room.methods.joinRoom=function(user){
    this.users.push(user);

}
Room.methods.joinRoom=function(user){
    this.users.push(user._id);

}

Room.methods.leaveRoom=function(user){
    this.users=this.users.filter(e=>e!=user._id)

}
module.exports = mongoose.model('Room', Room);