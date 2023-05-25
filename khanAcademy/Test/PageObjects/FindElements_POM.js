class FindElements_POM{
    finds(locator_type,locator){
        if(locator_type=="accessibility-id"){
           return $$(`~${locator}`)
        }else if(locator_type=="resource-id"){
            return $$(`//*[@resource-id="${locator}"]`);
        }else if(locator_type=="xpath"){
            return $$(`//*[@text="${locator}"]`);
        }else if(locator_type=="className"){
            return $$(`${locator}`);
        }
    }
}

module.exports=new FindElements_POM();