function fetchLyrics(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");

  let apiKey = "aa8t7e70fb21d2d41f6fo0b32468a4f3";
  let prompt = `Generate the summary, meaning and theme of the requested artist and song in the search bars ${searchInput.value} and provide the information in basic HTML form and seperate each line with <br />`;
  let context =
    "You are a very knowledgeable AI tool on various songs, meanings, its themes and summaries";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(loadText);
}

function loadText(response) {
  new Typewriter("#lyricText", {
    strings: response.data.answer,
    autoStart: true,
    curser: null,
    delay: 20,
  });
}

let search = document.querySelector("#search-button");
search.addEventListener("click", fetchLyrics);
