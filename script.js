const caixaPrincipal = Document.querySelector(".caixa-principal");
const caixaPerguntas = Document.querySelector(".caixa-perguntas");
const caixaAlternativas = Document.querySelector(".caixa-alternativas");
const caixaResultados = Document.querySelector(".caixa-resultados");
const textoResultado = Document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "olá",
    alternativas: [
        {
            texto:"Isso é assustador",
            afirmação: "afirmacao"

        },
        {
            texto:"Isso é assustador",
            afirmação: "afirmacao"

        }
        ]
},

{
    enunciado: "Mesmo ja  tendo sido repondido, João ainda se perguntava por que aquilo ocorria, até que ele avistou um guarda e foi perguntar. Então o guarda respondeu que aquilo acontece quando á:",
    alternativas: [
        {
            texto:"Isso é assustador",
            afirmação: "afirmacao"

        },
        {
            texto:"Isso é assustador",
            afirmação: "afirmacao"

        }
        ]
},
{
    enunciado: "Quais são as consequências da proliferação?",
    alternativas: [
        {
            texto:"Isso é assustador",
            afirmação: "afirmacao"

        },
        {
            texto:"Isso é assustador",
            afirmação: "afirmacao"

        }
        ]
},

{
    enunciado: "Existe alguma forma de prevenir",
    alternativas: [
        {
        texto:"Isso é assustador",
        afirmação: "afirmacao"

    },
    {
        texto:"Isso é assustador",
        afirmação: "afirmacao"

    }
        ]
},
{
    enunciado: "Quais medid[as podem ser tomadas para controlar?",
    alternativas: [
        {
        texto:"Isso é assustador",
        afirmação: "afirmacao"

    },
    {
        texto:"Isso é assustador",
        afirmação: "afirmacao"

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

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
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
    historia += afirmacoes + "";
    atual++;
    mostraPergunta();
}

mostraPergunta();