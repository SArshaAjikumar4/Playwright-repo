# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Valid Credential login
- Location: tests\LoginPage.spec.js:4:5

# Error details

```
ReferenceError: loginPage is not defined
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { LoginPage} from '../Pages/LoginPage'
  3  | 
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
  17 | 
  18 |  // const loginPage=new LoginPage(page)
  19 |  // await loginPage.navigateToApplication()
  20 |  
  21 | 
> 22 |   await loginPage.applicationLogin()
     |   ^ ReferenceError: loginPage is not defined
  23 |   await loginPage.verifyInventoryPage()
  24 | })
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 | test('valid username and invalid password',async({page})=>{
  31 |   await page.goto('https://www.saucedemo.com/')
  32 |     await page.waitForLoadState('networkidle')
  33 |     const username=page.locator('#user-name')
  34 |     await username.fill('standard_user')
  35 | 
  36 |     const password=page.locator('#password')
  37 |         await password.fill('arsha')
  38 |     const login=page.locator('#login-button')
  39 |     await login.click()
  40 |       await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  41 | })
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | test('invalid username and valid password',async({page})=>{
  48 |   await page.goto('https://www.saucedemo.com/')
  49 |     await page.waitForLoadState('networkidle')
  50 |     const username=page.locator('#user-name')
  51 |     await username.fill('arsha')
  52 | 
  53 |     const password=page.locator('#password')
  54 |         await password.fill('secret_sauce')
  55 |     const login=page.locator('#login-button')
  56 |     await login.click()
  57 |     await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  58 | })
  59 | 
  60 | 
  61 | 
  62 | 
  63 | 
  64 | test('invalid username and invalid password',async({page})=>{
  65 |   await page.goto('https://www.saucedemo.com/')
  66 |     await page.waitForLoadState('networkidle')
  67 |     const username=page.locator('#user-name')
  68 |     await username.fill('arsha')
  69 | 
  70 |     const password=page.locator('#password')
  71 |         await password.fill('arsha')
  72 |     const login=page.locator('#login-button')
  73 |     await login.click()
  74 |      await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  75 | 
  76 | })
  77 | 
  78 | 
  79 | 
  80 | 
  81 | 
```