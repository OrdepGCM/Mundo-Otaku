let pageLoad = document.querySelector("#page-load")
let load = document.querySelector("#load")
let page = document.querySelector("#page")
let conteudo = document.querySelector("#conteudo")
let pesquisa = document.querySelector("#pesquisa")
let sugestoes = document.querySelector("#sugestoes")
let timerLoad = 0
let border = 0

loadd()

pesquisa.addEventListener("input", adicionarSugestoes)

function loadd() {
  if (timerLoad >= 20) {
    addCapa()
    pageLoad.style.height = "0"
    page.style.height = "2000px"
    return false
  }
  setTimeout( loadd, 120)
  if (border == 0) {
    load.style.borderRight = "none"
    load.style.borderTop = "dotted #fff"
    border++
  }
  else if (border == 1) {
    load.style.borderBottom = "none"
    load.style.borderRight = "dotted #fff"
    border++
  }
  else if (border == 2) {
    load.style.borderLeft = "none"
    load.style.borderBottom = "dotted #fff"
    border++
  }
  else {
    load.style.borderTop = "none"
    load.style.borderLeft = "dotted #fff"
    border = 0
  }
  timerLoad++
}

function addCapa(){
  for (var i = 0; i < 6; i++) {
    var indice = Math.round(Math.random()*30);
    let capa = document.createElement("img")
    capa.src = Animes.data.documents[indice].cover_image+""
    let div = document.createElement("div")
    let link = document.createElement("label")
    link.append(capa)
    div.append(link)
    
    let titulo = document.createElement("h4")
    titulo.append(Animes.data.documents[indice].titles.en)
    div.append(titulo)
    conteudo.append(div)
  }
}

function adicionarSugestoes(){
  for (var i = 0;i<=100;i++) {
    let letras = pesquisa.value
    
    if(letras.length < 3) {
        sugestoes.innerHTML = ""
    }
    else if(Animes.data.documents[i].titles.en.toLowerCase().indexOf(pesquisa.value.toLowerCase()) != -1) {
      
      if (document.querySelectorAll("option").length > 0) {
        if(document.querySelector("option").value != Animes.data.documents[i].titles.en) {
          let sugestao = document.createElement("option")
          
          sugestao.value=Animes.data.documents[i].titles.en
          sugestoes.append(sugestao)
        }
      }
      else {
        let sugestao = document.createElement("option")
        sugestao.value=Animes.data.documents[i].titles.en
        sugestoes.append(sugestao)
      }
    }
  }
}

function ir(id) {
  location.href = "anime.html?"+id
}