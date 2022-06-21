import { data } from "./data.js";

function init() {
    for (let index = 0; index < data.opignon.labels.length; index++) {
        const element = data.opignon.labels[index];

        let newD = document.createElement('div');
        newD.id = `actions_${element}`;
        newD.innerText = element;
        document.getElementById('actions').append(newD);

        let newD2 = document.createElement('div');
        newD2.id = `${element}2`;
        document.getElementById('verticalJauge').append(newD2);

        let newD_jauge = document.createElement('div');
        newD_jauge.id = `${element}`;
        document.getElementById('jaugeHorizontal').append(newD_jauge);
    }
}

export { init };