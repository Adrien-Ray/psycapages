function newDomStep(objCases) {
    let newDom = ``;
    for (let index = 0; index < objCases.length; index++) {
        const element = objCases[index];
        if (element === true) {
            newDom = newDom + '<div class="true"></div>';
        } else {
            newDom = newDom + '<div></div>';
        }
    }
    newDom = `<div>${newDom}</div>`;
    document.getElementById('etapes').innerHTML = document.getElementById('etapes').innerHTML + newDom
}

export { newDomStep };