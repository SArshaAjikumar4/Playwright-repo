import{test} from '@playwright/test'

test('Events in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    const othersMenu=page.locator('#others')
    await othersMenu.hover()
})