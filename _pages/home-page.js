import { Selector, t } from 'testcafe';

class HomePage{
    constructor(){

        this.page_title= Selector('#dashboard span').withText('Branka Bar and Grill')
        this.page_companies= Selector('#accordion__heading-companies span').withText('Companies')
    }
    async accessCompanies(){
        await t.click(this.page_companies)
    }

}

export default HomePage

