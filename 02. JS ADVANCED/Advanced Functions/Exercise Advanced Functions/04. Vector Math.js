// let solution = func()
solution = (function func() {
    return {
        add: function (vec1, vec2) {
          return  [vec1[0] + vec2[0], vec1[1] + vec2[1]]
        },
        multiply: function (vec1, num) {
          return ([vec1[0] * num, vec1[1] * num])
        },
        length: function (vec1) {
          return  (Math.sqrt(vec1[0] * vec1[0] + vec1[1] * vec1[1]))
        },
        dot: function (vec1, vec2) {
           return (vec1[0] * vec2[0] + vec1[1] * vec2[1])
        },
        cross: function (vec1, vec2) {
          return  (vec1[0] * vec2[1] - vec1[1] * vec2[0])
        }
    }

})()

solution.add([1, 1], [1, 0]);
solution.multiply([3.5, -2], 2);
solution.length([3, -4]);
solution.dot([1, 0], [0, -1]);
solution.cross([3, 7], [1, 0]);