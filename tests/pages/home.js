exports.homePage = class homePage {
    constructor(page) {
        this.page = page;
        this.turfManage = "//span[normalize-space()='Turf Management']";
        this.manageTurf = "//span[normalize-space()='Manage Turfs']";
    }

    async turfs(turfName) {
        // १. पेजवर नेव्हिगेट करणे
        await this.page.locator(this.turfManage).click();
        await this.page.locator(this.manageTurf).click();

        // २. थेट ती Turf असलेली रो शोधणे (लूपची गरज नाही!)
        const targetRow = this.page.locator("tbody tr").filter({ hasText: turfName });

        // ३. त्या विशिष्ट रो मधील आयकॉन किंवा स्विचवर क्लिक करणे
        // (तुमच्या गरजेनुसार येथे 'svg.lucide-eye' किंवा 'span.rt-SwitchThumb' वापरा)
        await targetRow.locator("svg.lucide-eye").click();
        
        console.log(`>>> Successfully clicked for Turf: ${turfName} <<<`);
    }
}