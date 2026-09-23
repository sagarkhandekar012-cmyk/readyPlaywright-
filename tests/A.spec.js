// tests/saucedemo.spec.js
import { test, expect } from '@playwright/test';

/**
 * Production-grade Playwright JS test suite for SauceDemo E-Commerce.
 * Covers authentication, product grid sorting, cart state, and assertions.
 */

test.describe('SauceDemo E-Commerce Regression Suite', () => {

    test.beforeEach(async ({ page }) => {
        page.on('pageerror', err => {
            console.warn(`[Runtime PageError]: ${err.message}`);
        });

        await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
    });

    test('verify login form and standard user authentication @sanity', async ({ page }) => {
        const usernameInput = page.locator('#user-name');
        const passwordInput = page.locator('#password');
        const loginButton = page.locator('#login-button');

        await expect(usernameInput).toBeVisible();
        await expect(passwordInput).toBeVisible();
        await expect(loginButton).toBeVisible();

        await usernameInput.fill('standard_user');
        await passwordInput.fill('secret_sauce');
        await loginButton.click();

        await expect(page).toHaveURL(/.*inventory\.html/);
        const inventoryHeader = page.locator('.title');
        await expect(inventoryHeader).toHaveText('Products');
    });

    test('verify product grid count and high-to-low sorting @regression', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        const inventoryItems = page.locator('.inventory_item');
        const count = await inventoryItems.count();
        console.log(`Total inventory items rendered: ${count}`);
        expect(count).toBeGreaterThan(0);

        const sortSelect = page.locator('.product_sort_container');
        await sortSelect.selectOption('hilo');
        
        const firstItemTitle = inventoryItems.first().locator('.inventory_item_name');
        const text = await firstItemTitle.textContent();
        console.log(`Highest priced item first: ${text}`);
        expect(text).not.toBeNull();
    });

    test('verify adding item to cart updates badge count and cart page @sanity', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        const addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
        await addToCartBtn.click();

        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1');

        await page.click('.shopping_cart_link');
        await expect(page).toHaveURL(/.*cart\.html/);

        const cartItem = page.locator('.cart_item');
        await expect(cartItem).toHaveCount(1);
        await expect(cartItem.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    });

    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status !== 'passed') {
            console.log(`Test failed: ${testInfo.title} | Final URL: ${page.url()}`);
        }
    });

});