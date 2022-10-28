function theTableStep(theTable) {
    const newTheTable = [];
    for (let index = 0; index < theTable.length; index++) {
        const newTheTableLine = [];
        for (let index2 = 0; index2 < theTable[index].length; index2++) {
            try {
                /* if (theTable[index][index2] === true) {
                    newTheTableLine.push(false);
                } else {
                    if (index > 0 && theTable[index-1][index2] === true) {
                        newTheTableLine.push(true);
                    } else if (index2 > 0 && theTable[index][index2 -1] === true) {
                        newTheTableLine.push(true);
                    } else if (index < theTable.length && theTable[index+1][index2] === true) {
                        newTheTableLine.push(true);
                    } else if (index2 < theTable[index].length && theTable[index][index2+1] === true) {
                        newTheTableLine.push(true);
                    } else {
                        newTheTableLine.push(false);
                    }
                } */
                let count = 0;
                /* if (theTable[index][index2] === true) {
                    count++;
                }
                if (index > 0 && theTable[index-1][index2] === true) {
                        count++;
                        if (index2 > 0) {
                            if (theTable[index - 1][index2 - 1] === true) {
                                count++;
                            }
                        }
                        if (index2 < theTable[index].length) {
                            if (theTable[index - 1][index2 + 1] === true) {
                                count++;
                            }
                        }
                }
                if (index2 > 0 && theTable[index][index2 -1] === true) {
                        count++;
                }
                if (index < theTable.length - 1) {
                    if (theTable[index+1][index2] === true) {
                        count++;
                        if (index > 0) {
                            if (theTable[index + 1][index2 - 1] === true) {
                                count++;
                            }
                        }
                        if (index < theTable[index].length) {
                            if (theTable[index + 1][index2 + 1] === true) {
                                count++;
                            }
                        }
                    }
                }
                if (index2 < theTable[index].length && theTable[index][index2+1] === true) {
                        count++;
                } */
                try {
                    if (theTable[index][index2] === true) {
                        count++;
                    }
                } catch (error) {
                    
                }
                try {
                    if (theTable[index - 1][index2 - 1]) {
                        count++;
                    }
                } catch (error) {
                    
                }
                try {
                    if (theTable[index - 1][index2]) {
                        count++;
                    }
                } catch (error) {
                    
                }
                try {
                    if (theTable[index - 1][index2 + 1]) {
                        count++;
                    }
                } catch (error) {
                    
                }
                try {
                    if (theTable[index][index2 - 1]) {
                        count++;
                    }
                } catch (error) {
                    
                }
                try {
                    if (theTable[index][index2 + 1]) {
                        count++;
                    }
                } catch (error) {
                    
                }
                try {
                    if (theTable[index + 1][index2 - 1]) {
                        count++;
                    }
                } catch (error) {
                    
                }
                try {
                    if (theTable[index + 1][index2]) {
                        count++;
                    }
                } catch (error) {
                    
                }
                try {
                    if (theTable[index + 1][index2 + 1]) {
                        count++;
                    }
                } catch (error) {
                }
                if (count > 1 && count < 4) {
                    newTheTableLine.push(true);
                } else {
                    newTheTableLine.push(false);
                }
            } catch (error) {
                newTheTableLine.push(false);
                console.log(error);
            }
        }
        newTheTable.push(newTheTableLine);
    }
    return newTheTable;
}
export { theTableStep };