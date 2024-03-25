const { test , expect } = require('@playwright/test');

const baseUrl = 'http://localhost:3000';
const navBarElement = 'nav.navbar';

test('verify if all-links page is visible', async({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector(navBarElement);
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true)
});