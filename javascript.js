const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const inputpeso = e.target.querySelector('#peso')
    const inputaltura = e.target.querySelector('#altura')

    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);

    if (!peso && !altura) {
        setResultado('peso invalido', false);
        return;
    }

    const imc = getImc (peso, altura);
    const NivelImc = getNivelImc(imc)

    const msg = `seu imc é ${imc} (${NivelImc}).`;

    setResultado(msg, true);
});
function getNivelImc (imc) {
    const nivel = ['abaixo do peso', 'peso normal',
        'sobrepeso', 'obesidade grau 1', 
        'obesidade grau 2', 'obesidade grau 3'];

        if (imc >= 39.9) return nivel[5]  
        if (imc >= 34.9) return nivel[4]
        if (imc >= 29.9) return nivel[3]
        if (imc >= 24.9) return nivel [2]
        if (imc >= 18.5) return nivel [1]
        if (imc < 18.5) return nivel [0]  

}

function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criaP();

    p.innerHTML = msg;
    resultado.appendChild(p);
}