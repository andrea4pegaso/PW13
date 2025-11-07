# PW13
Tema n. 2 Privacy e sicurezza aziendale 
PW 13. Sviluppo di un software mobile-friendly per il calcolo del fattore di rischio

# Calcolo del Fattore di Rischio – Project Work UniPegaso

Questo progetto ha l'obiettivo di:
- spiegare in modo chiaro il calcolo del fattore di rischio in ambito sicurezza sul lavoro,
- fornire un documento PDF con riferimenti normativi, formule ed esempi pratici,
- offrire una pagina web responsive e mobile-friendly che consente di scaricare/visualizzare il PDF,
- integrare un QR code per l’accesso rapido via smartphone.

## Contenuti principali

- `download/fattore_rischio.pdf`  
  Documento esplicativo sul calcolo del fattore di rischio (metodo, parametri, esempio numerico).

- `index.html`  
  Interfaccia responsive con:
  - pulsante di download del PDF,
  - QR code generato via JavaScript.

- `test/rapporto_valutazione_test.pdf`  
  Rapporto finale sul processo di sviluppo, scelte di design, test di usabilità e accessibilità, come richiesto dal Project Work.

## Come provare la pagina

1. Apri `https://andrea4pegaso.github.io/PW13/` oppure apri `index.html` in un browser (i.e. Google Chrome)
3. Scansiona il QR code mostrato nella pagina: deve puntare a `download/fattore_rischio.pdf`.

## Tecnologie usate
- HTML5
- CSS3 (layout responsive con flexbox e media query)
- JavaScript
- Libreria QRCode.js per generare il QR code lato client
