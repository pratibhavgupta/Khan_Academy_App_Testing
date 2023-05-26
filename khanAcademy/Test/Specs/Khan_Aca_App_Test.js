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
        await FindElement_POM.find("accessibility-id","Add Bookmark").click();
        
        await FindElement_POM.find("resource-id","android:id/button2").click();

        await Scrolling_POM.scrollTo("Cryptography challenge 101");
        await FindElement_POM.find("accessibility-id", "Add Bookmark").click();

        await Scrolling_POM.scrollTo("Modular arithmetic");
        await FindElement_POM.find("accessibility-id","Add Bookmark").click();
        

    });

    it('Go back to Computer Science page', async() => {
        driver.back();
        await FindElement_POM.find("xpath","Information theory").click();
        await Scrolling_POM.scrollTo("Modern information theory");
        await FindElement_POM.find("accessibility-id","Add Bookmark").click();
    });


    it('Tap on “Bookmarks” and verify all the bookmarks', async() => {
       await FindElement_POM.find("accessibility-id","Bookmarks").click();
       
       await driver.takeScreenshot();
       expect(FindElement_POM.find("xpath","Modern information theory")).toExist();
       expect(FindElement_POM.find("xpath","Modern information theory")).toBeDisplayed();

       expect(FindElement_POM.find("xpath","Cryptography challenge 101")).toExist();
       expect(FindElement_POM.find("xpath","Cryptography challenge 101")).toBePresent();

       await driver.takeScreenshot();
       expect(FindElement_POM.find("xpath","Modular arithmetic")).toExist();
       expect(FindElement_POM.find("xpath","Ancient cryptography")).toExist();
        

    });

    it('Clear all bookmarks', async() => {
       await FindElement_POM.find("xpath","Edit").click();
       const allSelectBox=await FindElements_POM.finds("accessibility-id","Select bookmark");
        for(let i=0;i<allSelectBox.length;i++){
           await allSelectBox[i].click();
        }

       await FindElement_POM.find("xpath","Delete").click();
       await driver.takeScreenshot();
    });


    it('Tap on “Explore” again and Tap on “Life Skills”', async() => {
        await FindElement_POM.find("accessibility-id","Explore").click();
        await FindElement_POM.find("accessibility-id","Explore").click();
        await FindElement_POM.find("xpath","Life skills").click();

        await FindElement_POM.find("accessibility-id","Financial Literacy").click();
        
        await FindElement_POM.find("xpath","Welcome to Financial Literacy").click();
        await FindElement_POM.find("xpath","Welcome to Financial Literacy").click();

        await Wait_POM.waitFor(10000);
    });

    it('Verify the last seen topic name under “Recent Lessons”', async() => {
       
       
        await FindElement_POM.find("accessibility-id","Home").click();
        await Scrolling_POM.scrollTo("Recent lessons");
        await driver.takeScreenshot();
        expect(FindElement_POM.find("xpath","Welcome to Financial Literacy")).toBeDisplayed();
        
    });

    it('Testing the Search Functionality', async() => {
       
        await FindElement_POM.find("accessibility-id","Explore").click();
        await FindElement_POM.find("accessibility-id","Explore").click();

        
        await FindElement_POM.find("xpath","Search").click();
        await FindElement_POM.find("xpath","Search").addValue("Hydrogen");
        await driver.back();
        
        await FindElement_POM.find("xpath","Hydrogenation").click();
        await driver.takeScreenshot();
        await expect(FindElement_POM.find("xpath","Hydrogenation")).toBeDisplayed();
        
    });


    it('Signup to the Application', async () => {
        
        await StartActivity_POM.activity("org.khanacademy.android",".ui.library.MainActivity");
        (await FindElement_POM.find("resource-id", "welcomeCardSignInButton")).click();
        await Wait_POM.waitFor(4000);
        (await FindElement_POM.find("xpath", "Continue with Google")).click();
        await Wait_POM.waitFor(9000);
        (await FindElement_POM.find("xpath", "Pratibhav Gupta")).click();
        await Wait_POM.waitFor(9000);
        await Scrolling_POM.scrollTo("Join class");
        await driver.takeScreenshot();
        await expect(FindElement_POM.find("xpath", "Join class")).toBeExisting();
    });


   
    it('Select the new language for app', async() => {
        await StartActivity_POM.activity("org.khanacademy.android",".ui.library.MainActivity");
        await Scrolling_POM.scrollAndClick("Select language");  
        
        await FindElement_POM.find("xpath","English").click();
        await Scrolling_POM.scrollAndClick("हिन्दी"); 
        
        await Wait_POM.waitFor();
        await expect(FindElement_POM.find("xpath","आप कुछ भी सीख सकते हैं")).toBeDisplayed();
        await Wait_POM.waitFor();
        await driver.takeScreenshot();

    });


    it('Close the application', async() => {
        driver.closeApp();
    });
 
});