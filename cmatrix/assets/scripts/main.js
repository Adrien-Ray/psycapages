const maDiv = document.querySelector('.cmatrix');
const largeur = maDiv.offsetWidth;
const hauteur = maDiv.offsetHeight;

const glyphes = 'のすべてと平でるとなす及びあ及びがかつ大きなにいようにすこれらよって民';

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
        domInjection = domInjection + `<div class="cmatrix__td"></div>`;
    } 
    domInjection = domInjection + '</div>';
}
document.querySelector('.cmatrix').innerHTML = domInjection;