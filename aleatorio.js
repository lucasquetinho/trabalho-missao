const nomes = ["Pedro", "Fernanda", "João", "Marcelo", "Paula", "Joana"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

const nome = aleatorio(nomes);