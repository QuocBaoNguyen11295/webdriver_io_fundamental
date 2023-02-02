describe('My Login application', () => {
    it('Example page', async () => {
        let url = 'https://example.com/'
        await browser.url(url)
        await browser.pause(5000)
        /* Way 1 to get the title page */
        let pageTitle = await browser.getTitle()
        let pageURL = await browser.getUrl()
        await expect(pageTitle).toContain("Example Domain")
        await expect(pageURL).toContain('example.com')
        /* Way 2 to get the title page */
        expect(browser).toHaveTitleContaining("Example Domain")
        expect(browser).toHaveUrlContaining('example.com')
        //page element assertion
        let header = await $('h1')
        await expect(header).toExist()
        await expect(header).toBeDisplayed()
        await expect(header).toHaveTextContaining('Example Domain')
    })

    it('Form and login',async ()=>{
        await browser.url('https://www.saucedemo.com/')
        let username = await $('#user-name')
        let password = await $('#password')
        let buttonLogin = await $('#login-button')
        let inventory_container = await $('#inventory_container')
        await username.setValue('standard_user')
        await password.setValue('secret_sauce')
        await buttonLogin.click()
        await inventory_container.waitForDisplayed()
    })

    it('Login unsuccessfully',async()=>{
        await browser.url('https://www.saucedemo.com/')
        let username = await $('#user-name')
        let password = await $('#password')
        let buttonLogin = await $('#login-button')
        await username.setValue('sadas')
        await password.setValue('dsads')
        await buttonLogin.click()
        let error_message = await $('.error-message-container > h3')
        await error_message.waitForDisplayed()
        await expect(error_message).toBeDisplayed()
    })

    it('Select option and select box',async()=>{
        await browser.url('https://devexpress.github.io/testcafe/example/')
        let selectbox = await $('#preferred-interface')
        await selectbox.selectByVisibleText('JavaScript API')
        let option = await $('option=JavaScript API')
        await expect(option).toBeSelected()

        let radio_windows = await $('[value="Windows"]')
        await radio_windows.click()
        await expect(radio_windows).toBeSelected()
    })

    it('Take screenshot',async()=>{
        await browser.url('https://example.com/')
        await browser.saveScreenshot('my_screenshot.png')
    })

})

