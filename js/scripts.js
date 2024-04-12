const textInputField = document.querySelector(`#text-input`)
const form = document.querySelector(`#form`)
const utterThis = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
let sayThis = ""

const checkBrowserCompatibility = () => {
    "speechSynthesis" in window
      ? console.log("Web Speech API supported!")
      : console.log("Web Speech API not supported :-(")
  }
  
  checkBrowserCompatibility()
  
  form.onsubmit = (event) => {
    event.preventDefault()
    sayThis = textInputField.value
    utterThis.text = sayThis
    synth.speak(utterThis)
    textInputField.value = ""
  }