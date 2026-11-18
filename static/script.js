function calcularSoma() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    fetch("/api/soma", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = "Resultado: " + data.resultado;
    });
}

function calcularSubtracao() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    fetch("/api/subtracao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = "Resultado: " + data.resultado;
    });
}

async function calcularMultiplicacao() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    const resposta = await fetch("/api/multiplicacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    });

    const dados = await resposta.json();
    document.getElementById("resultado").innerText = "Resultado: " + dados.resultado;
}

async function calcularDivisao() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    const resposta = await fetch("/api/divisao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    });

    const dados = await resposta.json();
    if (dados.erro) {
        document.getElementById("resultado").innerText = dados.erro;
    } else {
        document.getElementById("resultado").innerText = "Resultado: " + dados.resultado;
    }
}