// document.createElement('img')                                                // Create a <img> node
// appendChild()   Method that appends a node as the last child of a node.
// https://www.w3schools.com/jsref/met_node_appendchild.asp

// _____________________________________________________________________

import Kiwi from './kiwi.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Kiwi';
    img.width = 300;
    img.src = Kiwi;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;