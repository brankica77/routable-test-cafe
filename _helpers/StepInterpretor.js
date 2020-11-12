import { Selector,t } from 'testcafe';

function executeStepsForEach(path){

    const steps = require(path)

    steps.forEach(async function(step)  {
        console.log("step is:" + step.stepAction + " " + step.stepSelector + " " + step.selectorWithText)

        if(step.stepAction === "openPage"){
            await t
                .navigateTo (step.stepValue)
                .wait(step.wait)
                .expect(step.successSelector);
        }
        if(step.stepAction ==="pressEsc"){
            await t.pressKey('esc');
        }
        if(step.stepAction === "pressEnter"){
            await t.pressKey('enter');
        }
        if(step.stepAction === "type"){
            await t.typeText(Selector(step.stepSelector),step.stepValue)
        }
        if(step.stepAction === "clickWithText"){
            await t
                .click(Selector(step.stepSelector).withText(step.selectorWithText))
                .wait(step.waitTime);
        }
        if(step.stepAction === "click"){
             await t
                .click(Selector(step.stepSelector))
        }
        t.click(Selector("#accordion__heading-companies span").withText("Companies"))

    })
}

async function executeSteps(path){
    const stepsFor = require(path)

    for(const step of stepsFor){
        console.log("step selector is: " + step.stepSelector)
        await t.maximizeWindow()

        if(step.stepAction === "click"){
            await t
                .click(Selector(step.stepSelector))
                .wait(5000)
        }
        if(step.stepAction === "clickWithText"){
            await t
                .click(Selector(step.stepSelector).withText(step.selectorWithText))
                .wait(3000);
        }
        if(step.stepAction === "openPage"){
            await t
                .navigateTo (step.stepValue)
                .wait(3000)
                .expect(Selector(step.successSelector).exists).ok();
        }
        if(step.stepAction ==="pressEsc"){
            await t.pressKey('esc');
        }
        if(step.stepAction === "pressEnter"){
            await t.pressKey('enter');
        }
        if(step.stepAction === "type"){
            await t.typeText(Selector(step.stepSelector),step.stepValue)
        }

    }
}

export { executeStepsForEach, executeSteps };