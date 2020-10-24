import { Selector, t } from 'testcafe';

class CompanyProfilePage{
    constructor() {
        //About Tab
        this.text_contact_name = Selector('.flex-row.flex-parent-truncate').nth(1).nth(1).nth(1).find('span')
        this.text_contact_email = Selector('#dashboard [class^="base-text margin-left--sm-alt truncate font-size--"]')
        //Vendor info Tab
        this.vendor_tab = Selector('#dashboard a').withText('Vendor info')
        this.bank_account_name = Selector('#dashboard div').withText('Silicon Valley Bank ***6789').nth(13)
        //View Account Details
        //this.menu_icon_view_account_details = Selector('#dashboard div').nth(43).find('div div').nth(4).find('div').nth(6).find('div').nth(2).find('div div div').nth(4).find('div button div div').nth(5).find('div div').nth(4).find('svg path')
        this.menu_icon_view_account_details = Selector('[data-icon="more"]').nth(1)
        this.menu_item_view_account_details = Selector('li').withText('View account details')
        this.details_bank_name = Selector('.block-list-item span')
        this.details_routing_number = Selector('.block-list-item').nth(1).nth(1).nth(1).find('span')
        this.details_account_number = Selector('.block-list-item').nth(2).nth(2).nth(2).find('span')
    }
    async selectVendorTab(){
        await t.click(this.vendor_tab())
    }
    async accessMenuWithAccountDetails (){
        await t.click(this.menu_icon_view_account_details)
    }
    async selectToViewAccountDetails (){
        await t.click(this.menu_item_view_account_details())
    }
}

export default CompanyProfilePage