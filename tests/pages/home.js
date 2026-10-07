exports.homePage = class homePage {
    constructor(page) {
        this.page = page;
        this.turfManage = "//span[normalize-space()='Turf Management']";
        this.manageTurf = "//span[normalize-space()='Manage Turfs']";
    }

    async turfs(turfName) {
        
        await this.page.locator(this.turfManage).click();
        await this.page.locator(this.manageTurf).click();

        
        const targetRow = this.page.locator("tbody tr").filter({ hasText: turfName });

        await targetRow.locator("svg.lucide-eye").click();
        
        console.log(`>>> Successfully clicked for Turf: ${turfName} <<<`);
    }
}