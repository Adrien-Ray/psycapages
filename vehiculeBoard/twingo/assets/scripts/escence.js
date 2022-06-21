import {
    data
} from "./data.js";

function changeNiveau(volume) {
    if ((data.escence + volume) < data.maxescence || (data.escence + volume) > 0) {
        data.escence = data.escence + volume;
    }
    if (data.escence < 2) {
        document.getElementById('alertEscence').style = 'background-color: rgb(255, 158, 31);';
    } else {
        document.getElementById('alertEscence').style = 'background-color: rgb(44, 25, 0);';
    }
    document.getElementById('escence_niveau').style = `height: calc(${data.escence} * 10px);`;
    // console.log(data.escence);
}

export {
    changeNiveau,
};