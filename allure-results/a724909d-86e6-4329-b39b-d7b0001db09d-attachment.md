# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> valid username and invalid password
- Location: tests\LoginPage.spec.js:31:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//h3[@data-test=\'error\']')
Expected substring: "Epic sadface: Username and password do not match any user in this service"
Received string:    "Epic sadface: Username is required"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('//h3[@data-test=\'error\']')
    14 × locator resolved to <h3 data-test="error">…</h3>
       - unexpected value "Epic sadface: Username is required"

```

```yaml
- 'heading "Epic sadface: Username is required" [level=3]':
  - button
  - text: "Epic sadface: Username is required"
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
  33 |     await page.waitForLoadState('networkidle')
  34 |    // const username=page.locator('#user-name')
  35 |    // await username.fill('standard_user')
  36 | 
  37 |     //const password=page.locator('#password')
  38 |      //   await password.fill('arsha')
  39 |      const validusername=data.validusername
  40 |   const invalidpassword=data.invalidpassword
  41 |     const login=page.locator('#login-button')
  42 |     await login.click()
> 43 |       await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
     |                                                              ^ Error: expect(locator).toContainText(expected) failed
  44 | })
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | test('invalid username and valid password',async({page})=>{
  51 |   await page.goto('https://www.saucedemo.com/')
  52 |     await page.waitForLoadState('networkidle')
  53 |    // const username=page.locator('#user-name')
  54 |    // await username.fill('arsha')
  55 | 
  56 |   //  const password=page.locator('#password')
  57 |       //  await password.fill('secret_sauce')
  58 |       const invalidusername=data.invalidusername
  59 |   const validpassword=data.validpassword
  60 |     const login=page.locator('#login-button')
  61 |     await login.click()
  62 |     await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  63 | })
  64 | 
  65 | 
  66 | 
  67 | 
  68 | 
  69 | test('invalid username and invalid password',async({page})=>{
  70 |   await page.goto('https://www.saucedemo.com/')
  71 |     await page.waitForLoadState('networkidle')
  72 |     //const username=page.locator('#user-name')
  73 |     //await username.fill('arsha')
  74 | 
  75 |    // const password=page.locator('#password')
  76 |       //  await password.fill('arsha')
  77 | 
  78 |             const invalidusername=data.invalidusername
  79 |               const invalidpassword=data.invalidpassword
  80 | 
  81 | 
  82 |       
  83 |     const login=page.locator('#login-button')
  84 |     await login.click()
  85 |      await expect(page.locator("//h3[@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')
  86 | 
  87 | })
  88 | 
  89 | 
  90 | 
  91 | 
  92 | 
```