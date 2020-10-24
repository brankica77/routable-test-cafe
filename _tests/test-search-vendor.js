import { Selector } from 'testcafe';
import brankaRole from '../_helpers/UserRole'
import HomePage from '../_pages/home-page'
import CompaniesPage from "../_pages/companies-page";
import CompanyProfilePage from "../_pages/company-profile-page";
import { getVendorName} from "./_data/vendor-name";
import { getContactEmail } from "./_data/contact-email";

const testData = require('./_data/data.json');
let vendorName =  getVendorName();
let contactEmail = getContactEmail();

const homePage = new HomePage()
const companiesPage = new CompaniesPage()
const companyProfilePage = new CompanyProfilePage()

fixture ('Search Vendor and Verify Company Profile Details')
        .beforeEach(async t => {
            await t.useRole(brankaRole)
            //search
            await homePage.accessCompanies()
            await companiesPage.enterSearchText(vendorName)
            await t.pressKey('enter')
            await companiesPage.selectSearchResultCompany()
});

test ('Role Branka verifies About tab Details - Contact Name && Contact Email', async t => {
    const extractedContactName = companyProfilePage.text_contact_name().textContent
    await t.expect(extractedContactName).contains(testData.contactName + ' ' + testData.contactLastName, 'FAILED - Incorrect contact name')
    const extractedContactEmail = companyProfilePage.text_contact_email().textContent
    await t.expect(extractedContactEmail).contains(contactEmail, 'FAILED - Incorrect contact email!')
})

test ('Role Branka verifies Vendor tab Details - Bank Name with 4 digits of the account number', async t => {
    await companyProfilePage.selectVendorTab()
    await t.expect(companyProfilePage.bank_account_name().exists).ok()
})

test('Role Branka verifies Account Details - Bank Name && Routing Number && Account Number', async t =>{
    await companyProfilePage.selectVendorTab()
    await companyProfilePage.accessMenuWithAccountDetails()
    await companyProfilePage.selectToViewAccountDetails()
    const extractedBankName = companyProfilePage.details_bank_name().textContent
    await t.expect(extractedBankName).contains(testData.bankName,'FAILED - Incorrect bank name!')
    const extractedRoutingNumber = companyProfilePage.details_routing_number().textContent
    await t.expect(extractedRoutingNumber).contains(testData.routingNumber,'FAILED - Incorrect routing number!')
    const extractedAccountNumber = companyProfilePage.details_account_number().textContent
    await t.expect(extractedAccountNumber).contains(testData.accountNumber,'FAILED - Incorrect account number!')
})
