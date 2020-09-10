

class Card {
    constructor(face, suit) {
        let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let found = false;
        this.error = false;
        for (let i = 0; i < validFaces.length; i++) {
            if (face === validFaces[i]) {
                this.face = face;
                found = true;
                break;
            }
        }
        if (!found) {
            this.error = true;
        }

        switch (suit) {
            case "S":
                this.suit = `\u2660`;
                break;
            case "H":
                this.suit = `\u2665`;
                break;
            case "D":
                this.suit = `\u2666`;
                break;
            case "C":
                this.suit = `\u2663`;
                break;
            default:
                this.error = true;
                break;
        };
    }

    toString() {
        if (this.error) {
            console.log("Error");
        }
        else {
            console.log(`${this.face}${this.suit}`);
        }
    }


}


function checkArray(array) {
    let newArray = []
    let error = false;
    for (let i = 0; i < array.length; i++) {

        let current = array[i];
        if (current.length === 2) {
            face = current[0];
            suit = current[1]
        } else {
            face = current.substring(0, 2);
            suit = current.substring(2);
        }
        let card1 = new Card(face, suit);
        if (card1.error) {
            console.log(`Несъществуваща карта: ${current}`);
            error = true;
            break
        } else {
            newArray.push(`${card1.face}${card1.suit}`)
        }

    }
    if (!error) {
        console.log(newArray.join(" "));
    }
}

checkArray(['5S', '3D', 'QD', '1C'])