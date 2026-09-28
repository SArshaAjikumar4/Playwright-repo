# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> valid username and invalid password
- Location: tests\LoginPage.spec.js:31:5

# Error details

```
Error: page.waitForLoadState: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { LoginPage} from '../Pages/LoginPage'
  3  | import data from '../Utils/LoginCreditienial.json'
  4  | test('Valid Credential login',async({page})=>{
  5  |    // await page.goto('https://www.saucedemo.com/')
  6  |     await page.waitForLoadState('networkidle')
  7  |     //const username=page.locator('#user-name')
  8  |    // await username.fill('standard_user')
  9  |     
  10 | 
  11 |    // const password=page.locator('#password')
  12 |   //  await password.fill('secret_sauce')
  13 | 
  14 |      // const login=page.locator('#login-button')
  15 |    // await login.click()
  16 |   //  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  17 |   const validusername=data.validusername
  18 |   const validpassword=data.validpassword
  19 |  const loginPage=new LoginPage(page)
  20 |  await loginPage.navigateToApplication()
  21 |  
  22 | 
  23 |   await loginPage.applicationLogin(validusername,validpassword)
  24 |   await loginPage.verifyInventoryPage()
  25 | })
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 | test('valid username and invalid password',async({page})=>{
  32 |   await page.goto('https://www.saucedemo.com/')
> 33 |     await page.waitForLoadState('networkidle')
     |                ^ Error: page.waitForLoadState: Target page, context or browser has been closed
  34 |    // const username=page.locator('#user-name')
  35 |    // await username.fill('standard_user')
  36 | 
  37 |     //const password=page.locator('#password')
  38 |      //   await password.fill('arsha')
  39 |      const validusername=data.validusername
  40 |   const invalidpassword=data.invalidpassword
  41 |     const login=page.locator('#login-button')
  42 |     await login.click()
  43 |      await loginPage.navigateToApplication()
  44 |  
  45 | 
  46 |   await loginPage.applicationLogin(validusername,invalidpassword)
  47 |   await loginPage.verifyInventoryPage()
  48 |      // await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  49 | })
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 | test('invalid username and valid password',async({page})=>{
  56 |   await page.goto('https://www.saucedemo.com/')
  57 |     await page.waitForLoadState('networkidle')
  58 |    // const username=page.locator('#user-name')
  59 |    // await username.fill('arsha')
  60 | 
  61 |   //  const password=page.locator('#password')
  62 |       //  await password.fill('secret_sauce')
  63 |       const invalidusername=data.invalidusername
  64 |   const validpassword=data.validpassword
  65 |     const login=page.locator('#login-button')
  66 |     await login.click()
  67 |    // await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  68 | })
  69 | 
  70 | 
  71 | 
  72 | 
  73 | 
  74 | test('invalid username and invalid password',async({page})=>{
  75 |   await page.goto('https://www.saucedemo.com/')
  76 |     await page.waitForLoadState('networkidle')
  77 |     //const username=page.locator('#user-name')
  78 |     //await username.fill('arsha')
  79 | 
  80 |    // const password=page.locator('#password')
  81 |       //  await password.fill('arsha')
  82 | 
  83 |             const invalidusername=data.invalidusername
  84 |               const invalidpassword=data.invalidpassword
  85 | 
  86 | 
  87 |       
  88 |     const login=page.locator('#login-button')
  89 |     await login.click()
  90 |    //  await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  91 | 
  92 | })
  93 | 
  94 | 
  95 | 
  96 | 
  97 | 
```