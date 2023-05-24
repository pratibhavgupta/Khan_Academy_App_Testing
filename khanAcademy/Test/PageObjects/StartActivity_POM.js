class StartActivity_POM{

    async activity(pack,act){
        await driver.startActivity(pack,pack+act);
    }
}

module.exports=new StartActivity_POM();