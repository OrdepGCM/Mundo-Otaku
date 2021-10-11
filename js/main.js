let page = document.querySelector("#page")
let contents = document.querySelector("#contents")
let research = document.querySelector("#research")
let suggestionsField = document.querySelector("#suggestions-field")
let Animes
let animesNames = []
let fixedSuggestions = []
let suggestionsList = []

research.addEventListener("input", addSuggestions)