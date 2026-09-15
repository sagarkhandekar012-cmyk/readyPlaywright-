import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('----- Test Suite Setup Started -----');
});

test.afterAll(async () => {
  console.log('----- Test Suite Teardown Completed -----');
});

test.beforeEach(async ({ page }) => {
  console.log('Running setup before test...');
  // Navigating to a reliable public page for daily contribution activity
  await page.goto('https://example.com');
});

test.afterEach(async () => {
  console.log('Cleaning up after test execution...');
});

test.describe('GitHub Streak Maintenance Group 1', () => {
  
  test('Verify page title and heading', async ({ page }) => {
    // Assertion 1: Check page title
    await expect(page).toHaveTitle('Example Domain');
    
    // Assertion 2: Check header visibility
    const header = page.locator('h1');
    await expect(header).toBeVisible();
    await expect(header).toHaveText('Example Domain');
  });

  test('Verify paragraph content and layout', async ({ page }) => {
    // Assertion 3: Verify body text content
    const paragraph = page.locator('p').first();
    await expect(paragraph).toContainText('This domain is for use in illustrative examples');
  });

});

test.describe('GitHub Streak Maintenance Group 2', () => {
  
  test('Verify link presence and attributes', async ({ page }) => {
    // Assertion 4: Check if the more information link exists and works
    const link = page.locator('a');
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://www.iana.org/domains/example');
  });

});