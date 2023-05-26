const Scrolling_POM = require("../PageObjects/Scrolling_POM");
const FindElement_POM = require("../PageObjects/FindElement_POM");
const FindElements_POM = require("../PageObjects/FindElements_POM");
const StartActivity_POM = require("../PageObjects/StartActivity_POM");
const Wait_POM = require("../PageObjects/Wait_POM");


describe('Testing the Khan Academy Application using WEbDriverIO', () => {

    // Tap on “Explore” > Tap on “Computing” > Tap on “Computer Science” > Tap on “Cryptography”
    it('Explore the Cryptography Section', async () => {
        await Wait_POM.waitFor(6000);
        await FindElement_POM.find("xpath", "Dismiss").click();
        await FindElement_POM.find("accessibility-id", "Explore").click();
        await Wait_POM.waitFor(2000);
        await FindElement_POM.find("xpath", "Computing").click();
        await FindElement_POM.find("accessibility-id", "Computer science").click();
        await Wait_POM.waitFor(2000);
        await FindElement_POM.find("xpath", "Cryptography").click();

    });

    // . Tap on Bookmark icon for 3 Topics:
    //   a. Ancient Cryptography
    //   b. Cryptography Challenge 101
    //   c. Modular Arithmetic
    it('Tap on Bookmark icon for 3 Topics', async () => {

        await FindElement_POM.find("accessibility-id", "Add Bookmark").click();
        await FindElement_POM.find("resource-id", "android:id/button2").click();

        await Scrolling_POM.scrollTo("Cryptography challenge 101");
        await FindElement_POM.find("accessibility-id", "Add Bookmark").click();


        await Scrolling_POM.scrollTo("Modular arithmetic");
        await FindElement_POM.find("accessibility-id", "Add Bookmark").click();
     
    });

    // Go back to Computer Science page > Tap on Information Theory > Bookmark “Modern Information Theory”
    it('Go back to Computer Science page for bookmark', async () => {

        driver.back();
        await FindElement_POM.find("xpath", "Information theory").click();
        await Wait_POM.waitFor(4000);

        await Scrolling_POM.scrollTo("Modern information theory");
        await Wait_POM.waitFor(3000);

        await FindElement_POM.find("accessibility-id", "Add Bookmark").click();
        await Wait_POM.waitFor();

    });

    //  Tap on “Bookmark” and verify all the bookmarks present in the page
    it('Tap on “Bookmark” and verify', async () => {

        await FindElement_POM.find("xpath", "Bookmarks").click();

        const assert1 = FindElement_POM.find("xpath", "Modern information theory");
        const assert2 = FindElement_POM.find("xpath", "Ancient cryptography");
        const assert3 = FindElement_POM.find("xpath", "Cryptography challenge 101");
        const assert4 = FindElement_POM.find("xpath", "Modular arithmetic");

        await expect(assert1).toBeExisting();
        await Wait_POM.waitFor(2000);
        await expect(assert2).toBeExisting();
        await Wait_POM.waitFor(2000);
        await expect(assert3).toBeExisting();
        await Wait_POM.waitFor(2000);
        await expect(assert4).toBeExisting();
        await Wait_POM.waitFor(2000);

    });
     
    // Clear all bookmarks
    it('Clear all bookmarks', async () => {

        await FindElement_POM.find("xpath", "Edit").click();

        (await FindElement_POM.find("xpath", "Modern information theory")).click();
        (await FindElement_POM.find("xpath", "Ancient cryptography")).click();
        (await FindElement_POM.find("xpath", "Cryptography challenge 101")).click();
        (await FindElement_POM.find("xpath", "Modular arithmetic")).click();

        (await FindElement_POM.find("xpath", "Delete")).click();

        const assert1 = FindElement_POM.find("xpath", "You have no bookmarks.");
        await expect(assert1).toBeExisting();

    });

    // Tap on “Explore” again > Tap on “Life Skills” > Tap on “Financial Literacy”
    //    a. Open the first topic
    //    b. Open the first video and play it for 15 seconds
    it('play video for 15 sec', async () => {
        await Wait_POM.waitFor(6000);
        await FindElement_POM.find("xpath", "Dismiss").click();

        await FindElement_POM.find("accessibility-id", "Explore").click();
        await Wait_POM.waitFor(2000);
        await FindElement_POM.find("resource-id", "Life skills").click();
        (await FindElement_POM.find("xpath", "Financial Literacy")).click();

        await Wait_POM.waitFor(3000);
        await FindElement_POM.find("xpath", "Welcome to Financial Literacy").click();

        await Wait_POM.waitFor(3000);
        await FindElement_POM.find("xpath", "Welcome to Financial Literacy").click();


        await Wait_POM.waitFor(15000);
        driver.back();


    });
    
    // Tap on “Home” > Verify the last seen topic name under “Recent Lessons”
    it('Verify the last seen topic name under Recent Lessons', async () => {

        await FindElement_POM.find("xpath", "Home").click();
        const lastSeenTopic = await FindElement_POM.find("className", "android.view.ViewGroup");
        await expect(lastSeenTopic).toBeExisting();

    });
   
    it('Explore the Math section', async () => {
        await Wait_POM.waitFor(2000);
        
        await FindElement_POM.find("accessibility-id", "Explore").click();
        await Wait_POM.waitFor(2000);
        await FindElement_POM.find("resource-id", "Math").click();
        (await FindElement_POM.find("xpath", "Financial Literacy")).click();

        await Wait_POM.waitFor(3000);
        await FindElement_POM.find("xpath", "Welcome to Financial Literacy").click();

        await Wait_POM.waitFor(3000);
        await FindElement_POM.find("xpath", "Welcome to Financial Literacy").click();


        await Wait_POM.waitFor(15000);
        driver.back();

     });
    



    // Close the application
    it('Close the application', async () => {
        driver.closeApp();
    });


});