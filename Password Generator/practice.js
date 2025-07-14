let inputEl = document.getElementById("input-el")
let msg = true
 let input = 0 
 


function getfinalrandom(){
     if(msg === true){
      let count = inputEl.value
         for (let i = 0; i < input; i++) {
          let num = Math.floor(Math.random() * count.length)
         inputEl.value+=count[num] }}
}

