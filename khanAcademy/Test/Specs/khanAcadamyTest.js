const FindElement_POM = require("../PageObjects/FindElement_POM");
const FindElements_POM = require("../PageObjects/FindElements_POM");
const StartActivity_POM = require("../PageObjects/StartActivity_POM");
const Wait_POM = require("../PageObjects/Wait_POM");


describe('Testing the Khan Academy Application', () => {

    it.only('first tc', async() => {
        await Wait_POM.waitFor(8000);
       (await FindElement_POM.find("accessibility-id","Explore")).touchAction('tap');
       
        await  Wait_POM.waitFor(5000);
        await StartActivity_POM.activity("org.khanacademy.android",".ui.library.MainActivity");
        Wait_POM.waitFor(5000);
    });

    // it('tc1', async() => {
        
    // });

    // it('tc2', async() => {
       
    // });


    // it('tc3', async() => {
       
    // });

    // it('tc4', async() => {
       
    // });

    // it('tc5', async() => {
       
    // });

    // it('tc6', async() => {
       
    // });

    // it('tc7', async() => {
       
    // });

    // it('tc8', async() => {
       
    // });

    // it('tc9', async() => {
       
    // });


});