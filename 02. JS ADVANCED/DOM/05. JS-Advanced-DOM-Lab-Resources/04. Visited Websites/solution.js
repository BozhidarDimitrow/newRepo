function solve() {

  const current = document.getElementsByClassName("link-1")[0];
  current.addEventListener(`click`, handler)
  function handler(e) {   
    if(e.target.parentNode.getAttribute("href") === "#" ){
    let changeP = e.target.parentNode.nextElementSibling.textContent
    let counter = Number(changeP.split(" ")[1]);
    counter++
    e.target.parentNode.nextElementSibling.textContent = changeP.split(" ")[0] + " " + counter + " " + changeP.split(" ")[2]
    }
  }

}
