/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

function funcaoPrincipal(){
    var Paises = [];
    while(true){
        let nome = prompt('Digite o nome do país (ou sair para finalizar):')
        if (nome.toLowerCase() === "sair") {
            break;
        }

        let ouro = parseInt(prompt('Digite a quantidade de ouros: '))
        let prata = parseInt(prompt('Digite a quantidade de pratas: '))
        let bronze = parseInt(prompt('Digite a quantidade de bronzes: '))

        const pais = {
            nome: nome,
            ouro: ouro,
            prata: prata,
            bronze: bronze,
            total: ouro + prata + bronze
        }
        Paises.push(pais)
    }
    imprimirRanking(Paises)
}

function imprimirRanking(Paises){
    Paises.forEach(pais => { // Usado para percorrer arrays, executando uma função para cada elemento do array.
        Paises.sort((a, b) => b.total - a.total);
    })
    console.log("Ranking de medalhas:");
    Paises.forEach(pais => {
        console.log(`${pais.nome}: ${pais.total} Medalhas (${pais.ouro} ouro(s), ${pais.prata} prata(s) e ${pais.bronze} bronze(s))`)
    })
}

funcaoPrincipal()