const form = document.querySelector('#form-atividade');
const nomeAtividade = document.querySelector('#nomeAtividade');
const nota = document.querySelector('#nota');
const tbody = document.querySelector('tbody');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const tfoot = document.querySelector('tfoot');
const notaMinima = parseInt(prompt("Digite a nota mínima: "))
let atividades = [];
let atividadeExiste;
let resultado;
let contagem = 0;
let totalNotas = 0;
let media = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (atividades.includes(nomeAtividade.value)) {
        alert("Essa atividade já existe!")
    } else {
        atividades.push(nomeAtividade.value)

        contagem++;
        totalNotas += parseInt(nota.value);
        media = totalNotas/contagem;
    
        let novaLinha = `<tr>
        <td>${nomeAtividade.value}</td>
        <td>${nota.value}</td>
        <td>${nota.value >= notaMinima ? imgAprovado : imgReprovado}</td>
        </tr>`
    
        tbody.innerHTML += novaLinha
    
        tfoot.innerHTML = `<tr>
        <td>Média final</td>
        <td>${media.toFixed(2)}</td>
        <td><span class=${media >= notaMinima ? '"resultado aprovado">Aprovado' : '"resultado reprovado">Reprovado'}</span></td>
        </tr>`
    }

    nomeAtividade.value = '';
    nota.value = '';

})