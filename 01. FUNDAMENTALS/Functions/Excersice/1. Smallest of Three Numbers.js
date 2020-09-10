
   function getsmallet(a, b, c) {
        if (a < b && a < c) {
            return a;
        } else if (b < a && b < c){
            return b;
        } else {
            return c;
        }
    }

console.log(getsmallet(600, 342, 123))



