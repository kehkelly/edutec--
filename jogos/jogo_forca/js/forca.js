let jogarNovamente = true;
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 6;

const palavras = [
    palavra001={
        nome : "TEGUMENTAR",
        categoria : "Qual o sistema do corpo humano que possui o maior órgão?"
    },
    palavra002={
        nome : "ONZE",
        categoria : "Quantos sistemas o nosso corpo possui?"
    },
    palavra003={
        nome : "GLANDULAS",
        categoria : "O sistema endócrino é formado por…"
    },
    palavra004={
        nome : "CORACAO",
        categoria : "O principal órgão do sistema cardiovascular é responsável por bombear o sangue, sendo ele:"
    },
    palavra005={
        nome : "ESQUELETICO",
        categoria : "O sistema muscular atua em conjunto com o outro sistema para permitir o movimento. Qual o nome desse sistema?"
    },
    palavra006={
        nome : "DOZE",
        categoria : "Quantas letras tem o nome do sistema responsável pelo transporte de oxigênio pelo corpo ?"
    },
    palavra007={
        nome : "NERVOSO",
        categoria : "Esse istema representa a rede de comunicações do organismo, sendo ele o:"
    },
    palavra008={
        nome : "PELE",
        categoria : "Qual o nome do maior órgão do corpo humano?"
    },
    palavra009={
        nome : "DIGESTORIO",
        categoria : "O esôfago é um órgão que faz parte de qual sistema?"
    },
    palavra010={
        nome : "URINARIO",
        categoria : "Uretra é um órgão pertencente a qual sistema?"
    },
    palavra011={
        nome : "LARINGE",
        categoria : "No sistema respiratório, qual órgão é responsável pela produção da voz?"
    },
    palavra012={
        nome : "RESPIRATORIO",
        categoria : "Rinite, bronquite e asma são doenças que atingem qual sistema?"
    },
    palavra013={
        nome : "RINS",
        categoria : "Qual o principal órgão do sistema urinário?"
    },
    palavra014={
        nome : "CARDIOVASCULAR",
        categoria : "Os capilares estão presentes em qual sistema?"
    },
    palavra015={
        nome : "NERVOSO",
        categoria : "Qual sistema é responsável por captar, processar e gerar respostas?"
    },
    palavra016={
        nome : "NERVOSO",
        categoria : "A doença epilepsia é referente a que sistema?"
    },
    palavra017={
        nome : "HORMONIOS",
        categoria : "O que são liberados pelas glândulas endócrinas?"
    },
    palavra018={
        nome : "HIPOFESE",
        categoria : "No sistema endócrino, que órgão é considerado a glândula mestre?"
    },
    palavra019={
        nome : "PANCREAS",
        categoria : "Em que órgão é produzida a insulina?"
    },
    palavra020={
        nome : "FIGADO",
        categoria : "A Bile é produzida em que órgão?"
    },
    palavra021={
        nome : "OVULO",
        categoria : "No sistema reprodutor feminino, qual o nome do gameta produzido?"
    },
    palavra022={
        nome : "OVARIOS",
        categoria : "Que órgão produz os hormônios sexuais femininos ?"
    },
    palavra023={
        nome : "OVARIOS",
        categoria : "QEndometriose atinge que órgão do sistema reprodutor feminino?"
    },
    palavra024={
        nome : "EPIDERME",
        categoria : "Qual o nome da camada mais externa da pele?"
    },
    palavra025={
        nome : "PELOS",
        categoria : "O que se desenvolve nos folículos pilosos? "
    },
    palavra026={
        nome : "SUOR",
        categoria : "As glândulas sudoríparas produzem o que ?"
    },
    palavra027={
        nome : "ESQUELETICO",
        categoria : "Qual sistema é responsável por dar sustentação ao corpo humano?"
    },
    palavra028={
        nome : "CRANIO",
        categoria : "Que órgão é responsável por proteger o cérebro, além de possuir os órgãos do sentido?"
    },
    palavra029={
        nome : "FEMUR",
        categoria : "Qual o osso mais longo do corpo humano?"
    },
];

criarPalavraSecreta()
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    // console.log(palavraSecretaCategoria)
    // console.log(palavraSecretaSorteada)
};

montarPalvraNaTela();
function montarPalvraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){

    document.getElementById("tecla-" + letra).disabled = true;

    if(tentativas>0){
        mudarStyleLetra("tecla-" + letra, false);
        compararlistas(letra)
        montarPalvraNaTela()
    }
}

function mudarStyleLetra(tecla, condicao){

    if (condicao == false) {
        document.getElementById(tecla).style.background = "#AF0000";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

}

async function compararlistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos<0) {
        tentativas--
        carregaImagemForca();
        
        if (tentativas == 0) {
            abreModal("EITA!!", "Não foi dessa vez ... A palavra era <br> " + palavraSecretaSorteada);
            while (jogarNovamente == true) {
                document.querySelector("#btnReniciar").style.backgroundColor = '#AF0000';
                document.querySelector("#btnReniciar").style.scale = 1.1;
                await atraso(1000)
                document.querySelector("#btnReniciar").style.backgroundColor = '#FFFFFF';
                document.querySelector("#btnReniciar").style.scale = 1;
                await atraso(1000)
            }
        }

    }

    else{
        mudarStyleLetra("tecla-" + letra, true);
        for (i = 0; i < palavraSecretaSorteada.length ; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;

    for (i = 0; i < palavraSecretaSorteada.length ; i++){
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("EBA!!", "Você ganhou... <br> ");
        tentativas = 0;

        while (jogarNovamente == true) {
            document.querySelector("#btnReniciar").style.backgroundColor = '#AF0000';
            document.querySelector("#btnReniciar").style.scale = 1.1;
            await atraso(1000)
            document.querySelector("#btnReniciar").style.backgroundColor = '#FFFFFF';
            document.querySelector("#btnReniciar").style.scale = 1;
            await atraso(1000)
        }
    }
}

async function atraso(tempo) {
    return new Promise(x => setTimeout(x, tempo ));
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLongTitle");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReniciar")
btnReiniciar.addEventListener("click", function Reiniciar(){
    location.reload();
    jogarNovamente = false
});

let Reiniciar = document.querySelector("#jogar-de-novo")
Reiniciar.addEventListener("click", function Reiniciar(){
    location.reload();
    jogarNovamente = false
});