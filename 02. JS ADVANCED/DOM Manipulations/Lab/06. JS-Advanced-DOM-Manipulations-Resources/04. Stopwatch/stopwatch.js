function stopwatch() {

    let startButton = document.getElementById("startBtn")
    startButton.addEventListener("click", startFunc);
    let stopButton = document.getElementById("stopBtn")

    let timer = document.getElementById("time");
    
   let counter = 0
   
    function startFunc() {
       timer.innerHTML = "00:00"
        startButton.disabled = true
        stopButton.disabled = false
       
        stopButton.addEventListener("click", stopFunc);
        let interval = setInterval(
            function () {
                counter++
                if (counter < 10) {
                    timer.innerHTML = `00:0${counter}`
                } else if (counter < 60) {
                    timer.innerHTML = `00:${counter}`
                } else {
                    if (counter % 60 < 10) {
                        timer.innerHTML = `0${Math.floor(counter / 60)}:0${counter % 60}`
                    } else {
                        timer.innerHTML = `0${Math.floor(counter / 60)}:${counter % 60}`
                    }
                }
            }, 1000
        )

        function stopFunc() {
            clearInterval(interval);
            // timer.innerHTML = "01:23"
            stopButton.disabled = true
            startButton.disabled = false
            counter = 0
        }

    }

}