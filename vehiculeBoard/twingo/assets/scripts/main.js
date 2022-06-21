import {
    changeNiveau,
} from "./escence.js";
import {
    data,
} from "./data.js";
import {
    startStop,
} from "./onoff.js";
changeNiveau(0);

document.getElementById('addescence').addEventListener('click', () => {
    document.getElementById('addescence').style = 'background-color: rgb(40, 256, 40); border-color: green;';
    const addescencesetint = setInterval(() => {
        if (data.escence > data.maxescence) {
            document.getElementById('addescence').style = 'background-color: rgb(70, 70, 70); border-color: black;';
            clearInterval(addescencesetint);
        }
        changeNiveau(0.1);
    }, 100);
});

document.getElementById('startstop').addEventListener('click', () => {
    startStop();
});

const isStart = setInterval(() => {
    const consoParTour = 0.0001;
    const consoPourLeSet = consoParTour * data.tours;
    if (data.on === true && data.escence >= consoPourLeSet) {
        changeNiveau(-consoPourLeSet);
    }
    if (data.tours > 1) {
        const height = data.tours / 10;
        document.getElementById('tours_niveau').style = 'height: ' + height + 'px;';
    } else {
        data.tours = 0;
        document.getElementById('tours_niveau').style = 'height: 0px;';
    }
    if (data.escence <= 0.1 && data.on === true) {
        startStop();
        console.log('panne sèche!');
    }
}, 100);