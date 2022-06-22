import { check } from "./modules/check.js";
import { init } from "./modules/init.js";

init();

setInterval(() => {
    check();
}, 250);