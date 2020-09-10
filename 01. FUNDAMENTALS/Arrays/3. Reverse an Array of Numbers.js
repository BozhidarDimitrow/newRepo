function solve(num, array) {
   
   let newArray = []

   
   for (let i = 0; i < num; i++){
       newArray.push(array[i])
   }
   
let output = "";

for (let i = (newArray.length - 1); i >= 0; i--) {
    output += newArray[i];
    output += " "
}
console.log(output) 


}

solve(2, [66, 43, 75, 89, 47])