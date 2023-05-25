class FindElement_POM{

    find(locator_type,locator){
        if(locator_type=="accessibility-id"){
            return $(`~${locator}`);
        }else if(locator_type=="resource-id"){
            return $(`//*[@resource-id="${locator}"]`);
        }else if(locator_type=="className"){
            return $(`${locator}`);
        }else if(locator_type=="xpath"){
            return $(`//*[@text="${locator}"]`);
        }else if(locator_type=="fullXpath"){
            return $(`${locator}`);
        }
    }

    xpath(locator,attribute){
        
       return $(`//*[@${attribute}="${locator}"]`);
    }

    xpathL(selector,locator,attribute){
        
        return $(`//${selector}[@${attribute}="${locator}"]`);
     }
}

module.exports=new FindElement_POM();