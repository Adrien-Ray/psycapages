const maDiv = document.querySelector('.cmatrix');
const largeur = maDiv.offsetWidth;
const hauteur = maDiv.offsetHeight;

// const glyphes = 'のすべてと平でるとなす及びあ及びがかつ大きなにいようにすこれらよって民';
const glyphes = [
    '\u306e', // の
    '\u3059', // す
    '\u3079', // べ
    '\u3066', // て
    '\u3068', // と
    '\u5e73', // 平
    '\u3067', // で
    '\u308b', // る
    '\u3068', // と
    '\u306a', // な
    '\u3059', // す
    '\u3076', // ぶ
    '\u307e', // ま
    '\u3078', // へ
    '\u3068', // と
    '\u307a', // ぺ
    '\u307b', // ほ
    '\u304b', // か
    '\u3064', // つ
    '\u5927', // 大
    '\u304d', // き
    '\u306a', // な
    '\u306b', // に
    '\u3044', // い
    '\u3088', // よ
    '\u3046', // う
    '\u306b', // に
    '\u3059', // す
    '\u3053', // こ
    '\u308c', // れ
    '\u308a', // り
    '\u3088', // よ
    '\u3063', // っ
    '\u3066', // て
    '\u308c', // れ
    '\u308a', // り
    '\u3088', // よ
    '\u3063', // っ
    '\u3066', // て
    '\u6c11'  // 民
];

const numCaseLarger = Math.floor(largeur / 30);
const numCaseHauteur = Math.floor(hauteur / 30);

console.log('cases en largeur : ', numCaseLarger, 'cases en hauteur : ', numCaseHauteur);

let countLines = 0;
let countCol = 0;

let domInjection = '';
for (let index = 0; index < numCaseHauteur; index++) {
    // create lines
    domInjection = domInjection + '<div class="cmatrix__tr">';
    for (let index = 0; index < numCaseLarger; index++) {
        let randomGlyph = glyphes[Math.floor(Math.random() * glyphes.length)];
        domInjection = domInjection + `<div class="cmatrix__td">${randomGlyph}</div>`;
    } 
    domInjection = domInjection + '</div>';
}
document.querySelector('.cmatrix').innerHTML = domInjection;

let cmatrixDOM = document.querySelector('.cmatrix');

function processStep(row, col) {
    cmatrixDOM.childNodes[row].childNodes[col].classList.toggle("light");
    setTimeout(() => {
        cmatrixDOM.childNodes[row].childNodes[col].classList.toggle("light");
        return;
    }, 10);
}

function process(randomIndex) {
    let count = 0;
    let processStepInterval = setInterval(() => {
        processStep(count, randomIndex);
        count++;
        if (count >= numCaseHauteur) {
            clearInterval(processStepInterval);
            return;
        }
    }, 50);
}

function randomStartProcess() {
    const randomIndex = Math.floor(Math.random() * numCaseLarger);
    process(randomIndex);
    return;
}

setInterval(() => {
    randomStartProcess();
}, 100);

console.log(document.querySelector('.cmatrix'));