function solve() {
   
   
   document.getElementById("send").addEventListener("click", handler)


   function handler(){

      let message = document.getElementById("chat_input").value;
      let oldMessages = document.getElementById("chat_messages")
      let newDiv = document.createElement("div")
      newDiv.className = "message my-message"
      newDiv.textContent = message
      oldMessages.appendChild(newDiv)
      
      document.getElementById("chat_input").value = ""
   }
   
   
   //TODO...
}


