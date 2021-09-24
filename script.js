const inputDiv = document.getElementById("textareaInput");
const outputDiv = document.getElementById("output-div");
const translateButton = document.getElementById("translate-btn");
const translationAPI = `https://api.funtranslations.com/translate/klingon.json?text=`;

translateButton.addEventListener("click", translate);

function translate() {
  let inputData = inputDiv.value;
  fetch(`${translationAPI}${inputData}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let translatedText = json.contents["translated"];
      showOutput(translatedText);
    });
}

function showOutput(translatedText) {
  outputDiv.innerText = translatedText;
  outputDiv.style.display = "block";
}
