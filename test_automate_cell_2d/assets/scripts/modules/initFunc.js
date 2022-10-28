function initFunc(initData) {
    let newDom = '';
    let newTable = [];
    for (let index = 0; index < initData.height; index++) {
        newTable[index] = [];
        for (let indexW = 0; indexW < initData.width; indexW++) {
            newTable[index][indexW] = false;
        }
    }
    for (let indexInitTrue = 0; indexInitTrue < initData.firstTrue.length; indexInitTrue++) {
        const element = initData.firstTrue[indexInitTrue];
        newTable[element.height][element.width] = true;
    }
    console.log(newTable);
    
    for (let indexDom = 0; indexDom < newTable.length; indexDom++) {
        newDom = newDom + `<div>`;
        for (let indexDomW = 0; indexDomW < newTable[indexDom].length; indexDomW++) {
            if (newTable[indexDom][indexDomW] === true) {
                newDom = newDom + `<div class="true"></div>`;
            } else {
                newDom = newDom + `<div></div>`;
            }
        }
        newDom = newDom + `</div>`;
    }
    // console.log(newDom);
    document.getElementById('grid').innerHTML = newDom;
    return newTable;
};

export { initFunc };