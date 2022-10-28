function newDom(newTheTable) {
    let theNewDom = '';
    console.log('newDom', newTheTable);
    for (let indexDom = 0; indexDom < newTheTable.length; indexDom++) {
        theNewDom = theNewDom + `<div>`;
        for (let indexDomW = 0; indexDomW < newTheTable[indexDom].length; indexDomW++) {
            if (newTheTable[indexDom][indexDomW] === true) {
                theNewDom = theNewDom + `<div class="true"></div>`;
            } else {
                theNewDom = theNewDom + `<div></div>`;
            }
        }
        theNewDom = theNewDom + `</div>`;
    }
    // console.log(newDom);
    document.getElementById('grid').innerHTML = theNewDom;
}

export { newDom };