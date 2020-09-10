function solve(array) {

    let stotinki = Number(array[0]) * 100;

    let dvaLeva = 0;
    let edinLev = 0;
    let pedesetSt = 0;
    let dvadesetSt = 0;
    let desetSt = 0;
    let petSt = 0;
    let dveSt = 0;
    let ednaSt = 0;
    let moneti = 0;
    while (stotinki > 0) {
        if (stotinki < 1){
            break;
        }
        if (stotinki >= 200) {
            dvaLeva++;
            stotinki = stotinki - 200;
        } else if (stotinki >= 100) {
            edinLev++;
            stotinki = stotinki - 100;
        } else if (stotinki >= 50) {
            pedesetSt++;
            stotinki = stotinki - 50;
        } else if (stotinki >= 20) {
            dvadesetSt++;
            stotinki = stotinki - 20;
        } else if (stotinki >= 10) {
            desetSt++;
            stotinki = stotinki - 10;
        } else if (stotinki >= 5) {
            petSt++;
            stotinki = stotinki - 5;
        } else if (stotinki >= 2) {
            dveSt++;
            stotinki = stotinki - 2;
        } else if (stotinki >= 1) {
            ednaSt++;
            stotinki = stotinki - 1;
        }

    }
    moneti = dvaLeva + edinLev + pedesetSt + dvadesetSt + desetSt + petSt + dveSt + ednaSt;
    console.log(moneti)
}
solve(["0.56"])