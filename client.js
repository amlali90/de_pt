var io =require( 'socket.io-client');
const socket = io('http://localhost:3000');

var {user} =require("./classes/interface")
var {control} =require("./classes/controller")
var {commendLogin} =require("./classes/commend")
var {commendRegister} =require("./classes/commend");

var readlineSync = require('readline-sync');

  
//console.log(socket);

socket.on("connection",()=>{
    console.log("connecting");
    
})

socket.on("message",(data)=>{
    console.log(data);
    
    
})
let x

let remote=new control();
 function first(){
        console.log("what do you went to do ");
        console.log("1-login");
        console.log("2-register");

     let number=readlineSync.question(`please enter number:`);

     
            switch (number){

                case '1':
                let username=readlineSync.question(`please enter your name:`)
                let password=readlineSync.question(`please enter your password:`)
                console.log(number,username,password);
                x=new user(username,password,socket);
                remote.setCommend(new commendLogin(x) )
                remote.apply();
                break;
                case '2':
                 username=readlineSync.question(`please enter your name:`)
                 password=readlineSync.question(`please enter your password:`)
                console.log(number,username,password);
                x=new user(username,password,socket);
                remote.setCommend(new commendRegister(x) )
                remote.apply();
                break;

                default:
                console.log("unKown input");
       
            }
            console.log("b- back");
            console.log("c-continue");
            console.log(x);
            
            let order=readlineSync.question(`please enter number:`);
            switch (order){

                case 'b':
                first();
                break
                case 'c':
                break

             
            }
              

}


   
first()
