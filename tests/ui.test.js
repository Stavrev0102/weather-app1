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
test('Search City London', async({page}) => {
    await page.goto(baseUrl);
    await page.waitForSelector(searchBarSelector);
    await page.fill('#react-select-3-input', 'London');
    await page.click('.css-1nmdiq5-menu:nth-child(1)');
    const weatherElement = await page.$('weather');
    const isWeatherInfoAvailable = await weatherElement.isVisible()
    expect(isWeatherInfoAvailable).toBe(true)
})