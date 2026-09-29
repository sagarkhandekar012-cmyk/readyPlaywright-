exports.homepage =
class homePage{
constructor(page){
    this.page = page;
    this.turfManage="//span[normalize-space()='Turf Management']";
    this.manageTurf="//span[normalize-space()='Manage Turfs']";
    this.listOfData=".rt-TableRoot.rt-r-size-2.rt-variant-ghost";
    this.deleteTurf-"(//*[name()='svg'][@class='lucide lucide-trash'])[1]";
}
async navigetPage(){
    await this.page.locator(this.turfManage).click();
    await this.page.locator(this.manageTurf).click();
}

async turfs(turfName)
    {
const listOfData = await this.page.$$(this.listOfData);
for(const turf of listOfData)
    {
if(turfName === await turf.textContent())
{
    await this.page.locator(this.deleteTurf).click();
    break;
}
    }
    }

}