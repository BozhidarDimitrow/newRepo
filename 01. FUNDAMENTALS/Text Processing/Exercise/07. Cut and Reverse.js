function solve(input) {

    let firstHalf = input.substring(0, (input.length)/2);
    let secondHalf = input.substring((input.length)/2)

    let reverseFirstHalf = ""
    for(let i = firstHalf.length-1; i >= 0; i--){
        let current = firstHalf.charAt(i)
        reverseFirstHalf += current
    }

    let reverseSecondHalf = "";
    for(let i = secondHalf.length-1; i >= 0; i--){
        let current = secondHalf.charAt(i)
        reverseSecondHalf += current
    }

    console.log(reverseFirstHalf);
    console.log(reverseSecondHalf);

    
}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')