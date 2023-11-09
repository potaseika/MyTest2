import { test, expect } from '@playwright/test';

test.beforeEach('Main page', async ({page}) =>{
    await page.goto ('https://test2-metafora-game.web.app/#/')
    await page.getByText('Got it').click()
})

test('start new game', async ({page}) =>{
    await page.getByText('New game').click()
    await page.locator('.PlayerNameFormScreen--aOvWN textarea').fill('Yehor Potasieiev test')
    await page.getByText('Next').click()
    await page.getByText('Create').click()
})

test ('Click to open nav bar', async ({page}) =>{
    const openedNavbar = page.locator ('.ArrowToggler--Co3Av')
    await openedNavbar.click()
})

test ('Click on all buttons from nav bar', async ({page}) =>{
    await page.locator('[data-role="walletButton"]').click()
    await page.locator ('[data-role="backButton"]').click()
    await page.locator ('.NavigationDesktop__Menu--oFF0F [href="#/community"]').click()
    const communityPage = page.locator ('.Tabs__Title--qYSbH.Tabs__Title_State_Active--GXaW7')
    await expect(communityPage).toHaveText('Leaderboard')
    await page.locator ('.NavigationDesktop__Menu--oFF0F [href="#/art"]').click()
    await page.locator ('.NavigationDesktop__Menu--oFF0F [href="#/collections"]').click()
    await page.locator ('[data-role="backButton"]').click()
    await page.locator('[href="#/"]').click()
})

test ('Rules main menu', async ({page}) =>{
    await page.locator ('.InitialScreen__GameRulesLink--KVux4').click()

    const slideZone = page.locator('.HowToPlayScreen__SwiperSlide_State_Active--QnG30')

    const box = await slideZone.boundingBox()
    const x = box!.x + box!.width / 2
    const y = box!.y + box!.height / 2
    await page.mouse.move (300, 300)
    await page.mouse.down()
    await page.mouse.move(-1000, 0)
    await page.mouse.up ()
})