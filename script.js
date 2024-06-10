const caixaPrincipal = Document.querySelector(".caixaPrincipal");
const caixaPerguntas = Document.querySelector(".caixaPerguntas");
const caixaAlternativas = Document.querySelector(".caixaAlternativas");
const caixaResultados = Document.querySelector(".caixaResultados");
const textoResultado = Document.querySelector(".texto-Resultado");

const Perguntas = [
    {
    enunciado: "João após passar por um lago, reparou que uma parte dele não era água, após perguntar ao seu pai ele descobriu que aquilo verde no lago eram algas invasoras. Você sabe o que são algas invasoras, e se são boas para a vida aquática?",
    Alternativas: [
            "Sim",
            "Não"
        ]
},

{
    enunciado: "Mesmo ja sido repondido, João ainda se perguntava por que aquilo ocorria, até que ele avistou um guarda e foi perguntar. Então o guarda respondeu que aquilo acontece quando á:",
    Alternativas: [
            "Dematamento das margens dos rios",
            "Erosão das margens dos rios",
            "Excesso de nutrientes na água(Correta)",
            "Secas anuais",
            "Alteração constante na água"
        ]
},
{
    enunciado: "Quais são as consequências da proliferação?",
    Alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
},

{
    enunciado: "Existe alguma forma de prevenir",
    Alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
},
{
    enunciado: "Quais medidas podem ser tomadas para controlar?",
    Alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
}
]