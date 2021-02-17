/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


document.addEventListener("dragstart", function (event) {
    // onthouden dat een element gedragged wordt
    dragged = event.target;
    // het een aparte achtergrondkleur geven als het gedragged wordt
    event.target.style.background = "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)";

}, false);

document.addEventListener("dragend", function (event) {
    // achtergrond resetten wanneer het element niet meer gedragged worden
    event.target.style.background = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function (event) {
    // default uitzetten om drop toe te staan
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    // highlight mogelijk drop gebied wanneer het dragbare element eroverheen gaat
    if (event.target.className == "dropzone") {
        event.target.style.background = "rgba(63,43,150,0.5)";
    }

}, false);

document.addEventListener("dragleave", function (event) {
    // reset mogelijk drop gebied wanneer het dragbare element het verlaat
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function (event) {
    // verplaats element wat gedragged wordt naar het geselecteerde drop gebied
    if (event.target.className == "dropzone")
    {
        // reset de achtergrondkleur
        event.target.style.background = "";
        // toevoegen van het item
        event.target.appendChild(dragged);
    }
}, false);
