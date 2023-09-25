let isDragging = false;
let offsetX, offsetY;
let currentDragElement = null;

// Funzione per iniziare il trascinamento di un elemento
function startDragging(e, element) {
    isDragging = true;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
    element.style.zIndex = 1000;
    element.style.position = 'fixed';
    element.style.pointerEvents = 'none';
    document.body.appendChild(element);
    currentDragElement = element;
}

// Funzione per smettere di trascinare l'elemento corrente
function stopDragging() {
    if (!isDragging) return;
    isDragging = false;
    currentDragElement.style.zIndex = '';
    currentDragElement.style.pointerEvents = '';
    currentDragElement = null;
}

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentDragElement.style.left = e.clientX - offsetX + 'px';
    currentDragElement.style.top = e.clientY - offsetY + 'px';
});

document.addEventListener('mouseup', () => {
    stopDragging();
});

const dragElement1 = document.getElementById('dragElement1');
const dragElement2 = document.getElementById('dragElement2');
const dragElement3 = document.getElementById('dragElement3');

const dir1 = document.getElementById('dir1');
const dir2 = document.getElementById('dir2');
const dir3 = document.getElementById('dir3');
// Aggiungi altri elementi se necessario

dragElement1.addEventListener('mousedown', (e) => {
    startDragging(e, dragElement1);
});

dragElement2.addEventListener('mousedown', (e) => {
    startDragging(e, dragElement2);
});

dragElement3.addEventListener('mousedown', (e) => {
    startDragging(e, dragElement3);
});
// Aggiungi altri event listener per gli altri elementi trascinabili se necessario

// Funzioni per aprire e chiudere gli overlay
function openOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.display = 'block';
}

function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.display = 'none';
}

// Event listener per aprire gli overlay quando si fa clic su una cartella

dir1.addEventListener('dblclick', () => {
    openOverlay('overlay2');
});

dir2.addEventListener('click', () => {
    openOverlay('overlay2');
});

dir3.addEventListener('click', () => {
    openOverlay('overlay3');
});

// Event listener per chiudere gli overlay quando si fa clic su "Chiudi"
document.getElementById('closeOverlay1').addEventListener('click', () => {
    closeOverlay('overlay1');
});

document.getElementById('closeOverlay2').addEventListener('click', () => {
    closeOverlay('overlay2');
});

document.getElementById('closeOverlay3').addEventListener('click', () => {
    closeOverlay('overlay3');
});

// Aggiungi altri event listener per gli altri elementi se necessario
