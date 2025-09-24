let nombres = [];

function adicionarNombre() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    const contenedor = document.getElementById('list-container');
    lista.innerHTML = "";
    if (nombres.length > 0) {
        contenedor.style.display = "flex";
        for (let nombre of nombres) {
            const li = document.createElement('li');
            li.textContent = nombre;
            lista.appendChild(li);
        }
    } else {
        contenedor.style.display = "none";
    }
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Ingresa nombres antes de sortear.");
        return;
    }
    const indice = Math.floor(Math.random() * nombres.length);
    document.getElementById('resultado').textContent = `El amigo secreto es: ${nombres[indice]}`;
}

function reiniciarAmigos() {
    nombres = [];
    mostrarLista();
    document.getElementById('resultado').textContent = "";
}
