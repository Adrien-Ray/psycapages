import { newDomStep } from "./modules/newDomStep.js";
import { init } from "./modules/init.js";
import { objInit } from "./modules/objs.js";

let objCases = [];
init(objInit);
console.log(objCases);

var step = setInterval(() => {
    console.log('in setInterval', objInit.stepPassed);
    if (objInit.numberOfStep === objInit.stepPassed) {
        clearInterval(step);
    } else {
        objInit.stepPassed += 1;
        const newObjCases = [];
        for (let index = 0; index < objCases.length; index++) {
            if ((objCases[index - 1] || objCases[index + 1]) === true) {
                if ((objCases[index - 1] && objCases[index + 1]) === true) {
                    newObjCases.push(false);
                } else {
                    newObjCases.push(true);
                }
            } else {
                newObjCases.push(false);
            }
        }
        objCases = newObjCases;
        newDomStep(objCases);
    }
}, 100);

export { objCases };