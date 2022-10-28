import { initData } from "./modules/initData.js";
import { initFunc } from "./modules/initFunc.js";
import { theTableStep } from "./modules/theTableStep.js";
import { newDom } from "./modules/newDom.js";

let theTable = [];

const init = initFunc(initData);
theTable = init;

setInterval(() => {
    const newTheTable = theTableStep(theTable);
    theTable = newTheTable;
    newDom(newTheTable);
}, 100);