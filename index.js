const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['_tests/test-add-vendor.js', '_tests/test-search-vendor.js'])
            .browsers(['chrome'])
            .run({
                skipJsErrors: true
            });
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });