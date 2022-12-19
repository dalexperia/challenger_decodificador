/*A letra "e" é convertida para "enter"
   A letra "i" é convertida para "imes"
   A letra "a" é convertida para "ai"
   A letra "o" é convertida para "ober"
   A letra "u" é convertida para "ufat"
   */
let texto = document.getElementById('texto-decodificado');
let codificar = document.getElementById('encriptar');
let decifrar = document.getElementById('decifrar');
let copiar = document.getElementById('copiar');
let code = {"a":"ai","e":"enter","i":"imes","o":"ober","u":"ufat"};
let retornarLetra = (codigo) => {
    for (const [key, value] of Object.entries(code)){
        if(codigo === value){
            return key;
        }
    }
}
let retornarvalores = () => {
    let valores = [];
    let regex = '';
    for (const [, values] of Object.entries(code)){
        regex += '(' + values + ')|';
    }
    regex = regex.substring(0, regex.length - 1);
    return new RegExp(regex, "g");
}
let encriptar = () => {
    let result = texto.value;
    if (result === ''){
        alert('Digite alguma palavra ou texto em minúsculo');
        return null;
    }
    document.getElementById('texto-decodificado').value = " ";
    document.getElementById('anterior').innerHTML = " ";
    copiar.style.display = "block";
    document.getElementsByClassName('texto-codificado')[0].innerText = result.replace(/[aeiou]/g, letter => code[letter]);
}
let descriptar = () => {
    let result = texto.value;
    if (result === ''){
        alert('Digite alguma palavra ou texto em minúsculo');
        return null;
    }
    const regex = retornarvalores();
    document.getElementById('texto-decodificado').value = " ";
    document.getElementsByClassName('texto-codificado')[0].innerText = result.replace(regex, retornarLetra);
}
let copiarTexto = () => {
    var content = document.getElementsByClassName('texto-codificado')[0].innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
}

codificar.onclick = encriptar;
decifrar.onclick = descriptar;
copiar.onclick = copiarTexto;