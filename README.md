# routable-test-cafe
---
Project is created with locally installed testcafe within WebStorm Framework.

# Project structure 
---
Runner object is defined in the index.js file and it is recommended to run tests via 

```
node index.js
```

## Top-level directory layout
* _helpers
 * _pages
 * _tests
   * _data

## Pages directory
In the project, Page Model is used. Page Model Classes are:
- home-page.js *contains elements from the login landing page*
- companies-page.js *contains companies page elements*
- add-vendor-page.js *contains elements from the add vendor form and subforms*
- confirmation-page *contains vendor added confirmation page elements*
- company-profile-page.js *contains company profile page elements*

## Tests directory
Tests that cover all given tasks are :
### test-all-vendor.js
In this test, following steps are covered:
> 1.Add vendor form
>
> 2.Add a new contact form
>
> 3.Toggle vendor invite off
>
> 4.Select “ACH” as a payment method
>
> 5.Add bank account information
> >a.Try using “111111111” as a routing number and ensure it shows an error.
>> b.Try using “121140399” as a routing number and ensure it shows “Silicon ValleyBank”.
>
> 6.Validate data on the create vendor confirmation page (vendor name + paymentmethod)
*This test can be also run individually via command*

```
testcafe chrome ./_tests/test-all-vendor.js
```
*since it is independant of the second test.*

To make sure that `vendor name` and `contact email` are unique, random number is generated in this test each time and two variables are created from it.


### test-search-vendor.js
This test is depended on the global variables `vendorName`and `contactEmail` and this test will not work independant of the first one (since it is searching for the vendor added in the first test).
Steps covered:
> 7.Companies list search - find the newly added vendor
>
> 8.Company page - About tab - show that the vendor contact that was added is present(email + name)

> 9.Company page - Vendor tab - show that the vendor bank account added is present(bank name is “Silicon Valley Bank” and the last 4 digits of the bank account number is shown)

> 10.[Bonus] - Bank account details modal - show that the bank name + account number +routing number are all shown.

### data.json
File is saved in the `_data` directory and contains all relevant test data. 
This concept would be good practice if test would be considered as data-driven (at this point, only one set of data is added in it).
 
