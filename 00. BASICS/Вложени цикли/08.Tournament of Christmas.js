function solve(array) {
    let days = 0;
    let wins = 0;
    let loses = 0;

    let money = 0;
    let i = 1;
    let j = 2;
    let winDay = 0;
    let lostDay = 0;

    while (days < array[0]) {
        
        let dayMoney = 0;
        wins = 0;
        loses = 0;
        while (array[j] !== "Finish") {
            if (array[j] === "win") {
                wins++;
                dayMoney += 20;
            } else if (array[j] === "lose") {
                loses++
            }
            j++
           
        }

        if (wins > loses) {
            dayMoney = dayMoney * 1.10;
            winDay++
        } else {
            lostDay++
        }
        money = money + dayMoney
        j++
        days++
    }
    if (winDay > lostDay) {
        money = money * 1.20
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`)
    }


}

solve([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ]
  
)