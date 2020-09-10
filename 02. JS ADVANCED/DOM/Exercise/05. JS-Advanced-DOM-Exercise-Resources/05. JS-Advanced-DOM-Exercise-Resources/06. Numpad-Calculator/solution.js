function solve() {
    document.getElementsByClassName("keys")[0].addEventListener("click", handler)
    document.getElementsByClassName("clear")[0].addEventListener("click", clear);

    function clear() {
        let input = document.getElementById("expressionOutput");
        let result = document.getElementById("resultOutput");
        input.innerHTML = "";
        result.innerHTML = "";
    }


    function handler(e) {
        currentElement = e.target.value;
        let input = document.getElementById("expressionOutput");
        let result = document.getElementById("resultOutput");
        let numArray = []


        if (currentElement === "+" || currentElement === "-" || currentElement === "*" || currentElement === "/") {
            input.innerHTML = input.innerHTML + " " + currentElement + " ";

        } else if (currentElement === "=") {
            let token = input.innerHTML.split(" ")
            let answer = Number(token[0]);
            for (let i = 1; i < token.length; i++) {
                let currentNum = token[i];
                switch (currentNum) {
                    case "+":
                        if (token[i + 1] === "") {
                            result.innerHTML = NaN
                        } else {
                            answer += Number(token[i + 1]);
                            i++;
                            result.innerHTML = answer
                        }
                        break;
                    case "-":
                        if (token[i + 1] === "") {
                            result.innerHTML = NaN
                        } else {
                            answer -= Number(token[i + 1]);
                            i++;
                            result.innerHTML = answer
                        }
                        break;
                    case "*":
                        if (token[i + 1] === "") {
                            result.innerHTML = NaN
                        } else {
                            answer = answer * Number(token[i + 1])
                            i++;
                            result.innerHTML = answer
                        }
                        break;
                    case "/":
                        if (token[i + 1] === "") {
                            result.innerHTML = NaN
                        } else {
                        answer = answer / Number(token[i + 1])
                        i++;
                        result.innerHTML = answer
                    }

                        break;

                }

            }



        } else {
            input.innerHTML = input.innerHTML + currentElement;
        }
    }





    //TODO...
}