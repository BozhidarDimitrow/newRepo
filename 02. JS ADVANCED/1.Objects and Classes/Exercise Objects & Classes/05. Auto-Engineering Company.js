function solve(input) {

    let factoryObj = {};

    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(" | ");
        let brand = token[0];
        let model = token[1];
        let count = Number(token[2]);
        if (factoryObj[brand] === undefined) {
            factoryObj[brand] = [model, count];
        } else {
            let exist = false
            for (let j = 0; j < factoryObj[brand].length; j += 2){               
                let currentModel = factoryObj[brand][j];
                let currentCount = factoryObj[brand][j+1]
                
                if(currentModel === model){
                    let newCount = currentCount + count
                    factoryObj[brand].splice(j,2,currentModel,newCount)
                    exist = true;
                }
            }
            if (!exist){
                factoryObj[brand].push(model, count)
            }
        }

    }
    for (let key in factoryObj) {
        console.log(key);
        for(let i = 0; i <factoryObj[key].length; i+=2){
            console.log(`###${factoryObj[key][i]} -> ${factoryObj[key][i+1]}`);
        }
    }

}
solve(["Mercedes-Benz | 50PS | 123",
    "Mini | Clubman | 20000",
    "Mini | Convertible | 1000",
    "Mercedes-Benz | 60PS | 3000",
    "Hyunday | Elantra GT | 20000",
    "Mini | Countryman | 100",
    "Mercedes-Benz | W210 | 100",
    "Mini | Clubman | 1000",
    "Mercedes-Benz | W163 | 200"])