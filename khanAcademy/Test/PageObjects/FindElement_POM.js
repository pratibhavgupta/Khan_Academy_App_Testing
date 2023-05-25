class FindElement_POM{

    async find(locator_type,locator){
        if(locator_type=="accessibility-id"){
           return await $(`~${locator}`)
        }else if(locator_type=="resource-id"){
            return await $(`//*[@resource-id=${locator}]`);
        }else if(locator_type=="className"){
            return await $(`${locator}`);
        }else if(locator_type=="xpath"){
            return await $(`//*[@text=${locator}]`);
        }else if(locator_type=="fullXpath"){
            return await $(`${locator}`);
        }
    }

    async xpath(locator,attribute){
        
       return await $(`//*[@${attribute}=${locator}]`);
    }
}

module.exports=new FindElement_POM();