const parag = document.querySelector('.final-section-text');

function getDate() {
    const ano = new Date();
    const ano_atual = ano.getFullYear();
    return ano_atual;
}

parag.innerHTML = `${getDate()} © Gabriel Carvalho. Todos os direitos reservados.`;