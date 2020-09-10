function toggle() {
   
   let button = document.getElementsByClassName("button")[0];
   let text = document.querySelector(`#extra`)
    // let style = getComputedStyle(text)

   if (text.style.display === "none"){
      text.style.display = "block"
       button.innerHTML = "Less"
   } else {
     text.style.display = "none"
       button.innerHTML = "More"
   }
   
  
}