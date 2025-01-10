// Laad alle query parameters uit de url
const urlParams = new URLSearchParams(window.location.search);

window.onload = () => {
    const domEl = document.getElementById("result")
    if (!domEl) {
        console.warn("domEl #result can not be found")
        return
    }
    if (urlParams.size != 0) {
        domEl.style.display = "block"
        // Reset de inhoud van het #result element
        domEl.innerHTML = "<h3>Resultaat</h3>"

        urlParams.forEach((value,key) => {
            // Voeg de query parameters 1 voor 1 toe via een forEach loop / lus
            domEl.innerHTML += `<div class="row"><strong>${key}</strong><span>${value}</span></row>`
        })
    } else {
        domEl.style.display = "none"
    }
}