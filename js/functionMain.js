function addContent(){
  while (fixedSuggestions.length<12) {
    var index = Math.round(Math.random()*99);
    var indexRepeated = 0
    fixedSuggestions.forEach(item => {
      if (item == index){
        indexRepeated++
      }
    })
    if (indexRepeated == 0 && Animes.data.documents[index].descriptions.en != 0 && Animes.data.documents[index].trailer_url != null) {
      let div = document.createElement("div")
      let cover = document.createElement("img")
      cover.className = Animes.data.documents[index].id
      cover.setAttribute("onclick","go('id',this.className)")
      cover.src = "../image/misaka.jpeg"
      //Animes.data.documents[index].cover_image
      div.append(cover)
      
      let title = document.createElement("h4")
      title.className = Animes.data.documents[index].id
      title.setAttribute("onclick","go('id',this.className)")
      title.append(Animes.data.documents[index].titles.en)
      div.append(title)
      contents.append(div)
      
      fixedSuggestions.push(index)
    }
  }
}
function autoComplete(anime,animesNames) {
      return animesNames.filter((name) => {
             return name.toLowerCase().includes(anime.toLowerCase())
          })
   }
   
function addSuggestions(){
	suggestionsField.innerHTML = ""
	var namesFinds = autoComplete(research.value,animesNames)
	
	namesFinds.forEach(name => {
		let suggestion = document.createElement("option")
          suggestion.value=name
          suggestionsField.append(suggestion)
	})
}

function go(type,value) {
  var animeFind = false
  var idFind = false
  
  Animes.data.documents.forEach( index => {
    if(type == "anime"){
      if (value == index.titles.en) {
        value = index.id 
        animeFind = true
      }
    }
    else if (type == "id") {
      if(value == index.id){
        idFind = true
      }
    }
  })
  
  if (animeFind != true && idFind != true) {
    alert(type+" "+value+" not found in the database")
  } else {
    location.href = "anime.html?id="+value
  }
}