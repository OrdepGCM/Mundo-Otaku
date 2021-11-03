
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    Animes = JSON.parse(this.response)
    if (location.href.indexOf("?id=") != -1) {
      let url = location.href.split("=")
      var idAnime = url[1]
      Animes.data.documents.forEach(index => {
        if (idAnime == index.id) {
          Anime = index
        }
      })
    }
    else {
    Animes.data.documents.forEach(index => {
      animesNames.push(index.titles.en)
    })
    };
    addContent()
    setTimeout( () => {
      document.body.classList.toggle("loaded")
    },2000)
  }
}
xhttp.open("GET","https://api.aniapi.com/v1/anime",true)
//xhttp.open("GET", "http://localhost:7700/js/API.json", true);
xhttp.send();

