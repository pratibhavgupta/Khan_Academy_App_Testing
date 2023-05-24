class Wait_POM{

    async waitFor(time){
         await driver.pause(time);
    }
}

module.exports=new Wait_POM();