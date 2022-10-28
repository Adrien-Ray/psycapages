import { newDomStep } from "./newDomStep.js";
import { objCases } from "../main.js";

function init(objInit) {
    for (let index = 0; index < objInit.numberOfCase; index++) {
        objCases.push(false);
    }
    for (let index = 0; index < objInit.caseTrue.length; index++) {
        objCases[objInit.caseTrue[index]] = true;
    }
    newDomStep(objCases);
}

export { init };