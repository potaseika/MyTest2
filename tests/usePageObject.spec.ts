import {expect, test} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

test.beforeEach(async ({page}) =>{
    await page.goto ('http://localhost:4200')
})

test('navigate to form page', async ({page}) =>{
    const pm = new PageManager(page)
    await pm.navigateTo().formLayuotsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test ('parametrized methods', async ({page}) =>{
    const pm = new PageManager(page)

    await pm.navigateTo().formLayuotsPage()
    await pm.onFromLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'asd123', 'Option 2')
    await pm.onFromLayoutsPage().submitInlineFormWithNameEmailAndCheckbox('John Smith', 'John@test.com', false)
    await pm.navigateTo().datepickerPage()
    await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(5)
    await pm.onDatePickerPage().selectDatepickerWithRangerFromToday(6, 15)
})