import{test} from '@playwright/test' // test runner must import
//Browser launch
//creting browser instense in traditional method
test('Browser Lauch in Playwright',async({browser})=>{
//context creating
const context=await browser.newContext()
//page creating
const page=await context.newPage()
//for url
await page.goto('https://selenium.qabible.in/')
})






//context fixture:  for creating incongnito window
//page fixture :: for single page handling
//request fixture: to handle api fixture
//if we need to want to run a slective test from mutiple test
test.only('page playwright test',async({page})=>{
    await page.goto('https://selenium.qabible.in/')


})