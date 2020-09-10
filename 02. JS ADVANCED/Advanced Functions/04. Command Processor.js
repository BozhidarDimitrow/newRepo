
function solution() {
    let str = ""

    return { append: function(word){
        str += word
    },
    removeStart: function (n) {
        str.substring(n - 1)
    },
    removeEnd: function (n) {
        str.substring(0, str.length-n)
    },
   print: function () {
        console.log(str);
    }
}

}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()