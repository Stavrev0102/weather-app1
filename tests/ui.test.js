/* eslint-disable no-unused-vars */
const { test, expect } = require('@playwright/test');

const baseUrl = 'http://localhost:3000';
const searchBarSelector = '.css-13cymwt-control'; // Assuming this is the correct selector for the search bar
const dropDownButtonSelector = '.css-1xc3v61-indicatorContainer'
const dropDownListSelector = '.css-1nmdiq5-menu'

test('verify if search bar is visible', async({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector(searchBarSelector);
    const searchBar = await page.$(searchBarSelector);
    const isSearchBarVisible = await searchBar.isVisible();
    expect(isSearchBarVisible).toBe(true);
});


test('verify if dropDownButton is available', async({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector(searchBarSelector);
    const dropDownButton = await page.$(dropDownButtonSelector);
    const isDropDownButtonAvailable = await dropDownButton.isVisible();
    expect(isDropDownButtonAvailable).toBe(true);
});
test('verify if dropDownList is available', async({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector(searchBarSelector);
    await page.click(dropDownButtonSelector);
    const dropDownList = await page.$(dropDownListSelector)
    const isListAvailable = await dropDownList.isVisible()
    expect(isListAvailable).toBe(true);
});
// test('Search City London', async ({ page }) => {
//     await page.goto(baseUrl);
//     await page.waitForSelector('.css-qbdosj-Input > input');
//     await page.fill('.css-qbdosj-Input > input', 'London');
//     await page.press('.css-qbdosj-Input > input', 'Enter'); // Press Enter key on the input field
//     const weatherElement = await page.waitForSelector('.weather', { timeout: 5000 }); // Wait for weather information to appear
//     const isWeatherInfoAvailable = await weatherElement.isVisible();
//     expect(isWeatherInfoAvailable).toBe(true);
// });
