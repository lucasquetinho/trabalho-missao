const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Quando você era criança, você percebeu que alguns lagos da sua cidade estavam sendo tomados por algum tipo de planta e achou aquilo:",
    alternativas: [
        {
            texto:"Assustador",
            afirmacao:[
                " No começo você achou aquilo muito assustador e não queria saber o que era.",
                " No começo, quando viu aquilo, você sentiu um sentimento muito estranho."
            ]
        },
        {
            texto:"Esquisito",
            afirmacao:[
                " No começo, você tnha dúvida do era aquilo e queria saber o que era.",
                " Quando viu as algas pela primeira vez, você tinha uma grande vontade de descobrir o que era aquilo."
            ]
        }
    ]
},

{
    enunciado: "Com dúvida você perguntou ao seu pai o que era aquilo, logo foi respondido a você que aquilo eram diversas algas que cresciam em ambientes poluídos. Aquilo fez você ficar: ",
    alternativas: [
        {
            texto:"Pensativo",
            afirmacao:[
                "Após saber o por que das algas crescerem nos lagos, você continuou pensando naquilo.",
                " Ao saber que aquilo eram algas, um pensamento de dúvida o percorreu, aliás, para você só existiam algas de baixo d'água.",
                " Pensando nas algas, as únicas coisas que ainda te deixavam dúvidas, eram os motivos daquilo acontecer."
            ]    
        },
        {
            texto:"Empolgado",
            afirmacao:[
                " Após saber o por que das algas crescerem nos lagos, você ficou feliz.",
                " Sabendo que aquilo verde em cima do lago eram algas, o único pensamento que você teve foi de que aquilo seria muito fácil de resolver."  
            ]
        }
    ]
},
{
    enunciado:"Chegando em casa, seu pai pergunta se você gostaria de ajuda-lo em uma tarefa de expulsar essas algas, você e responde:",
    alternativas: [
        {
            texto:"É claro",
            afirmacao:[
                " Depois de ser perguntado pelo pai, você aceita, todo empolgado e possuindo uma grande voltade de ajudá-lo.",
                " Recebendo a propósta de ajuda, você não pensa duas vezes e aceita."
            ]
        },
        {
            texto:"Hum... tudo bem",
            afirmacao:[
                " Depois de ser perguntado pelo pai, mesmo possuindo um receio, você aceita ajudá-lo.",
                " Mesmo estando com medo, você aceitou ajudar seu pai."
            ]
        }
    ]
},

{
    enunciado: "No lago, você avista um guarda florestal e então pergunta a ele se há alguma forma de previnir esse acidente, ele responde que sim, e que era só não ser depositado dejetos industriais no lago, onvindo isso você fica:",
    alternativas: [
        {
            texto:"Furiosos",
            afirmacao:[
                " Ao saber quer era possível impedir esses incidentes, você fica furioso com as grandes indústrias e se pergunta por que elas não são impedidas",
                " Descobrindo que o lago poderia ser insento daquilo, você fica furioso, imaginando o que os peixes do lago passaram"
            ]
        },
        {
            texto:"Feliz",
            afirmacao:[
                " Ao saber quer era possível impedir esses incidentes, você fica feliz, entendendo que aquilo era facilmente impedido.",
                " Ao descrobir que era possível impedir esses incidentes, você sente um alívio.",
                " Quando descobriu como impedir aquilo, você se sentiu muito contente e motivado."
            ]
        }
    ]
},
{
    enunciado:"Ao ver o lago limpo e sem nenhuma alga, você se sente:",
    alternativas: [
        {
            texto:"Satisfeito",
            afirmacao:[
                " No final, um sentimento de satisfação o percorre.",
                " Você ficou muito aliviado e satisfeito, com o bom trabalho que fez."
            ]
        },
        {
            texto:"Feliz, embora recioso",
            afirmacao:[
                " No final, mesmo furioso com as grandes corporações você ainda se sente satisfeito pelo trabalho feito.",
                " Pensado bem, você decide que quando ficasse mais velho tentaria ajudar a mudar isso com mais frequência."
            ]
        }
    ]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2001...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

mostraPergunta();