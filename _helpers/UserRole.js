import { Role } from 'testcafe';

const brankaRole = Role ('https://app.recruiting-challenge.megabox.dev/login', async t => {
    await t
        //.click('#authLoginForm [name="form.namespace"]')
        .typeText('#authLoginForm [name="form.namespace"]', 'branka-bar-and-grill')
        //.click('#authLoginForm [name="form.username"]')
        .typeText('#authLoginForm [name="form.username"]', 'branka@domic.com')
        //.click('#authLoginForm [name="form.password"]')
        .typeText('#authLoginForm [name="form.password"]', 'branka-povio-2020')
        .click('#auth_login_btn')
        //.wait(1000)
        .maximizeWindow();
}, { preserveUrl: true });

export default brankaRole;
