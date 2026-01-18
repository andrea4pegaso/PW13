// script.js
// Genera dinamicamente il QR code che punta al PDF
// Il PDF da scaricare è disponibile in download/fattore_rischio.pdf

const pdfURL = "https://andrea4pegaso.github.io/PW13/download/fattore_rischio.pdf";

const qrContainer = document.getElementById("qrcode");

if (qrContainer && window.QRCode) {
  new QRCode(qrContainer, {
    text: pdfURL,
    width: 96,
    height: 96,
    correctLevel: QRCode.CorrectLevel.M,
  });
} else {
  // fallback: se per qualche motivo la libreria non carica
  qrContainer.innerText = "QR non disponibile";
}
