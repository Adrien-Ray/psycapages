import { data } from "./data.js";

function dateIncrement() {
    if (data.date.day < 30) {
        data.date.day += 1;
    } else {
        data.date.day = 1;
        if (data.date.mounth < 12) {
            data.date.mounth += 1;
        } else {
            data.date.mounth = 1;
            data.date.year += 1;
        }
    }
    const formDate = `Date: year ${data.date.year}, mounth: ${data.date.mounth}, day: ${data.date.day}`;
    document.getElementById('date').innerText = formDate;
}

function randomModif(amplitude, min, index) {
    // index désigne la valeur numeric a modifier (en %) dans data.opignon.values
    const outpout = data.opignon.values[index] * ((((Math.random() * amplitude) + min) / 100) + 1);
    data.opignon.values[index] = outpout;
    return outpout;
}

function opignonPublic() {
    let pointCount = 0;
    for (let index = 0; index < data.opignon.values.length; index++) {
        const element = index;
        const outpout = randomModif(4, -2, element);
        pointCount = pointCount + outpout;
    }
    document.getElementById('pointCount').innerText = pointCount;
    let totalPercent = 0;
    for (let index2 = 0; index2 < data.opignon.values.length; index2++) {
        const element = data.opignon.values[index2];
        const percent = element / (pointCount / 100);
        const percentRound = Math.round(percent * 100) / 100;
        document.getElementById(data.opignon.labels[index2]).style = `width: ${percent}%;`;
        document.getElementById(data.opignon.labels[index2]).title = `${data.opignon.labels[index2]} - ${percentRound}%`;
        document.getElementById(`${data.opignon.labels[index2]}2`).style = `height: ${percent * 5}px;`;
        document.getElementById(`${data.opignon.labels[index2]}2`).title = `${data.opignon.labels[index2]} - ${percentRound}%`;
        document.getElementById(`actions_${data.opignon.labels[index2]}_percent`).innerText = `${percentRound}%`;

        data.opignon.credit[index2] = Math.round(data.opignon.credit[index2] + ((percentRound * 10) - 10));
        document.getElementById(`actions_${data.opignon.labels[index2]}_credit`).innerText = `${data.opignon.credit[index2]} €`;
        totalPercent = totalPercent + percent;
    }

}

function check() {
    dateIncrement();
    opignonPublic();
}

export { check, randomModif };