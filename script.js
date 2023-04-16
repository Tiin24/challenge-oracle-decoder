function encrypted() {
  const text = document.getElementById("textEncrypted").value.toLowerCase();

  let encryptedText = text
    .replace(/e/gim, "enter")
    .replace(/i/gim, "imes")
    .replace(/a/gim, "ai")
    .replace(/o/gim, "ober")
    .replace(/u/gim, "ufat");

  document.getElementById("textDecrypted").innerHTML = encryptedText;
  document.getElementById('toy').style.display = "none";
  document.getElementById('mensaje').style.display = "none";
  document.getElementById('mensaje2').style.display = "none";
  document.getElementById('textDecrypted').style.display = "block";
  document.getElementById('btnCopy').style.display = "block";
}

function decrypted() {
  const encryptedText = document
    .getElementById("textEncrypted")
    .value.toLowerCase();

  let decryptedText = encryptedText
    .replace(/enter/gim, "e")
    .replace(/imes/gim, "i")
    .replace(/ai/gim, "a")
    .replace(/ober/gim, "o")
    .replace(/ufat/gim, "u");

  document.getElementById("textDecrypted").innerHTML = decryptedText;
}

function copy(){

    const cont = document.querySelector("#textDecrypted");
    // como seleccionar un texto y copiarlo en js   
     cont.select();
    document.execCommand("copy");
}
