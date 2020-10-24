import { Selector, t } from 'testcafe';

class CompaniesPage{
    constructor() {
        this.add_vendor_button = Selector('[class^="action-nav--action hover-primary remove-hover-unde"] span').withText('Add vendor')

        //Search
        this.field_search = Selector('#dashboard-search-field')
        this.list_item_first_in_search_result = Selector('[class^="align-cell justify-content--space-between align-it"] .primary.bold.font-regular.truncate')
    }
    async accessAddVendorForm(){
        await t.click(this.add_vendor_button())
    }
    async enterSearchText (searchText){
        await t.typeText(this.field_search, searchText)
    }
    async selectSearchResultCompany(){
        await t.click(this.list_item_first_in_search_result())
    }
}

export default CompaniesPage