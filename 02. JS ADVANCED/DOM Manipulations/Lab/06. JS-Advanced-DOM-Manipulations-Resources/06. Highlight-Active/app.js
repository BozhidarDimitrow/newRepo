function focus() {

    let kutiiki = document.getElementsByTagName("input")
    Array.from(kutiiki).forEach(element => {
        addEventListener(`click`, handler);
    });



    function handler(e) {
        if (e.target.value = "") {
            let tatkoMu = e.target.parentElement
            tatkoMu.classList.add("focused")
            Array.from(kutiiki).forEach(element => {
                addEventListener("click", handlerNov)
            });

            function handlerNov(h) {
                let maikaMu = h.target.parentElement;
                maikaMu.classList.add("focused")
                tatkoMu.classList.remove("focused")
            }
        }
    }

}



