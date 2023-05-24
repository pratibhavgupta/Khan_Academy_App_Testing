class FindElements_POM{
    async finds(locator_type,locator){
        if(locator_type=="accessibility-id"){
           return await $$(`~${locator}`)
        }else if(locator_type=="resource-id"){
            return await $$(`//*[@resource-id=${locator}]`);
        }else if(locator_type=="xpath"){
            return await $$(`//*[@text=${locator}]`);
        }else if(locator_type=="className"){
            return await $$(`${locator}`);
        }
    }
}

module.exports=new FindElements_POM();