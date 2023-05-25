
const FindElement_POM = require("../PageObjects/FindElement_POM");
const FindElements_POM = require("../PageObjects/FindElements_POM");
const Scrolling_POM = require("../PageObjects/Scrolling_POM");
const StartActivity_POM = require("../PageObjects/StartActivity_POM");
const Wait_POM = require("../PageObjects/Wait_POM");


describe('Testing the Khan Academy Application', () => {


    
    it('Explore the Cryptography Section', async() => {
        await Wait_POM.waitFor(6000);
        await FindElement_POM.find("xpath", "Dismiss").click();


        await FindElement_POM.find("accessibility-id","Explore").click();
        await Wait_POM.waitFor(2000);
        
        await FindElement_POM.find("xpath","Computing").click();
        await FindElement_POM.find("accessibility-id","Computer science").click();
        await Wait_POM.waitFor(2000);

        await FindElement_POM.find("xpath","Cryptography").click();
        
    });


 

    it('Tap on Bookmark icon for 3 Topics', async() => {

        // await Wait_POM.waitFor(6000);
        // await FindElement_POM.find("xpath", "Dismiss").click();

        


        await FindElement_POM.find("accessibility-id","Add Bookmark").click();
        // driver.acceptAlert();
        await FindElement_POM.find("resource-id","android:id/button2").click();

        await Scrolling_POM.scrollTo("Cryptography challenge 101");
        await FindElement_POM.find("accessibility-id","Add Bookmark").click();

        
        await Scrolling_POM.scrollTo("Modular arithmetic");
        await FindElement_POM.find("accessibility-id","Add Bookmark").click();

        await Wait_POM.waitFor();
        await StartActivity_POM.activity("org.khanacademy.android",".ui.library.MainActivity");
        await Wait_POM.waitFor();
    });


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
