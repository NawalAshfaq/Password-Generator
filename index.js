
let count = []


let choice = {
  numbers : ["0","1","2","3","4","5","6","7","8","9"],
  upperCaseChar : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerCaseChar : ["a","b","c","d","e","f","g","h","i","j", "k","l","m","n","o","p","q","r","s","t",],
  specialChar : ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]","{", "}", "|", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/", "`", "~"]
} 
let inputEl = document.getElementById("input-el")
let msg = true
 let input = 0 
 

function myfunction(){
  input = prompt("Enter the amount of characters you want for your password. NOTE: Must be between 8-128 characters")
  //  inputEl.textContent = input
  if(input>=8 && input<=128){
        msg = confirm("Would you like to include NUMBERS?")
       getrandomnumber()
     if (msg=== true || msg === false) {
     msg = confirm("Would you like to include UPPERCASE characters?")
     if(msg=== true || msg === false){
     getrandomchar()}
  }
  if (msg=== true || msg === false) {
     msg = confirm("Would you like to include LOWERCASE characters?")}
      if(msg=== true || msg === false){
     getrandomlowerchar()}

   if (msg=== true || msg === false) {
     msg = confirm("Would you like to include SPECIAL characters?")}
       if(msg=== true || msg === false){
     getrandomspecialchar()}
     
  if (msg=== true || msg === false) { 
     getfinalrandom()
  }
}
    else alert("You need to provide a valid length!") 
}

function getrandomnumber(){
  if(msg === true){
    for (let i = 0; i < input; i++) {
      let num = Math.floor(Math.random() * choice.numbers.length)
      inputEl.value+=choice.numbers[num]
    }
  }
}


function getrandomchar(){
   if(msg === true){
         for (let i = 0; i < input; i++) {
          let num = Math.floor(Math.random() * choice.upperCaseChar.length)
         inputEl.value+=choice.upperCaseChar[num] }}
}

function getrandomlowerchar(){
   if(msg === true){
         for (let i = 0; i < input; i++) {
          let num = Math.floor(Math.random() * choice.lowerCaseChar.length)
         inputEl.value+=choice.lowerCaseChar[num] }}
}

function getrandomspecialchar(){
   if(msg === true){
         for (let i = 0; i < input; i++) {
          let num = Math.floor(Math.random() * choice.specialChar.length)
         inputEl.value+=choice.specialChar[num] }}
}

function getfinalrandom(){
     if(msg === true){
    count =  inputEl.value.split("") 
    inputEl.value= ""
         for (let i = 0; i < input; i++) {
          let num = Math.floor(Math.random() * count.length)
         inputEl.value+=count[num] }}
}

function mycopy(){
    let copy = inputEl.value
    alert("Your password has been copied!")
    navigator.clipboard.writeText(copy) 
}