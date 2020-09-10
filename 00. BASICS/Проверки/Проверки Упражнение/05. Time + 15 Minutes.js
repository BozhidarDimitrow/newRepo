function watch(a, b) {
    a = Number(a);
    b = Number(b);
    
    let hours = a;
    let minutes = b + 15;
       
    if (minutes >= 60) {
        hours = hours + 1
    }
    if (hours > 23){
        hours = 0
    }
    minutes = minutes % 60;


    if ( minutes < 10) {
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }
}

watch("12", "49")