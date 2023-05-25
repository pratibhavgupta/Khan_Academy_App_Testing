class Scrolling_POM{

    async scrollTo(text){
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"${text}\"))`);
    }

    async scrollAndClick(text){
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"${text}\"))`).click();
    }
}

module.exports=new Scrolling_POM();