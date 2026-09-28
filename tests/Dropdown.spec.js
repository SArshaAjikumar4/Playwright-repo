import{test} from '@playwright/test'


test('dropdown in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const dropdown=page.locator('#dropdowm-menu-1')
    await dropdown.selectOption({index:1})//dropdown selection  by using index
    await dropdown.selectOption({value:'python'})// dropdown selection using value
    await dropdown.selectOption({label:'SQL'})// dropdown selection using text
})

test('checkbox in playwright',async({page})=>{
        await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
     const checkBox=page.locator("//input[@value='option-2']")
     await checkBox.check()// or click.....change click use agin click or uncheck


})

test.only('Radio button in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const radioButton=page.locator("//input[@value='purple']")
    await radioButton.click()

    
})
