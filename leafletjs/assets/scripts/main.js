var map = L.map('map').setView([47.070122, 2.043457], 7);

L.control.scale({metric: true, imperial: false}).addTo(map); // add echelle

let layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([48.450155, -4.779053], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50000 // donne le rayon en mètre
}).addTo(map).bindPopup("I am a circle.");

var marker = L.marker([48.176847, -2.754436]).addTo(map).bindPopup("<b>Hello world!</b><br>I am a popup.<br><a target='_blank' href='https://portfolio.accesdenied.net'>portfolio</a>")/* .openPopup() */; // openPopup open popup at open document;

var markerAtol = L.marker([47.220084, 4.996644]).addTo(map).bindPopup("<b>AtolCD</b><br><a target='_blank' href='https://www.atolcd.com/'>site internet</a>")/* .openPopup() */;

function myIcon(logo) {
    let logoPath = './assets/ico/home.svg';
    if (logo === 'home') {
        logoPath = './assets/ico/home.svg';
    } else if (logo === 'smile') {
        logoPath = './assets/ico/smile.svg';
    }
    return L.icon({
        iconUrl: logoPath,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
        /* shadowUrl: 'my-icon-shadow.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94] */
        className: 'iconGoogleMat'
    });
}

var popup = L.popup()
    .setLatLng([48.854776, 2.343864])
    .setContent("<b>Ici c'est Paris</b><br><a target='_blank' href='https://fr.wikipedia.org/wiki/Paris'>wikipedia</a>")
    .openOn(map);

/* function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick); */

var popup2 = L.popup();

function onMapClick(e) {
    popup2
        .setLatLng(e.latlng)
        .setContent("You clicked the map at : <br>" + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


document.querySelector('.sateliteToggle').innerText = 'satelite layer';
document.querySelector('.sateliteToggle').addEventListener('click', () => {
    map.removeLayer(layer); // evite la superposition de layers
    if (document.querySelector('.sateliteToggle').innerText === 'satelite layer') {
        document.querySelector('.sateliteToggle').innerText = 'openstreetmap layer';
        // add satelite layer
        layer = L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; <a href="http://www.esri.com/">Esri</a>',
            maxZoom: 19,
            }).addTo(map);
    } else {
        document.querySelector('.sateliteToggle').innerText = 'satelite layer';
        // remove satelite layer
        layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
});

document.querySelector('.polygonToggle').innerText = 'ajouter les polygones';
var polygon;
var polygon2;
document.querySelector('.polygonToggle').addEventListener('click', () => {
    if (document.querySelector('.polygonToggle').innerText === 'ajouter les polygones') {
        document.querySelector('.polygonToggle').innerText = 'retirer les polygones';
        polygon = L.polygon([
            [45.600828, -1.152878],
            [45.600828, 0],
            [45, 0],
            [45, -1.152878],
        ]).addTo(map).bindPopup("I am a polygon.");
        
        polygon2 = L.polygon([
            [45.600828, 0],
            [45.600828, 1],
            [45, 1],
            [45, 0],
        ], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.3,
        }).addTo(map).bindPopup("I am a polygon2.");
    } else {
        document.querySelector('.polygonToggle').innerText = 'ajouter les polygones';
        map.removeLayer(polygon);
        map.removeLayer(polygon2);
    }
});

document.querySelector('.googleIconToggle').innerText = 'ajouter les google icons';
var marker2;
var marker3;
document.querySelector('.googleIconToggle').addEventListener('click', () => {
    if (document.querySelector('.googleIconToggle').innerText === 'ajouter les google icons') {
        document.querySelector('.googleIconToggle').innerText = 'retirer les google icons';
        marker2 = L.marker([47.473591, -0.551033], { icon: myIcon('home') }).addTo(map).bindPopup("<b>Hello world!</b><br>this is a house<br><a target='_blank' href='https://portfolio.accesdenied.net'>portfolio</a>")/* .openPopup() */; // openPopup open popup at open document;

        marker3 = L.marker([47.229361, -1.547699], { icon: myIcon('smile') }).addTo(map).bindPopup("<b>Hello world!</b><br>this is a smiley<br><a target='_blank' href='https://portfolio.accesdenied.net'>portfolio</a>")/* .openPopup() */; // openPopup open popup at open document;

    } else {
        document.querySelector('.googleIconToggle').innerText = 'ajouter les google icons';
        map.removeLayer(marker2);
        map.removeLayer(marker3);
    }
});

// create a red polyline from an array of LatLng points
var latlngs = [
    [48.305121, -3.361816],
    [49.59647, -1.790771],
    [46.882723, -2.021484],
    [46.316584, 0.98877],
    [47.122476, 0.856934],
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

// zoom the map to the polyline
// map.fitBounds(polyline.getBounds());