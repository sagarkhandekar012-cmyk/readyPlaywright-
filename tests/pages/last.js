exports.last = class last {
    constructor(page) {
        this.page = page;
        this.noOfFiled = "h1, h2, h3"; 
    }

    async newPage(nameOF) {
        const elements = await this.page.locator(this.noOfFiled).all();

        for (const el of elements) {
            const text = await el.textContent();

            if (text.trim() === nameOF) {
                // Yithe fkt sapadlela shabda print hoil
                console.log("Sapadlela shabd: " + text.trim());
                return true;
            }
        }
        
        return false;
    }
}