function attachGradientEvents() {

    let kutiika = document.getElementById("gradient")

    document.getElementById("gradient").addEventListener("mousemove", handler)

    function handler(x) {
       let position = x.offsetX
        let shirina = x.target.clientWidth
        let result = document.getElementById("result");
        result.innerHTML = Math.floor(position/shirina * 100) + "%"
    }

}