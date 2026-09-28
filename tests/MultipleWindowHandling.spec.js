import{test,expect} from '@playwright/test'


test('multiple window handling',async({page,context})=>{
    await page.goto('https://demo.guru99.com/popup.php')
    
    const newWindow=context.waitForEvent('page') // waiting for new page or window

    const clickHere=page.locator("//a[text()='Click Here']")
    await clickHere.click()

    

    const popup=await newWindow
    popup.waitForLoadState()


    const email=popup.locator("//input[@name='emailid']")
    await email.fill('arsha@gmail.com')
    await popup.locator("//input[@name='btnLogin']").click()
})