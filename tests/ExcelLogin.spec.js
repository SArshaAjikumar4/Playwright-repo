import{test,expect} from '@playwright/test'
import{getData} from '../Utils/ExcelRead'

test('login using ecxel  Credential login',async({page})=>{

    const usernamevalue=getData(2,1)
    const passwordvalue=getData(2,2)
     await page.goto('https://www.saucedemo.com/')
    
    await page.waitForLoadState('networkidle')


    const username=page.locator('#user-name')
    await username.fill(usernamevalue)
     const password=page.locator('#password')
       await password.fill(passwordvalue)

    const login=page.locator('#login-button')

    

    

        await login.click()

})
