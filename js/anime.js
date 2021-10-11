let pageLoad = document.querySelector("#page-load")
let load = document.querySelector("#load")
let page = document.querySelector("#page")
let timerLoad = 0
let border = 0

loadd()

let url = location.href.split("?")
let anime = {id:JSON.parse(url[1])}

function loadd() {
  if (timerLoad >= 20) {
    pageLoad.style.height = "0"
    page.style.height = "600px"
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

console.log(url);
console.log(anime);