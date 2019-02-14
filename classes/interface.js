var User=require("../models/user")
var Room=require("../models/room")
class user{
   constructor(name,pass,io){
      //console.log(name,pass);
      
      this.name=name;
      this.password=pass
      this.io=io
   }
   async login(){

    let  person=await User.findOne({username:this.name});
    try{
         if(person&&person.isValidPassword(this.password)){
            console.log("loging.................");
           this.io.emit("login",`user ${person.username} connected`)
            return person
         }
         else{
            return false;
         }

      }
      catch(e){
         console.log(e);
         

      }

   }
   async register(){
      console.log("$$$$$$$$$$$$$$$$$",this.name,this.password);
      
     let person=await User.findOne({username:this.name});
     try{

      
     if(person){
        // console.log("#################",person);

         console.log("exists..........");
         return false
      }
      else{
         console.log("#################no person");
         person=new User();
         console.log("#################no person");

         console.log("$$$$$$$$$$$$$$$$$",this.password);

         person.createUser({username:this.name,password:this.password});
         person.save()
         this.io.emit("register",`user ${user.username} connected`)
         return true;
      }
   }
   catch(e){
         console.log(e);
         
   }
   }
}

class chat{
    
   constructor(io,roomName,user)
   {
      this.meessage
      this.io=io;
      this.roomName=roomName;
      this.user=user
   }
   setMessage(meessage){
      this.meessage=meessage
   }
   sendMessage(){

      this.io.to(this.roomName).emit('chat',this.meessage);
   }
   joinRoom(){
      this.io.join(roomName)
      Room.findOne({name:this.roomName}).exec(function(err,room){
         room.joinRoom(this.user)
         room.save()
      });
   }
   leaveRoom(){
      this.io.leave(roomName)
      Room.findOne({name:this.roomName}).exec(function(err,room){
         room.joinRoom(this.user)
         room.save()
      });
   }
}

module.exports={
user,chat
}