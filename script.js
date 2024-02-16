const louvores = [
  { nome: "Sobre as aguas", tom: "G", ministro: "Tielen" },
  { nome: "Cancao ao cordeiro", tom: "G", ministro: "Tielen" },
  { nome: "Vitorioso es", tom: "G", ministro: "Tielen" },
  { nome: "Yahweh", tom: "G", ministro: "Tielen" },
  { nome: "Nosso Deus", tom: "G", ministro: "Tielen" },
  { nome: "O grito", tom: "C", ministro: "Nicolas" },
  { nome: "Pra sempre", tom: "C", ministro: "Nicolas" },
  { nome: "Vasos Quebrados", tom: "E", ministro: "Keila" },
  { nome: "Na terra como no ceu", tom: "E", ministro: "Keila" },
  { nome: "Vasos Quebrados", tom: "E", ministro: "Ana" },
  { nome: "Sou casa", tom: "E", ministro: "Daniela" },
  { nome: "Em teus bracos", tom: "C", ministro: "Daniela" },
  { nome: "Caminho no Deserto", tom: "C", ministro: "Daniela" },
  { nome: "Eu me rendo", tom: "C", ministro: "Daniela" },
  { nome: "Altar", tom: "C", ministro: "Daniela" },
  { nome: "Quebrantado", tom: "E", ministro: "Eduarda" },
  { nome: "Nosso General e Cristo", tom: "C", ministro: "Tainara" },
  { nome: "E tudo sobre voce", tom: "C", ministro: "Tainara" },
  { nome: "Para onde eu irei", tom: "C", ministro: "Tainara" },
  { nome: "O que sua gloria fez comigo", tom: "C", ministro: "Tainara" },
  { nome: "Pra sempre", tom: "C", ministro: "Tainara" },
  { nome: "Oh quao lindo esse nome e", tom: "C", ministro: "Tainara" },
  { nome: "Ate que o senhor venha", tom: "E", ministro: "Daniela" },
  { nome: "Ate que o senhor venha", tom: "E", ministro: "Kelly" },
  { nome: "Ate que o senhor venha", tom: "E", ministro: "Keila" },
  { nome: "Ate que o senhor venha", tom: "E", ministro: "Tielen" },
  { nome: "Oceanos", tom: "D", ministro: "Daniela" },
  { nome: "Oh quao lindo esse nome e", tom: "D", ministro: "Daniela" },
  { nome: "Cadeias Quebrar", tom: "D", ministro: "Daniela" },
  { nome: "Algo novo", tom: "E", ministro: "Daniela" },
  { nome: "Hosana", tom: "G", ministro: "Daniela" },
  { nome: "Pai nosso", tom: "A", ministro: "Daniela" },
  { nome: "Pai nosso", tom: "E", ministro: "Nicolas" },
  { nome: "Jesus em tua presenca", tom: "D", ministro: "Tainara" },
  { nome: "Mostra-me tua gloria", tom: "A", ministro: "Tainara" },
  { nome: "Digno de tudo", tom: "D", ministro: "Tainara" },
  { nome: "Vim para adorar-te", tom: "D", ministro: "Tainara" },
  { nome: "Leao", tom: "F", ministro: "Keila" },
  { nome: "Ruja o leao", tom: "E", ministro: "Keila" },
  { nome: "Que se abram os ceus", tom: "E", ministro: "Keila" },
  { nome: "Em teu nome", tom: "G", ministro: "Keila" },
  { nome: "Yahweh", tom: "G", ministro: "Keila" },
  { nome: "Jesus em tua presenca", tom: "C", ministro: "Keila" },
  { nome: "Jesus em tua presenca", tom: "C", ministro: "Eduarda" },
  { nome: "Cancao ao cordeiro", tom: "G", ministro: "Keila" },
  { nome: "Eu vou construir", tom: "C", ministro: "Keila" },
  { nome: "Vem derrama", tom: "C", ministro: "Keila" },
  { nome: "Faz chover (abra as comportas dos ceus...)", tom: "C", ministro: "Keila" },
  { nome: "A terra clama", tom: "C", ministro: "Keila" },
  { nome: "Tua alegria e minha forca", tom: "D", ministro: "Tainara" },
  { nome: "Vitorioso es", tom: "D", ministro: "Tainara" },
  { nome: "Jeova Jireh", tom: "D", ministro: "Tainara" },
  { nome: "Furioso Oceano", tom: "D", ministro: "Tainara" },
  { nome: "Que ele cresca", tom: "D", ministro: "Tainara" },
  { nome: "Abraca-me", tom: "D", ministro: "Tainara" },
  { nome: "Clamo Jesus", tom: "D", ministro: "Tielen" },
  { nome: "Vida aos sepulcros", tom: "D", ministro: "Tielen" },
  { nome: "A ele a gloria", tom: "D", ministro: "Tielen" },
  { nome: "Pra sempre", tom: "D", ministro: "Tielen" },
  { nome: "Que se abram os ceus", tom: "D", ministro: "Tielen" },
  { nome: "Redimido", tom: "G", ministro: "Daniela" },
  { nome: "Digno e o Cordeiro", tom: "F", ministro: "Daniela" },
  { nome: "Jesus e o Centro", tom: "C", ministro: "Daniela" },
  { nome: "Em teu nome", tom: "G", ministro: "Daniela" },
  { nome: "Que amor e esse", tom: "G", ministro: "Daniela" },
  { nome: "Teu reino", tom: "G", ministro: "Daniela" },
  { nome: "Graca", tom: "E", ministro: "Ana" },
  { nome: "Salmo 126", tom: "D", ministro: "Ana" },
  { nome: "Eu vou construir", tom: "D", ministro: "Ana" },
  { nome: "Nao seremos abalados", tom: "D", ministro: "Ana" },
  { nome: "Fiel e Deus", tom: "D", ministro: "Ana" },
  { nome: "Altar", tom: "C", ministro: "Eduarda" },
  { nome: "Enche-me", tom: "C", ministro: "Eduarda" },
  { nome: "Pra te adorar eu vivo", tom: "C", ministro: "Eduarda" },
  { nome: "Oh quao lindo esse nome e", tom: "C", ministro: "Eduarda" },
  { nome: "Ate que o senhor venha", tom: "E", ministro: "Eduarda" },
  { nome: "Oceanos", tom: "C", ministro: "Eduarda" },
  { nome: "Vida aos sepulcros", tom: "C", ministro: "Eduarda" },
  { nome: "Deus esta aqui", tom: "C", ministro: "Eduarda" },
  { nome: "Vem espirito de Deus", tom: "C", ministro: "Eduarda" },
  { nome: "Cadeias Quebrar", tom: "C", ministro: "Eduarda" },
  { nome: "Maravilhosa Graca", tom: "G", ministro: "Keila" },
  { nome: "Este e o som da tua noiva", tom: "C", ministro: "Keila" },
  { nome: "Eu so quero tua presenca", tom: "C", ministro: "Keila" },
  { nome: "Meus votos", tom: "C", ministro: "Keila" },
  { nome: "Um milhao de anos", tom: "C", ministro: "Keila" },
  { nome: "Rei do meu coracao", tom: "A", ministro: "Ana" },
  { nome: "Vitorioso es", tom: "G", ministro: "Ana" },
  { nome: "Jeova Jireh", tom: "G", ministro: "Ana" },
  { nome: "Furioso Oceano", tom: "G", ministro: "Ana" },
  { nome: "Que ele cresca", tom: "G", ministro: "Ana" },
  { nome: "Pai nosso", tom: "G", ministro: "Ana" },
  { nome: "Que se abram os ceus", tom: "G", ministro: "Ana" },
  { nome: "Galileu", tom: "C", ministro: "Eduarda" },
  { nome: "Teu reino", tom: "G", ministro: "Eduarda" },
  { nome: "Ruja o leao", tom: "G", ministro: "Eduarda" },
  { nome: "Quero conhecer Jesus", tom: "G", ministro: "Eduarda" },
  { nome: "Pai nosso", tom: "G", ministro: "Eduarda" },
  { nome: "Isaias 9", tom: "G", ministro: "Eduarda" },
  { nome: "Rei da gloria", tom: "C", ministro: "Keila" },
  { nome: "O medo nao vai me parar", tom: "?", ministro: "Tielen" },
  { nome: "Abba", tom: "?", ministro: "Tainara" },
  { nome: "Yeshua (Fernandinho)", tom: "?", ministro: "Tainara" },
  { nome: "Ha um lugar", tom: "?", ministro: "Tainara" },
  { nome: "O nome de Jesus", tom: "?", ministro: "Tainara" },
  { nome: "Nele voce pode confiar", tom: "D", ministro: "Ana" },
  { nome: "Deus igual a ti", tom: "D", ministro: "Ana" },
  { nome: "Alem do impossivel", tom: "D", ministro: "Ana" },
  { nome: "Estamos de pe", tom: "D", ministro: "Keila" },
  { nome: "Milagres", tom: "D", ministro: "Eduarda" },
  { nome: "Vem habitar", tom: "D", ministro: "Eduarda" },
  { nome: "Escudo", tom: "D", ministro: "Eduarda" },
  { nome: "Creio que tu es a Cura", tom: "D", ministro: "Eduarda" },
  { nome: "O que sua gloria fez comigo", tom: "E", ministro: "Tielen" },
  { nome: "Alfa e omega", tom: "A", ministro: "Eduarda" },
  { nome: "Espirito enche minha vida", tom: "A", ministro: "Eduarda" },
  { nome: "Vou te alegrar", tom: "D", ministro: "Eduarda" },
  { nome: "Sem ti nao irei", tom: "C", ministro: "Tainara" },
  { nome: "Mensagem da Cruz", tom: "D", ministro: "Tainara" },
  { nome: "Vim falar com Deus", tom: "G", ministro: "Keila" },
  { nome: "Vitoria no Deserto", tom: "E", ministro: "Keila" },
  { nome: "Oceanos", tom: "D", ministro: "Keila" },
  { nome: "Alem do impossivel", tom: "G", ministro: "Keila" },
  { nome: "Coracao igual ao teu", tom: "E", ministro: "Keila" },
  { nome: "Ele vem", tom: "G", ministro: "Daniela" },
  { nome: "Em seu nome", tom: "C", ministro: "Daniela" },
  { nome: "Falo Jesus", tom: "C", ministro: "Daniela" },
  { nome: "Tu es soberano", tom: "C", ministro: "Daniela" },
  { nome: "Pode morar aqui", tom: "F", ministro: "Daniela" },
  { nome: "Deus provera", tom: "E", ministro: "Tielen" },
  { nome: "Maranata", tom: "C", ministro: "Eduarda" },
  { nome: "Jesus, filho de Deus", tom: "C", ministro: "Eduarda" },
  { nome: "Jesus Vive", tom: "C", ministro: "Eduarda" },
  { nome: "Vencedor", tom: "E", ministro: "Ana" },
  { nome: "Deus esta aqui", tom: "D", ministro: "Ana" },
  { nome: "Jesus Em tua presenca", tom: "D", ministro: "Ana" },
  { nome: "Quao grande", tom: "D", ministro: "Ana" },
  { nome: "Toca em mim de novo", tom: "D", ministro: "Ana" },
  { nome: "Em teu nome", tom: "G", ministro: "Ana" },
  { nome: "Nao seremos abalados", tom: "D", ministro: "Eduarda" },
  { nome: "Fiel e Deus", tom: "D", ministro: "Eduarda" },
  { nome: "Deus de promessas", tom: "D", ministro: "Eduarda" },
  { nome: "Todavia me alegrarei", tom: "D", ministro: "Eduarda" },
  { nome: "Vencedor", tom: "D", ministro: "Eduarda" },
  { nome: "Grandes Coisas", tom: "D", ministro: "Eduarda" },
  { nome: "Ouco Deus me chamar", tom: "G", ministro: "Daniela" },
  { nome: "Vem essa e a hora", tom: "C", ministro: "Keila" },
  { nome: "Eu te louvarei meu bom Jesus", tom: "C", ministro: "Keila" },
  { nome: "Toca em mim de novo", tom: "C", ministro: "Keila" },
  { nome: "Adotado como filho", tom: "D#", ministro: "Keila" },
  { nome: "Eu me rendo (I Surrender)", tom: "E", ministro: "Keila" },
  { nome: "Hey pai", tom: "E", ministro: "Keila" },
  { nome: "Tua igreja canta a ti", tom: "?", ministro: "Tielen" },
  { nome: "Me atraiu", tom: "G", ministro: "Tielen" },
  { nome: "Filho do Deus vivo", tom: "E", ministro: "Eduarda" },
  { nome: "Bondade de Deus", tom: "G", ministro: "Keila" },
  { nome: "Bondade de Deus", tom: "G", ministro: "Eduarda" },
  { nome: "Totalmente Santo", tom: "C", ministro: "Eduarda" },
  { nome: "So tu es santo", tom: "C", ministro: "Eduarda" },
  { nome: "Abba, teu amor nunca falha", tom: "C", ministro: "Eduarda" },
  { nome: "Abra os olhos do meu coracao", tom: "G", ministro: "Eduarda" },
  { nome: "Teu toque", tom: "G", ministro: "Eduarda" },
  { nome: "Tua graca me basta", tom: "G", ministro: "Eduarda" },
  { nome: "Ceus e terra se encontram", tom: "E", ministro: "Tielen" },
  { nome: "Ceus e terra se encontram", tom: "E", ministro: "Eduarda" },
  { nome: "Bom bom pai", tom: "D", ministro: "Tielen" },
  { nome: "Bom perfume", tom: "D", ministro: "Tielen" },
  { nome: "Bom perfume", tom: "D", ministro: "Keila" },
  { nome: "Preciso de Ti", tom: "G", ministro: "Tielen" },
  { nome: "Nos bracos do pai", tom: "G", ministro: "Tielen" },
  { nome: "Outro na fornalha", tom: "E", ministro: "Eduarda" }
];

