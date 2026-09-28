import{test} from '@playwright/test'




test('locators in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    const messageBox=page.locator('#single-input-field') //id locator
    const valueBox=page.locator('.form-control') // class locator
   const showmessage=page.locator("//button[@id='button-one']")//in xpath we can also use nth() for locating 
   await messageBox.fill("Deepak")
    await messageBox.fill("riya")// type doesnt remove previous text .it add only exitsing one
    await showmessage.click()
})

test.only('special locators',async({page})=>{
    await page.goto('https://groceryapp.uniqassosiates.com/admin/login')
    const username=page.locator("//input[@name='username']")
    const password=page.locator("//input[@name='password']")
    await username.fill('admin')
    await password.fill('admin')
    const submit=page.locator("//button[@type='submit']")
    await submit.click()
await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin')
   // await page.getByRole('button',{name:'Active'}).nth(0).click() // special locators  with role attribute that is button
   await page.getByText('Active').first().click()

})

