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
    Paises.forEach(pais => { // Usado para percorrer arrays, executando uma função para cada elemento do array 
        Paises.sort((a, b) => b.total - a.total); // Serve para ordenar os elementos de um array, nesse caso para ordem decrescente o total de medalhas
    })
    console.log("Ranking de medalhas:");
    Paises.forEach(pais => {
        console.log(`${pais.nome}: ${pais.total} medalhas [${pais.ouro} ouro(s), ${pais.prata} prata(s) e ${pais.bronze} bronze(s)]`)
    })
}

funcaoPrincipal()
