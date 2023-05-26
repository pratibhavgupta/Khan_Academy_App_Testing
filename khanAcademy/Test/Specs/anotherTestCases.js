const FindElement_POM = require("../PageObjects/FindElement_POM");
const FindElements_POM = require("../PageObjects/FindElements_POM");
const StartActivity_POM = require("../PageObjects/StartActivity_POM");
const Wait_POM = require("../PageObjects/Wait_POM");


describe('Testing the Khan Academy Application', () => {
    it.skip('Signup', async () => {
        await FindElement_POM.find("xpath", "Dismiss").click();
        await Wait_POM.waitFor(9000);
        (await FindElement_POM.find("resource-id", "welcomeCardSignInButton")).click();
        await Wait_POM.waitFor(4000);
        (await FindElement_POM.find("xpath", "Continue with Google")).click();
        await Wait_POM.waitFor(9000);
        (await FindElement_POM.find("xpath", "Mahi Thakur")).click();
        await Wait_POM.waitFor(9000);
        const join = (await FindElement_POM.find("xpath", "Join class"));
        // console.log(join);
        await expect(join).toBeExisting();
        // await Wait_POM.waitFor(8000);

    });
    it.skip('Search ', async () => {
        // await  $('//*[@resource-id="whatsNewScreenDismissButton"]').touchAction('tap');
        //   (await FindElement_POM.find("resource-id","whatsNewScreenDismissButton")).touchAction('tap');
        await Wait_POM.waitFor(8000);
        await FindElement_POM.find("xpath", "Dismiss").click();
        (await FindElement_POM.find("accessibility-id", "Search")).click();
        await Wait_POM.waitFor(5000);
        (await FindElement_POM.find("xpath", "Computing")).touchAction('tap');
        (await FindElement_POM.find("xpath", "Computer science")).click();
        (await FindElement_POM.find("resource-id", "unitCardHeader")).click();
        (await FindElement_POM.find("xpath", "Information theory")).click();
        await Wait_POM.waitFor(8000);
        //  await $("//android.widget.Button[@content-desc='Add Bookmark'])[2]").click();
        await driver.touchAction({
            action: 'tap', x: 1005, y: 129
        })
        await (await FindElement_POM.find("resource-id", "android:id/button2")).click();


    });
    it('SearchBox', async () => {
        await Wait_POM.waitFor(8000);
        await FindElement_POM.find("xpath", "Dismiss").click();
        (await FindElement_POM.find("accessibility-id", "Search")).click();
        await Wait_POM.waitFor(5000);
        // (await $("//*[@content-desc='Search']")).click();
        // await  $("//*[@content-desc='Search']").setValue("s")
        await FindElement_POM.find("xpath", "Search").click();
        await FindElement_POM.find("xpath", "Search").addValue("s");
        await driver.back();
        await Wait_POM.waitFor(4000);
        //  await driver.keys(key.Enter);
        (await FindElement_POM.find("xpath", "Filter")).click();
        await driver.touchAction({
            action: 'tap', x: 1001, y: 549
        })
            (await FindElement_POM.find("xpath", "Apply")).click();
        await FindElement_POM.find("xpath", "Why S-waves only travel in solids").click();

    });
});