class control{
    constructor(){
        this.sout;
    }
    setCommend(sout){
        this.sout=sout
    }
    apply(){
        console.log("appling.........");
        
        this.sout.execute()
    }
}

module.exports={
    control
}