console.log(louvores);

function buscarLouvores() {
    const tomSelecionado = document.getElementById("Tom").value;
    const ministroSelecionado = document.getElementById("Ministro").value;

    const louvoresFiltrados = louvores.filter(louvor => {
        return (tomSelecionado === 'Qualquer' || louvor.tom === tomSelecionado) &&
            (ministroSelecionado === 'Qualquer' || louvor.ministro === ministroSelecionado);
    });

    mostrarLouvores(louvoresFiltrados);
}

function mostrarLouvores(listaLouvores) {
    const tabelaLouvores = document.getElementById("tabelaLouvores");
    tabelaLouvores.innerHTML = "";

    // Criação dos títulos da tabela
    const tituloRow = document.createElement("tr");
    const tituloNome = document.createElement("th");
    tituloNome.textContent = "Nome";
    const tituloTom = document.createElement("th");
    tituloTom.textContent = "Tom";
    const tituloMinistro = document.createElement("th");
    tituloMinistro.textContent = "Ministro";
    tituloRow.appendChild(tituloNome);
    tituloRow.appendChild(tituloTom);
    tituloRow.appendChild(tituloMinistro);
    tabelaLouvores.appendChild(tituloRow);

    if (listaLouvores.length === 0) {
        const mensagem = document.createElement("tr");
        const colunaMensagem = document.createElement("td");
        colunaMensagem.textContent = "Nenhum louvor encontrado.";
        colunaMensagem.setAttribute("colspan", "3"); // Colspan para ocupar as três colunas
        mensagem.appendChild(colunaMensagem);
        tabelaLouvores.appendChild(mensagem);
    } else {
        listaLouvores.forEach((louvor, index) => {
            const linhaLouvor = document.createElement("tr");
            linhaLouvor.id = `louvor-${index}`; // Adiciona um identificador único para a linha

            const colunaNome = document.createElement("td");
            colunaNome.textContent = louvor.nome;
            linhaLouvor.appendChild(colunaNome);

            const colunaTom = document.createElement("td");
            colunaTom.textContent = louvor.tom;
            linhaLouvor.appendChild(colunaTom);

            const colunaMinistro = document.createElement("td");
            colunaMinistro.textContent = louvor.ministro;
            linhaLouvor.appendChild(colunaMinistro);

            // Adiciona o evento de clique à linha
            linhaLouvor.addEventListener("click", function() {
                const louvorNome = louvor.nome.replace(/\s/g, "+"); // Substitui espaços por "+" no nome do louvor
                const url = `https://www.letras.mus.br/?q=${louvorNome}#gsc.tab=0&gsc.q=${louvorNome}`;
                window.location.href = url; // Redireciona para o URL do louvor
            });

            tabelaLouvores.appendChild(linhaLouvor);
        });
    }
}



// Ao carregar a página, mostramos todos os louvores
window.onload = function () {
    mostrarLouvores(louvores);
};
