

const url = "https://rickandmortyapi.com/api/"

async function getRequisicao(req){
    const response = await fetch(url+req)
    const dados = await response.json()
    return dados
}


async function AdicionaCards(x) {
    
  const dados = await getRequisicao('/'+x+'/')
    let nome = dados.results.map(nome=>nome.name)
    let imagem = dados.results.map(imagem => imagem.image)
    let status = dados.results.map(titulo => titulo.status)
    let adiciona = ""
    let card = document.querySelector(".container")

    for (let i = 0; i < nome.length; i++) {

        adiciona +=
            `
        <div class="cardGroup">
            <div class="card">
                <div class="imgCard">
                    <img src="${imagem[i]}" alt="">
                </div>
                <div class="cardBody">
                    <h5 class="cardTitle">${nome[i]}</h5>
                    <p class="carText"> ${status[i]}</p>
                </div>
            </div>
        </div>
            `
    }
    card.innerHTML = adiciona;
}


function atualizaConteudo(x){
limpar();
    if(x == "C"){
        AdicionaCards("character");
    }
    else if(x == "P"){
        AdicionaCards("location");
    }
    else{
        console.log("essa pagina não existe")
    }
}
 
limpar = () => {
    document.querySelector(".container").innerHTML = ""
}