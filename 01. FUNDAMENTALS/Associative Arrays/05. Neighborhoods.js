function solve(array) {

    let map = new Map;
    let neighborhoods = array[0].split(", ")
    for (let neighborhood of neighborhoods){
        map.set(neighborhood, []);
    }

    for (let i = 0; i < array.length; i++){
        let current = array[i].split(" - ");
        let neighborhood = current[0];
        let person = current[1];
        if (neighborhoods.includes(neighborhood)){
            map.get(neighborhood).push(person)
        }
    }

    let sorted = Array.from(map).sort((a,b) => b[1].length - a[1].length);

    for(let kvp of sorted){
       
       
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for(let i = 0; i < kvp[1].length; i++){
            console.log(`--${kvp[1][i]}`)
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])