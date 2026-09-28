import{test} from "@playwright/test"

test('Wait in playwright',async({page})=>{
        await page.goto('https://selenium.qabible.in/simple-form-demo.php')
        await page.waitForLoadState('networkidle')
        const messageBox=page.locator('#single-input-field')
        await messageBox.fill('Qa Tesing')
})
