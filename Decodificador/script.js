const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector(".btn-copiar");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

function btnEncriptar () 

{
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

    // Exibe o botão de copiar
    btnCopiar.style.display = "inline-block";
}

function encriptar (stringEncriptada) 

{
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar () 

{
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

    // Exibe o botão de copiar
    btnCopiar.style.display = "inline-block";
}

function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

// Adiciona o evento de copiar ao botão
btnCopiar.addEventListener('click', () => {
    // Seleciona o texto da mensagem
    mensagem.select();
    mensagem.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    // Copia o texto para a área de transferência
    document.execCommand('copy');
    
    // Opcional: Notifica o usuário que o texto foi copiado
    alert('Texto copiado para a área de transferência!');
});

// Selecione o elemento com a classe .mensagem
var mensagemBox = document.querySelector('.mensagem');

// Função para criptografar/descriptografar
function encryptDecryptMessage() {
    // Lógica de criptografia/descriptografia aqui
    
    // Após a criptografia/descriptografia, esconda a imagem
    mensagemBox.classList.add('hidden-background');
}

// Exemplo de como acionar a função ao clicar em um botão
document.querySelector('.btn-encriptar').addEventListener('click', encryptDecryptMessage);
document.querySelector('.btn-desencriptar').addEventListener('click', encryptDecryptMessage);