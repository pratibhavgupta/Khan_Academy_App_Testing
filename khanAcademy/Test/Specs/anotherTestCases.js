const FindElement_POM = require("../PageObjects/FindElement_POM");
const FindElements_POM = require("../PageObjects/FindElements_POM");
const StartActivity_POM = require("../PageObjects/StartActivity_POM");
const Wait_POM = require("../PageObjects/Wait_POM");


describe('Testing the Khan Academy Application', () => {
it('Signup', async() => {
    // await Wait_POM.waitFor(9000);
    // await StartActivity_POM.activity("org.khanacademy.android",".ui.library.MainActivity");
    // await Wait_POM.waitFor(9000);
    // (await $("//*[@elementId='00000000-0000-00be-ffff-ffff0000002e']")).touchAction('tap');
    // await Wait_POM.waitFor(9000);
//     (await FindElement_POM.xpath("welcomeCardSignInButton","resource-id")).click();
// //    (await $("//*[@elementId='00000000-0000-00be-ffff-ffff0000002e']")).touchAction('tap');
//     await Wait_POM.waitFor(9000);
//     (await FindElement_POM.xpath("welcomeCardSignInButton","resource-id")).click();
//      await Wait_POM.waitFor(4000);
//     (await FindElement_POM.xpath("Continue with Google","text")).click();
//     await Wait_POM.waitFor(4000);
//     (await FindElement_POM.xpath("Mahi Thakur","text")).click();
//     await Wait_POM.waitFor(4000);
//     const join=(await FindElement_POM.xpath("Join class","text"));
//     await expect(join).toBeExisting();
// await Wait_POM.waitFor(8000);
await  $('//*[@resource-id="whatsNewScreenDismissButton"]').touchAction('tap');
 //   (await FindElement_POM.find("resource-id","whatsNewScreenDismissButton")).touchAction('tap');
    // await Wait_POM.waitFor(8000);
(await FindElement_POM.find("accessibility-id","Search")).click();
// await  Wait_POM.waitFor(9000);
(await FindElement_POM.find("xpath","Computing")).touchAction('tap');
const join=(await FindElement_POM.find("xpath","Computer science"));
console.log(join);
    // await expect(join).toBeExisting();
 });
});