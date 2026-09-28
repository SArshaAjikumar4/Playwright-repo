import{test} from '@playwright/test'

test('Frames ',async({page})=>{
    await page.goto('https://demoqa.com/frames')
    const frame=page.frameLocator('#frame1')
    console.log(await frame.locator('#sampleHeading').textContent())
})