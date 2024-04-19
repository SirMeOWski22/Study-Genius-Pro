const textInput = document.querySelector('.textarea');
const studyContent = document.querySelector('#studyContent');
const utterThis = new SpeechSynthesisUtterance();
const synth = window.speechSynthesis;
let speakText = '';

function textToSpeech() {
  speakText = textInput.value;
  utterThis.text = speakText;
  synth.speak(utterThis);
  textInput.value = '';
}

const speakButton = document.querySelector('#speak-button');
speakButton.addEventListener('click', textToSpeech);
 
function flipCard(flipButton) {
  const card = flipButton.closest('.study-card');
  card.classList.toggle('flipped');
}

async function getToken() {
  console.log("Calling getToken!");
  const headersObj = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${btoa(
      `b9bb37e8b2a54a508b6cb8940440243b:cbb8435b6fb84099825819fb12220fc8`
    ).toString("base64")}`,
    json: true,
  };
 return fetch(
    "https://accounts.spotify.com/api/token?grant_type=client_credentials",
    {
      method: "POST",
      headers: headersObj,
    }
  )
    .then(function (response) {
      console.log("Response:", response);
      return response.json();
    })
    .then(function (data) {
      console.log("Data", data);
      return data;
    })
};

let savedToken = await getToken()
 