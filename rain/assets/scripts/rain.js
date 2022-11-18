const settings = {
    timeAnim: 10,
}

setInterval(() => {
    rain();
}, 100);

function rain() {
    const watterDrop = document.createElement('i');
    watterDrop.style.left = Math.random() * 100 + '%';
    watterDrop.style.animationDuration = Math.random() * settings.timeAnim + 's';
    watterDrop.style.width = Math.round(Math.random() * 25) + 'px';
    watterDrop.style.backgroundColor = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.random()})`;
    document.body.appendChild(watterDrop);
    setTimeout(() => {
        watterDrop.remove();
    }, settings.timeAnim * 1000);
}