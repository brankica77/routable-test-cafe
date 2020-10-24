import { Selector } from 'testcafe';
import brankaRole from '../_helpers/UserRole'
import HomePage from '../_pages/home-page'
import CompaniesPage from "../_pages/companies-page";
import AddVendorPage from "../_pages/add-vendor-page";
import ConfirmationPage from "../_pages/confirmation-page";
import { setVendorName} from "./_data/vendor-name";
import {setContactEmail} from "./_data/contact-email";

const testData = require('./_data/data.json');
let randomNumber = String(Math.floor(Math.random() * 100000));
let vendorName =  testData.vendor + '_ ' + String(randomNumber);
let contactEmail = testData.contactEmail + String(randomNumber) + testData.contactEmailProvider;
setVendorName(vendorName);
setContactEmail(contactEmail);

const homePage = new HomePage()
const addVendorPage = new AddVendorPage()
const companiesPage = new CompaniesPage()
const confirmationPage = new ConfirmationPage()

fixture ('Add Vendor Flow Verification');

test('Role Branka is Adding a new Vendor', async t => {
    await t.useRole(brankaRole)
    await t.expect(homePage.page_title().exists).ok()
    await homePage.accessCompanies()
    await companiesPage.accessAddVendorForm()
    //Add new Vendor
    await addVendorPage.select_company_name()
    await addVendorPage.enterCompanyName(vendorName)
    await t.pressKey('enter')
    //Add new contact
    await addVendorPage.accessNewContactForm()
    await addVendorPage.selectContactEmail()
    await addVendorPage.enterContactEmail(contactEmail)
    await addVendorPage.enterContactName(testData.contactName)
    await addVendorPage.enterContactLastName(testData.contactLastName)
    await addVendorPage.addContact()

    //Create added Vendor
    await addVendorPage.createVendor()
    await addVendorPage.turnOffSendingInvite()

    //Payment Method Selected
    await addVendorPage.selectPaymentMedthod()
    await addVendorPage.selectACHpaymentMethod()

    //Add Bank Account - invalid routing number verification
    await addVendorPage.accessBankAccountForm()
    await addVendorPage.enterRoutingNumber(testData.routingNumberInvalid)
    //await t.pressKey('enter')
    await addVendorPage.selectAccountNumberFiled()
    const extractError = await addVendorPage.error_routing_number().textContent;
    await t.expect(extractError).contains('Invalid bank routing number!', 'FAILED - Error is not shown!')
    await addVendorPage.clearRoutingNumber()
    await addVendorPage.enterRoutingNumber(testData.routingNumber)
    await addVendorPage.enterAccountNumber(testData.accountNumber)
    await addVendorPage.addBankAAccount()

    //Finish adding Vendor
    await addVendorPage.addVendor()

    //Confirmation Page - vendor name & payment method verification
    const extractVendorName = confirmationPage.text_vendor_name().textContent;
    await t.expect(extractVendorName).contains(vendorName,'FAILED - Incorrect Vendor name!')
    await t.expect(confirmationPage.text_payment_method().exists).ok()
})