import { Selector, t } from 'testcafe';

class ConfirmationPage{
    constructor() {
        this.text_vendor_name = Selector('.content--right .font-regular.semibold.primary')
        this.text_payment_method = Selector('#createPartnershipForm span').withText('ACH (Direct deposit)')
    }
}

export default ConfirmationPage