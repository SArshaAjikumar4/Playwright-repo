# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Valid Credential login
- Location: tests\LoginPage.spec.js:4:6

# Error details

```
ReferenceError: loginPage is not defined
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { LoginPage} from '../Pages/LoginPage'
  3  | 
  4  | test.only
  5  | ('Valid Credential login',async({page})=>{
  6  |    // await page.goto('https://www.saucedemo.com/')
  7  |     await page.waitForLoadState('networkidle')
  8  |     //const username=page.locator('#user-name')
  9  |    // await username.fill('standard_user')
  10 |     
  11 | 
  12 |    // const password=page.locator('#password')
  13 |   //  await password.fill('secret_sauce')
  14 | 
  15 |      // const login=page.locator('#login-button')
  16 |    // await login.click()
  17 |   //  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  18 | 
  19 |  // const loginPage=new LoginPage(page)
> 20 |   await loginPage.navigateToApplication()
     |   ^ ReferenceError: loginPage is not defined
  21 |  
  22 | 
  23 |   await loginPage.applicationLogin()
  24 |   await loginPage.verifyInventoryPage()
  25 | })
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 | test('valid username and invalid password',async({page})=>{
  32 |   await page.goto('https://www.saucedemo.com/')
  33 |     await page.waitForLoadState('networkidle')
  34 |     const username=page.locator('#user-name')
  35 |     await username.fill('standard_user')
  36 | 
  37 |     const password=page.locator('#password')
  38 |         await password.fill('arsha')
  39 |     const login=page.locator('#login-button')
  40 |     await login.click()
  41 |       await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  42 | })
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | test('invalid username and valid password',async({page})=>{
  49 |   await page.goto('https://www.saucedemo.com/')
  50 |     await page.waitForLoadState('networkidle')
  51 |     const username=page.locator('#user-name')
  52 |     await username.fill('arsha')
  53 | 
  54 |     const password=page.locator('#password')
  55 |         await password.fill('secret_sauce')
  56 |     const login=page.locator('#login-button')
  57 |     await login.click()
  58 |     await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  59 | })
  60 | 
  61 | 
  62 | 
  63 | 
  64 | 
  65 | test('invalid username and invalid password',async({page})=>{
  66 |   await page.goto('https://www.saucedemo.com/')
  67 |     await page.waitForLoadState('networkidle')
  68 |     const username=page.locator('#user-name')
  69 |     await username.fill('arsha')
  70 | 
  71 |     const password=page.locator('#password')
  72 |         await password.fill('arsha')
  73 |     const login=page.locator('#login-button')
  74 |     await login.click()
  75 |      await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  76 | 
  77 | })
  78 | 
  79 | 
  80 | 
  81 | 
  82 | 
```