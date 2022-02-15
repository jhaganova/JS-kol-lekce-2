//Písmo v odstavci po najetí myši ztuční.

let paragraph = document.getElementsByClassName('content__text')[0];

function addBold() {
    paragraph.style.fontWeight = 'bold';
}

function removeBold() {
    paragraph.style.fontWeight = 'normal';
}

function toggleRed() {
    paragraph.classList.toggle("red");
}

function growSize() {
    let currentSize = (paragraph.style.fontSize); 
    paragraph.style.fontSize = (parseInt(currentSize) + 1) + 'px';
}

