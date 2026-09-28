//static file
import{test,expect} from '@playwright/test'   // for using assertion expct keyword use cheyanam




test('visual testing',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('SouceDemo.png',{
        threshold:0.2 

    })

})

test.only('visual Testing in Dymanamic webpages',async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    await page.waitForLoadState('networkidle')
    await page.locator('.carousel').evaluate((element)=>{
        element.style.display='none'
    })
    await expect(page).toHaveScreenshot('SouceDemo.png',{
        threshold:0.2 
    })
})