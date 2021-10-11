function addContent() {
  let banner = document.createElement("img")
  banner.src = "../image/misakaBan.jpeg"
  bannerAnime.append(banner)
  
  let div = document.createElement("div")
  let cover = document.createElement("img")
  cover.src = "../image/misaka.jpeg"
  div.append(cover)
  coverAnime.append(div)
  
  let title = document.createElement("h2")
  title.append(Anime.titles.en)
  titleAnime.append(title)
  
  let statusFormat = document.createElement("p")
  let AnimeFormat = document.createTextNode
  if (Anime.format == 0 || Anime.format == 5) {
    AnimeFormat = "Animes"
  }
  else if (Anime.format == 1) {
    AnimeFormat = "Anime Short"
  }
  else if (Anime.format == 2) {
    AnimeFormat = "Movie"
  }
  else if (Anime.format == 3) {
    AnimeFormat = "Special"
  }
  else if (Anime.format == 4) {
    AnimeFormat = "OVA"
  }
  else {
    AnimeFormat = "Music"
  }
  statusFormat.append(AnimeFormat)
  statusAnime.append(statusFormat)
  
  let statusProduction = document.createElement("p")
  let production = document.createTextNode
  if (Anime.status == 0) {
    production = "Finished"
  }
  else if (Anime.status == 1) {
    production = "Releasing"
    statusProduction.style.backgroundColor = "#070"
  }
  else if (Anime.status == 2) {
    production ="Not Yet Released"
  }
  else {
    production = "Cancelled"
  }
  statusProduction.append(production)
  statusAnime.append(statusProduction)
  
  let fieldInformations = document.createElement("dl")
  let titleField = document.createElement("dt")
  let fieldTitle = document.createElement("h4")
  let textTitle = document.createTextNode("Informations the anime")
  fieldTitle.append(textTitle)
  titleField.append(fieldTitle)
  fieldInformations.append(titleField)
  
  let year = document.createTextNode("Year release: "+Anime.season_year)
  let yearRelease = document.createElement("dd")
  yearRelease.append(year)
  fieldInformations.append(yearRelease)
  
  let episodes = document.createTextNode("Number of episodes: "+Anime.episodes_count)
  let numberEpisodes = document.createElement("dd")
  numberEpisodes.append(episodes)
  fieldInformations.append(numberEpisodes)
  
  let duration = document.createTextNode("Duration of episodes: "+Anime.episode_duration+"min")
  let episodeDuration = document.createElement("dd")
  episodeDuration.append(duration)
  fieldInformations.append(episodeDuration)
  
  informationsAnime.append(fieldInformations)
  
  let description = document.createElement("p")
  description.innerHTML = Anime.descriptions.en
  descriptionAnime.append(description)
  
  trailerAnime.src = "../image/misakaBan.jpeg"
  trailerAnime.setAttribute("allowfullscreen",true)
}