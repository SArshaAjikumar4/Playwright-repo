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
  5  | ('Valid Credential login',async({page},testInfo)=>{
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
  21 |   await testInfo.attach('Screenshot',{
  22 |     body:await page.screenshot(),
  23 |     contentType:'image/png'
  24 |   })
  25 |   await loginPage.applicationLogin()
  26 |   await loginPage.verifyInventoryPage()
  27 | })
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | test('valid username and invalid password',async({page})=>{
  34 |   await page.goto('https://www.saucedemo.com/')
  35 |     await page.waitForLoadState('networkidle')
  36 |     const username=page.locator('#user-name')
  37 |     await username.fill('standard_user')
  38 | 
  39 |     const password=page.locator('#password')
  40 |         await password.fill('arsha')
  41 |     const login=page.locator('#login-button')
  42 |     await login.click()
  43 |       await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  44 | })
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | test('invalid username and valid password',async({page})=>{
  51 |   await page.goto('https://www.saucedemo.com/')
  52 |     await page.waitForLoadState('networkidle')
  53 |     const username=page.locator('#user-name')
  54 |     await username.fill('arsha')
  55 | 
  56 |     const password=page.locator('#password')
  57 |         await password.fill('secret_sauce')
  58 |     const login=page.locator('#login-button')
  59 |     await login.click()
  60 |     await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  61 | })
  62 | 
  63 | 
  64 | 
  65 | 
  66 | 
  67 | test('invalid username and invalid password',async({page})=>{
  68 |   await page.goto('https://www.saucedemo.com/')
  69 |     await page.waitForLoadState('networkidle')
  70 |     const username=page.locator('#user-name')
  71 |     await username.fill('arsha')
  72 | 
  73 |     const password=page.locator('#password')
  74 |         await password.fill('arsha')
  75 |     const login=page.locator('#login-button')
  76 |     await login.click()
  77 |      await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  78 | 
  79 | })
  80 | 
  81 | 
  82 | 
  83 | 
  84 | 
```