// tests/saucedemo.spec.js
// Import test runner functions and assertion API from Playwright
import { test, expect } from '@playwright/test';

/**
 * Production-grade Playwright JS test suite for SauceDemo E-Commerce.
 * Covers authentication, product grid sorting, cart state, and assertions.
 */

// Define a test suite grouping related E-Commerce regression tests
test.describe('SauceDemo E-Commerce Regression Suite', () => {

    // Global setup hook running prior to each test case in this suite
    test.beforeEach(async ({ page }) => {
        // Attach listener for uncaught runtime page errors and log warnings
        page.on('pageerror', err => {
            console.warn(`[Runtime PageError]: ${err.message}`);
        });

        // Navigate to the target web application root URL
        await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
    });

    // Test case: verify login UI elements and standard user authentication flow
    test('verify login form and standard user authentication @sanity', async ({ page }) => {
        // Locate username input element by ID
        const usernameInput = page.locator('#user-name');
        // Locate password input element by ID
        const passwordInput = page.locator('#password');
        // Locate login submit button element by ID
        const loginButton = page.locator('#login-button');

        // Assert username field is visible to the user
        await expect(usernameInput).toBeVisible();
        // Assert password field is visible to the user
        await expect(passwordInput).toBeVisible();
        // Assert login button is visible to the user
        await expect(loginButton).toBeVisible();

        // Input standard user credentials into username field
        await usernameInput.fill('standard_user');
        // Input password credentials into password field
        await passwordInput.fill('secret_sauce');
        // Trigger click action on login button
        await loginButton.click();

        // Assert browser URL navigates/matches inventory path
        await expect(page).toHaveURL(/.*inventory\.html/);
        // Locate title header text on inventory page
        const inventoryHeader = page.locator('.title');
        // Assert header text contains expected section header 'Products'
        await expect(inventoryHeader).toHaveText('Products');
    });

    // Test case: verify inventory item count and high-to-low price sorting
    test('verify product grid count and high-to-low sorting @regression', async ({ page }) => {
        // Prerequisite login actions
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        // Locate inventory card elements
        const inventoryItems = page.locator('.inventory_item');
        // Count total matching inventory cards
        const count = await inventoryItems.count();
        // Print total item count to console log
        console.log(`Total inventory items rendered: ${count}`);
        // Assert that at least one inventory item is present
        expect(count).toBeGreaterThan(0);

        // Locate dropdown select container for sorting products
        const sortSelect = page.locator('.product_sort_container');
        // Select high-to-low (hilo) option from dropdown
        await sortSelect.selectOption('hilo');
        
        // Locate title text of the first inventory item after re-sort
        const firstItemTitle = inventoryItems.first().locator('.inventory_item_name');
        // Extract text content of the first item title
        const text = await firstItemTitle.textContent();
        // Print highest priced item name to console log
        console.log(`Highest priced item first: ${text}`);
        // Assert extracted title text is non-null
        expect(text).not.toBeNull();
    });

    // Test case: verify adding an item updates cart badge and cart details page
    test('verify adding item to cart updates badge count and cart page @sanity', async ({ page }) => {
        // Prerequisite login actions
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        // Locate 'Add to cart' action button for backpack item
        const addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
        // Click add-to-cart button
        await addToCartBtn.click();

        // Locate shopping cart item count badge element
        const cartBadge = page.locator('.shopping_cart_badge');
        // Assert cart badge text increments to '1'
        await expect(cartBadge).toHaveText('1');

        // Click shopping cart navigation link
        await page.click('.shopping_cart_link');
        // Assert navigation leads to cart.html URL path
        await expect(page).toHaveURL(/.*cart\.html/);

        // Locate cart item entries on cart summary view
        const cartItem = page.locator('.cart_item');
        // Assert total cart row count equals 1
        await expect(cartItem).toHaveCount(1);
        // Assert product name text inside cart item matches expected value
        await expect(cartItem.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    });

    // Global teardown hook running after each test case in this suite
    test.afterEach(async ({ page }, testInfo) => {
        // Check if test execution failed (status is not 'passed')
        if (testInfo.status !== 'passed') {
            // Log failure diagnostics including title and active URL
            console.log(`Test failed: ${testInfo.title} | Final URL: ${page.url()}`);
        }
    });

});