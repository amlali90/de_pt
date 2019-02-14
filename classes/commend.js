class commendLogin{
    constructor(user){
        this.user=user
    }
    execute(){
        this.user.login()
    }
}
class commendRegister{
    constructor(user){
        this.user=user
    }
    execute(){
        this.user.register()
    }
}
class commendSetMessage{
    constructor(chat){
        this.chat=chat
    }
    execute(){
        this.chat.setMessage();
    }
}
class commendJoinRoom{
    constructor(chat){
        this.chat=chat
    }
    execute(){
        this.chat.joinRoom();
    }
}
class commendLeaveRoom{
    constructor(chat){
        this.chat=chat
    }
    execute(){
        this.chat.leaveRoom();
    }
}

class commendSendMessage{
    constructor(chat){
        this.chat=chat
    }
    execute(){
        this.chat.sendMessage();
    }
}

module.exports={
    commendLogin,commendLeaveRoom,
    commendSendMessage,commendSetMessage,
    commendJoinRoom,commendRegister
}