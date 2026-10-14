import {test} from '@playwright/test'
/*Browser = the entire browser application.
BrowserContext = a separate browser session that can contain multiple tabs.
A context also keeps session-specific state, such as cookies and permissions.
Page = one individual tab.
*/
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

/*Timeout types in Playwright
1. Test Timeout
2.Action Timeout
3.Navigation Timeout
4.Assertion Timeout
5.Global Timeout 

By default 30 sec test timeout and 5 sec assertion timeout will be there.*/

//Test Timeout
test.setTimeout(60000) //We can add like this on each test to overwrite the global config
// playwright.config.js
export default {
timeout: 30000, // per-test  - Global Timeout
expect: { timeout: 5000 }, // per-assertion - Time expect() retries beforefailing (web-first assertions)
use: {
actionTimeout: 10000,  //Action Timeout  - Time for a single action (click, fill, check) to become actionable { timeout: 5000 } per call, or config use:{ actionTimeout }
navigationTimeout: 30000,  //Navigation Timeout - Time for goto, waitForNavigation, etc. to become actionable { timeout: 15000 } per call, or config use:{ navigationTimeout }
},
globalTimeout: 3600000, //Global Timeout - Time for the entire test run (all tests combined)
};

//Window popup or tabs 
page.waitForEvent('eventname');
/*There is a list of supported events, and you must use the appropriate event name for the situation.
Event name	Meaning	API used with
'popup'	    A popup opened by the current page	        page.waitForEvent('popup')
'page'	    A new page opened in the browser context	context.waitForEvent('page')
'close'	    The current page closes	                    page.waitForEvent('close')
'download'	A download starts	                        page.waitForEvent('download')
'dialog'	A JavaScript dialog appears	                page.waitForEvent('dialog')
'request'	A network request is issued	                page.waitForEvent('request')
'response'	A network response is received	            page.waitForEvent('response')
*/
const [newPopup] = await Promise.all([
    page.waitForEvent('popup'),
    facebookButton.click()
]);

//or

const newPopupPromise = page.waitForEvent('page')
await facebookButton.click()
const newPopup1 = await newPopupPromise

/*In Playwright, each browser tab or window is represented by a Page object.
When an action opens a new tab, I use context.waitForEvent('page') to capture the newly opened tab. 
I start waiting for the event before clicking the button to avoid missing the event.
Once the new tab opens, I can interact with it using the new Page object, verify its URL, and validate its content.
If I need to handle multiple existing tabs, I can use context.pages() to get all the open pages.

When a button on the current page opens a new tab, both approaches work. I would generally use page.waitForEvent('popup')
because it explicitly describes the expected behavior. Use context.waitForEvent('page') when you need to listen at the browser-context level.*/
