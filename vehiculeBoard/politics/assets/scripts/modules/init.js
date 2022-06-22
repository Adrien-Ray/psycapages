import { data } from "./data.js";
import { randomModif } from "./check.js";

function init() {
    for (let index = 0; index < data.opignon.labels.length; index++) {
        const element = data.opignon.labels[index];



        let newD = document.createElement('div');
        newD.id = `actions_${element}`;
        document.getElementById('actions').append(newD);

        let newDTitleSpan = document.createElement('h4');
        newDTitleSpan.innerText = element;
        document.getElementById(`actions_${element}`).append(newDTitleSpan);

        let newDPercent = document.createElement('p');
        newDPercent.id = `actions_${element}_percent`;
        document.getElementById(`actions_${element}`).append(newDPercent);

        let newDCredit = document.createElement('p');
        newDCredit.id = `actions_${element}_credit`;
        document.getElementById(`actions_${element}`).append(newDCredit);


        let newDBtn_Com = document.createElement('button');
        newDBtn_Com.addEventListener('click', () => {
            randomModif(10, 0, index);
            data.opignon.credit[index] = data.opignon.credit[index] - 10000;
        });
        newDBtn_Com.innerText = 'communication (10000€)';
        document.getElementById(`actions_${element}`).append(newDBtn_Com);

        let newDBtn_Buz = document.createElement('button');
        newDBtn_Buz.addEventListener('click', () => {
            randomModif(30, -10, index);
            data.opignon.credit[index] = data.opignon.credit[index] - 10000;
        });
        newDBtn_Buz.innerText = 'buzz (10000€)';
        document.getElementById(`actions_${element}`).append(newDBtn_Buz);


        let newD2 = document.createElement('div');
        newD2.id = `${element}2`;
        document.getElementById('verticalJauge').append(newD2);

        let newD_jauge = document.createElement('div');
        newD_jauge.id = `${element}`;
        document.getElementById('jaugeHorizontal').append(newD_jauge);
    }
}

export { init };