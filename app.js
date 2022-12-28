var btnTranslate = document.querySelector(".btn-translate");

var txtInput = document.querySelector("#textArea");
var output = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslateURL(text) {
    return serverURL + "?" + "text=" +text
}
console.log(getTranslateURL)

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslateURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText; 
           })
};

btnTranslate.addEventListener("click", clickHandler)



