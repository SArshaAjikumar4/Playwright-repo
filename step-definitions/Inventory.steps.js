import { Given,When,Then,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout} from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import assert from "assert";

setDefaultTimeout(30000)
let browser
let context 
let page

BeforeAll(async function(){
    browser=await chromium.launch({headless:false,slowMo:300})
})

AfterAll(async function(){
    if(browser){
        await browser.close()
    }
})

Before(async function(){
    context=await browser.newContext()
    page=await context.newPage()
})

After(async function(scenario)
{
 try{
    if(scenario.result.status===Status.FAILED){
        const screenshot=await page.screenshot()
        this.attach(screenshot,'image/png')
    }
   
 }
  catch(err){
        console.log('After hook error:',err.message)
    }
    finally{
        if(context){
            await context.close()
        }
    }
})

BeforeStep(async function() {
    console.log('Executing new step')
    
})

AfterStep(async function(){
    console.log('Step Execution completed')
})

