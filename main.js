var typed = new Typed(".text", {
    strings: ["Front- End", "UI/UX Design", "Graphic Design"],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

var typed = new Typed(".text2", {
    strings: [""],
    loop: false
});

var typed = new Typed(".text3", {
    strings: [""],
    loop: false
});

let mostrarhtml = document.querySelector(".mostrarhtml");
let mostrarcss = document.querySelector(".mostrarcss");
let mostrarjavascript = document.querySelector(".mostrarjavascript");
let mostrarfigma = document.querySelector(".mostrarfigma");
let mostraradobe = document.querySelector(".mostraradobe");



function hideMessage(icon) {

    if (icon === 'html') {
        mostrarhtml.style.display = "none";
        // Ocultar o texto para o ícone HTML
    } else if (icon === 'css') {
        mostrarcss.style.display = "none";
        // Ocultar o texto para o ícone CSS
    } else if (icon === 'javascript') {
        mostrarjavascript.style.display = "none";
    } else if (icon === 'figma') {
        mostrarfigma.style.display = "none";
    } else if (icon === 'adobe') {
        mostraradobe.style.display = "none";
    }

}
function showMessage(icon) {

    if (icon === 'html') {
        mostrarhtml.style.display = "inline-block";
        // Mostrar o texto para o ícone HTML
    } else if (icon === 'css') {
        mostrarcss.style.display = "inline-block";
        // Mostrar o texto para o ícone CSS
    } else if (icon === 'javascript') {
        mostrarjavascript.style.display = "inline-block";
    } else if (icon === 'figma') {
        mostrarfigma.style.display = "inline-block";
    } else if (icon === 'adobe') {
        mostraradobe.style.display = "inline-block";
    }

}











