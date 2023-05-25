class Wait_POM{

    async waitFor(){
        await driver.pause(5000);
    }

    async waitFor(time){
        await driver.pause(time);
    }
}

module.exports=new Wait_POM();