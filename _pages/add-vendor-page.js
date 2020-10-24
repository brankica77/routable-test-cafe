import { Selector, t } from 'testcafe';

class AddVendorPage {
    constructor() {
        //Add Vendor Form - Add Vendor Name
        this.select_company_name = Selector('#createPartnershipForm div').withText('Select vendor or enter new company name').nth(9)
        this.input_company_name = Selector('#react-select-asyncSelect-searchCo--input')
        this.add_new_contact = Selector('[class^="btn btn--sm ghost ghost--primary-link btn--max-con"]').nth(1).find('span').withText('Contact')
        //Add contact Form
        this.input_contact_email = Selector('#createContact [name="email"]')
        this.input_contact_name = Selector('#createContact [name="firstName"]')
        this.input_contact_last_name = Selector('#createContact [name="lastName"]')
        this.button_add_contact = Selector('#existingItem_finalizePayment_confirm_btn span').withText('Add contact')
        //Add Vendor Form - create vendor
        this.button_create_vendor = Selector('.btn.btn--m.btn--inherit.main.primary span').withText('Create vendor')
        this.toggle_send_invite = Selector('#createPartnershipForm .react-toggle-thumb')
        //Add Vendor Form - add payment method
        this.list_payment_methods = Selector('#createPartnershipForm [name="funding.paymentDeliveryMethod"]')
        this.ach_payment_method = Selector('#createPartnershipForm option').withText('ACH (Direct deposit)')
        this.add_bank_account = Selector('.btn.remove-margin.right.btn--sm.ghost span').withText('Add bank account')
        //Add Vendor Form - Add bank Account
        this.input_routing_number = Selector('#addPartnerFundingAccount [name="form.bankAccount.bankRoutingNumber"]')
        this.error_routing_number = Selector('#addPartnerFundingAccount div').withText('Routing number').nth(2)
        this.input_account_number = Selector('#addPartnerFundingAccount [name="form.bankAccount.bankAccountNumber"]')
        this.button_add_bank_account = Selector('[class^="btn btn--inherit float-right margin btn--m main pr"]').nth(1).find('span').withText('Add bank account')
        //Add vendor Form - Finish
        this.button_add_vendor = Selector('[class^="btn btn--inherit float-right margin btn--m main pr"] span').withText('Add vendor')

    }
    async selectCompanyName(){
        await t.click(this.select_company_name())
    }
    async enterCompanyName(companyName){
        await t.typeText(this.input_company_name, companyName)
    }
    async accessNewContactForm(){
        await t.click(this.add_new_contact())
    }
    async selectContactEmail (){
        await t.click(this.input_contact_email())
    }

    async enterContactEmail(contactEmail){
        await t.typeText(this.input_contact_email, contactEmail)
    }
    async enterContactName (contactName){
        await t.typeText(this.input_contact_name, contactName)
    }
    async enterContactLastName (contactLastName){
        await t.typeText(this.input_contact_last_name, contactLastName)
    }
    async addContact (){
        await t.click(this.button_add_contact())
    }
    async createVendor (){
        await t.click(this.button_create_vendor())
    }
    async turnOffSendingInvite (){
        await t.click(this.toggle_send_invite())
    }
    async selectPaymentMedthod (){
        await t.click(this.list_payment_methods())
    }
    async selectACHpaymentMethod (){
        await t.click(this.ach_payment_method())
    }
    async accessBankAccountForm (){
        await t.click(this.add_bank_account())
    }
    async clearRoutingNumber (){
        await t
            .click(this.input_routing_number())
            .pressKey('ctrl+a delete');
    }
    async selectAccountNumberFiled (){
        await t.click(this.input_account_number())
    }
    async enterRoutingNumber (routingNumber){
        await t.typeText(this.input_routing_number, routingNumber )
    }
    async enterAccountNumber (accountNumber){
        await t.typeText(this.input_account_number, accountNumber)
    }
    async addBankAAccount (){
        await t.click(this.button_add_bank_account())
    }
    async addVendor (){
        await t.click(this.button_add_vendor())
    }
}

export default AddVendorPage