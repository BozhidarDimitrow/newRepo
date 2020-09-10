function solve(array) {

    class Employees {

        constructor(name, persNum) {
            this.name = name;
            this.persNum = persNum;
        }
    }
    let empl = []

    for (let i = 0; i < array.length; i++){
        let employee = Array(String(array[i]))
        let name, persNum;
        [name, persNum] = [array[i], employee[0].length];
        empl.push(new Employees(name, persNum));
    }

    empl.forEach((i) => console.log(`Name: ${i.name} -- Personal Number: ${i.persNum}`))

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])