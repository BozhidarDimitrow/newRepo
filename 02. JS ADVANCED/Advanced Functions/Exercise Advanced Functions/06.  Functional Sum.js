

let add = (function solution(num) {
   let sum = num;
   return function blq(){
       blq.toString = function(){
        return sum
       }
   }
})()






// add(1)
console.log(add(1)(6)(-3).toString())