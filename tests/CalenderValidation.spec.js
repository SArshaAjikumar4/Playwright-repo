import{test,expect} from '@playwright/test'


test('Calender validaton',async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php')
    const calender=page.locator('#single-input-field')
    await calender.click()

    const targetYear=1997
    await expect(page.locator('.datepicker-dropdown')).toBeVisible() // enusruing the visibility of a calender
   
    const switchButton=page.locator('.datepicker-switch:visible')// only to consider the element that are visible and to ignore the hidden elemnts we use these visible keyword
    await switchButton.click()
    await switchButton.click()

    let attempt=10

    while(attempt--)
    {
        const decadeText=await switchButton.innerText()
        const startYear=parseInt(decadeText.split('-')[0].trim()) //for selecting the start year and split used to remove that -

        if(targetYear>=startYear&&targetYear<=startYear+9)
        {
            break
        }
        await page.locator('.prev:visible').click()
        

    }
     await page.locator('.year:visible').filter({hasText:'1997'}).click()
     await page.locator('.month:visible').filter({hasText:'Sep'}).click()
     await page.locator('.day:not(.old):not(.new)',{hasText:/^2$/}).click() // in this we must mention hat not inculde the older days and the new month days
     const showDate=page.locator('#button-one')
     await showDate.click()

    


})