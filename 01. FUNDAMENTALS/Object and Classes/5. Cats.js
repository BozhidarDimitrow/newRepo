function solve(array) {
    let cats = []
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age
            this.speak = () => {
                console.log(`${name}, age ${age} says Meow`)
            }
        }
      
        


    }

    for (let i = 0; i < array.length; i++) {
        let catData = array[i].split(" ");
        let name, age;
        [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }

    
    for (let element of cats) {
        element.speak()
    }


    


}
solve(['Mellow 2', 'Tom 5'])