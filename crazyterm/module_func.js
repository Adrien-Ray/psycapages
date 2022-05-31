function randomNumber(min, max) {
    // renvoi entre min et max un entier
    let randomNum = Math.random() * (max - min) + min;
    randomNum = Math.round(randomNum);
    return randomNum;
}

function inIndex(theArray, theClass) {
    let max = theArray.length;
    max = max - 1;
    const index = randomNumber(0, max);
    const toReturn = `<span class="${theClass}">${theArray[index]}</span>`;
    return toReturn;
}

function inIndexObject(theArray, theClass) {
    let max = theArray.length;
    max = max - 1;
    const index = randomNumber(0, max);
    const toReturn = `<span class="${theClass} ${theArray[index]['class']}">${theArray[index]['text']}</span>`;
    return toReturn;
}


export { randomNumber, inIndex, inIndexObject };