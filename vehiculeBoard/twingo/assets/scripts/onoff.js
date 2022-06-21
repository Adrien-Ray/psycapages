import {
    data,
} from "./data.js";
import {
    changeNiveau,
} from "./escence.js";

function startStop() {
    if (data.on === false) {
        if (data.escence > 0.1) {
            data.on = true;
            document.getElementById('startstop').style = 'background-color: rgb(100, 255, 100); border-color: rgb(100, 255, 100);';
            changeNiveau(-0.1);
            console.log('start');

            const startTours = setInterval(() => {
                if (data.tours < 600) {
                    data.tours += 2;
                } else {
                    clearInterval(startTours);
                }
                console.log('data.tours' + data.tours);
            }, 10);
            document.getElementById('tours_niveau').addEventListener('click', () => {
                clearInterval(startTours);
            });
        } else {
            console.log('error start: no escence');
        }
    } else {
        data.on = false;
        data.tours = 0;
        document.getElementById('startstop').style = 'background-color: rgb(70, 70, 70); border-color: black;';
        console.log('stop');
    }
}

export {
    startStop,
};