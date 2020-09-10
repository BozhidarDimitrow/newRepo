function solve() {
  let input = document.getElementById("input");

  let sentence = input.textContent.split(". ");
  let output = document.getElementById("output")

  for (let i = 0; i < sentence.length; i += 3) {
    const p = document.createElement("p");
    let cuurentPar = sentence[i] + (".")
    if (sentence[i + 1] !== undefined) {
      cuurentPar += sentence[i + 1] + (".")
    }
    if (sentence[i + 2] !== undefined) {
      cuurentPar += sentence[i + 2] + (".")
    }

    p.textContent = cuurentPar
    output.appendChild(p)
  }
  //TODO...
}
