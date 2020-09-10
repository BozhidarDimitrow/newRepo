function factoriel(num) {
    num = Number(num);
    let factoriel = 1

    for (let i = 1; i <= num; i++) {
        factoriel = factoriel * i;
    }
    console.log(factoriel)
}

factoriel("4")