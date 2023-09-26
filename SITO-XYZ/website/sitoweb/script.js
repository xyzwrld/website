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

const asset1 = document.getElementById('asset1');
const asset2 = document.getElementById('asset2');
const asset3 = document.getElementById('asset3');
// Aggiungi altri elementi se necessario

//MUOVI LE CARTELLE
// dragElement1.addEventListener('mousedown', (e) => {
//     startDragging(e, dragElement1);
// });

// dragElement2.addEventListener('mousedown', (e) => {
//     startDragging(e, dragElement2);
// });

// dragElement3.addEventListener('mousedown', (e) => {
//     startDragging(e, dragElement3);
// });


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

asset1.addEventListener('dblclick', () => {
    openOverlay('overlay1');
});

asset1.addEventListener('click', () => {
    asset1.classList.add("focus");
});

asset2.addEventListener('dblclick', () => {
    openOverlay('overlay2');
});

asset3.addEventListener('dblclick', () => {
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



