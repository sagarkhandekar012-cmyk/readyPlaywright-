exports.homePage = class homePage {
    constructor(page) {
        this.page = page;
        this.turfManage = "//span[normalize-space()='Turf Management']";
        this.manageTurf = "//span[normalize-space()='Manage Turfs']";
        this.tableRows = "tbody tr";
    }

    async turfs(turfName) {
        await this.page.locator(this.turfManage).click();
        await this.page.locator(this.manageTurf).click();

        const rows = this.page.locator(this.tableRows);
        // Wait for real data rows to appear (ignores the "Loading data…" row)
        await rows.filter({ hasNotText: 'Loading' }).first().waitFor({ state: 'visible' });

        const count = await rows.count();
        let found = false;

        console.log(`--- Total Turfs in Table: ${count} ---`);
        for (let i = 0; i < count; i++) {
            const row = rows.nth(i);

            // Column 2 (index 1) is "Turf Name"
            const currentTurfName = (await row.locator("td").nth(1).textContent())?.trim();
            console.log(`Turf ${i + 1}: ${currentTurfName}`);

            // Match against the turfName argument
            if (currentTurfName === turfName.trim() || (await row.textContent())?.includes(turfName)) {
                await row.locator("svg.lucide-eye").click();
                console.log(`>>> Clicked eye icon (lucide lucide-eye) for: ${currentTurfName} <<<`);
                found = true;
                break;
            }
        }

        if (!found) {
            throw new Error(`Turf with name "${turfName}" was not found in the table.`);
        }
    }
}
//(//td[@class='rt-TableCell'])