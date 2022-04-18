let nomes = [];
let form = document.getElementById('form');

function inserir() {
    if (document.getElementById('lista').checked || document.getElementById('pilha').checked) {
        form.addEventListener('submit', (e) => {
            let campo = document.getElementById('nome').value;
            if (document.getElementById('lista').checked) {
                document.getElementById('pilha').disabled = true;
                nomes.unshift(campo);
            }
            else if (document.getElementById('pilha').checked) {
                document.getElementById('lista').disabled = true;
                nomes.push(campo);
            }
            criarBody(nomes);
            form.reset();
            e.preventDefault()
        });
    }
    else {
        document.getElementById('alerta').style.display = "block";
        setTimeout(() => {
            document.getElementById('alerta').style.display = "none";
        }, 5000);
    }
}

function criarBody(campo) {
    let tbody = document.getElementById('tbody')
    tbody.innerText = '';

    for (const element of campo) {
        let tr = tbody.insertRow();
        let td_palavra = tr.insertCell();
        td_palavra.innerText = element;
    }
}

function limpar() {
    nomes.splice(0, nomes.length);
    criarBody('');
    document.getElementById('pilha').disabled = false;
    document.getElementById('lista').disabled = false;
    form.reset();
}