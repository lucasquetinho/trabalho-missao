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
            afirmacao:"No começo você achou aquilo muito assustador e não queria saber o que era."

        },
        {
            texto:"Esquisito",
            afirmacao:"No começo, você tnha dúvida do era aquilo e queria saber o que era."

        }
    ]
},

{
    enunciado: "Com dúvida você perguntou ao seu pai o que era aquilo, logo foi respondido a você que aquilo eram diversas algas que cresciam em ambientes poluídos. Aquilo fez você ficar: ",
    alternativas: [
        {
            texto:"Pensativo",
            afirmacao:" Após saber o por que das algas crescerem nos lagos, você continuou pensando naquilo."

        },
        {
            texto:"Empolgado",
            afirmacao:" Após saber o por que das algas crescerem nos lagos, você ficou feliz por saber o motivo e que aquilo poderia ter uma solução."

        }
    ]
},
{
    enunciado:"Chegando em casa, seu pai pergunta se você gostaria de ajuda-lo em uma tarefa de expulsar essas algas, você e responde:",
    alternativas: [
        {
            texto:"É claro",
            afirmacao:"Depois de ser perguntado pelo pai, você aceita, todo empolgado e possuindo uma grande voltade."

        },
        {
            texto:"Hum... tudo bem",
            afirmacao:" Depois de ser perguntado pelo pai, mesmo possuindo um receio, você aceita ajuda-lo."

        }
    ]
},

{
    enunciado: "No lago, você avista um guarda florestal e então pergunta a ele se há alguma forma de previnir esse acidente, ele responde que sim, e que era só não ser depositado dejetos industriais no lago, onvindo isso você fica:",
    alternativas: [
        {
            texto:"Furiosos",
            afirmacao:" Ao saber quer era possível impedir esses incidentes, você fica furioso com as grandes indústrias e se pergunta por que elas não são impedidas"

        },
        {
            texto:"Feliz",
            afirmacao:" Ao saber quer era possível impedir esses incidentes, você fica feliz, entendendo que aquilo era facilmente impedido."

        }
    ]
},
{
    enunciado:"Ao ver o lago limpo e sem nenhuma alga, você se sente:",
    alternativas: [
        {
            texto:"Satisfeito",
            afirmacao:" No final, um sentimento de satisfação o percorre."

        },
        {
            texto:"Feliz, embora recioso",
            afirmacao:" No final, mesmo furioso com as grandes corporações você ainda se ente satisfeito pelo trabalho feito."

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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2001...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();