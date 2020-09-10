function solve(input) {

    let pattern1 = /([\/][A-Z][A-Za-z][A-Za-z]+[\/])|([=][A-Z][A-Za-z][A-Za-z]+[=])/g;
   
    let validNames = [];

    while (((validName = pattern1.exec(input)) !== null)) {

        validNames.push(validName[0])

    }

    // while ((validName = pattern1.exec(input)) !== null) {
    //     validNames.push(validName[0])
    // }
    let points = 0;
    let destinationsArray = []
    for (let i = 0; i < validNames.length; i++) {
        let token = validNames[i]
        let currentDestination = token.substr(1, token.length - 2);

        points += Number(currentDestination.length);
        destinationsArray.push(currentDestination);
    }

    console.log(`Destinations: ${destinationsArray.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")