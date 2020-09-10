function cinema(type, rows, colums) {
    rows = Number(rows);
    colums = Number(colums);

    switch (type) {
        case "Premiere":
            console.log(`${(rows * colums * 12).toFixed(2)} leva`);
            break;
        case "Normal":
            console.log(`${(rows * colums * 7.5).toFixed(2)} leva`);
            break;
        case "Discount":
            console.log(`${(rows * colums * 5).toFixed(2)} leva`);
            break;
    }
}

cinema("Discount",
"12",
"30")