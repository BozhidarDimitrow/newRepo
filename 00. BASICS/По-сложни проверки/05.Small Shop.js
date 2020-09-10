function smallShop(prod, city, num) {
    num = Number(num);
    if (prod === "coffee") {
        switch (city) {
            case "Varna":
                console.log((0.45 * num).toFixed(2));
                break;
            case "Sofia":
                console.log((0.5 * num).toFixed(2));
                break;
            case "Plovdiv":
                console.log((0.4 * num).toFixed(2));
                break;

        }
    }
    if (prod === "water") {
        switch (city) {
            case "Varna":
                console.log((0.7 * num).toFixed(2));
                break;
            case "Sofia":
                console.log((0.8 * num).toFixed(2));
                break;
            case "Plovdiv":
                console.log((0.7 * num).toFixed(2));
                break;

        }
    }
    if (prod === "beer") {
        switch (city) {
            case "Varna":
                console.log((1.1 * num).toFixed(2));
                break;
            case "Sofia":
                console.log((1.2 * num).toFixed(2));
                break;
            case "Plovdiv":
                console.log((1.15 * num).toFixed(2));
                break;

        }
    }
    if (prod === "sweets") {
        switch (city) {
            case "Varna":
                console.log((1.35 * num).toFixed(2));
                break;
            case "Sofia":
                console.log((1.45 * num).toFixed(2));
                break;
            case "Plovdiv":
                console.log((1.3 * num).toFixed(2));
                break;

        }
    }
    if (prod === "peanuts") {
        switch (city) {
            case "Varna":
                console.log((1.55 * num).toFixed(2));
                break;
            case "Sofia":
                console.log((1.60 * num).toFixed(2));
                break;
            case "Plovdiv":
                console.log((1.5 * num).toFixed(2));
                break;

        }
    }
}
smallShop("sweets",
"Sofia",
"2.23")