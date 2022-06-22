import { data } from "./data.js";

const date = {
    day: 0,
    mounth: 1,
    year: 1,
};

function dateIncrement() {
    if (date.day < 30) {
        date.day += 1;
    } else {
        date.day = 1;
        if (date.mounth < 12) {
            date.mounth += 1;
        } else {
            date.mounth = 1;
            date.year += 1;
        }
    }
    const formDate = `Date: year ${date.year}, mounth: ${date.mounth}, day: ${date.day}`;
    document.getElementById('date').innerText = formDate;
}

function indicator() {

    document.getElementById('indicator').innerHTML = '';
    const initialList = data.country.satisfaction.sort((b, a) => a.coef - b.coef);
    for (let index = 0; index < initialList.length; index++) {
        const element = initialList[index];
        let newD = document.createElement('div');
        newD.innerText = `${element.nom}: coef ${element.coef}: note ${element.note}`;
        document.getElementById('indicator').append(newD);
    }
}

function check() {
    dateIncrement();
    indicator();
}

export { check };