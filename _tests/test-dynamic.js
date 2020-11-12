import { Selector } from 'testcafe';
import { executeStepsForEach, executeSteps } from '../_helpers/StepInterpretor'
import brankaRole from "../_helpers/UserRole";


fixture ('Dynamic Test');

test ('Dynamic Steps', async t => {
    await executeSteps('../_tests/_data/testSteps.json')
})





