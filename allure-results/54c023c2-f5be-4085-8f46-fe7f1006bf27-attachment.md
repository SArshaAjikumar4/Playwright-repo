# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Valid Credential login
- Location: tests\LoginPage.spec.js:4:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'fill')
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { expect } from "@playwright/test"
  2  | export class LoginPage{
  3  |     //create constructor
  4  |     constructor(page){
  5  |         this.page=page
  6  |         this.usernameField=page.locator('#user-name')
  7  |         this.passwordField=page.locator('#password')
  8  |         this.login=page.locator('#login-button')
  9  |     }
  10 | 
  11 |     //method create
  12 |     async navigateToApplication(){
  13 |           await this.page.goto('https://www.saucedemo.com/')
  14 | 
  15 |     }
  16 | 
  17 |     async applicationLogin(username,password){
> 18 |          await this.username.fill(username)
     |                              ^ TypeError: Cannot read properties of undefined (reading 'fill')
  19 |          await this.password.fill(password)
  20 |              await this.login.click()
  21 | 
  22 |     }
  23 | 
  24 |     async verifyInventoryPage()
  25 |     {
  26 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
  27 |     }
  28 | }
```