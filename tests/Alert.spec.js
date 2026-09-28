import{test,expect} from '@playwright/test'

test('alert in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('I am a Javascript alert box!') //assertion method..checking the same alert is coming or not
        await dialog.accept()
        const clickme=page.locator('.btn btn-success')
        await clickme.click()

    })
})