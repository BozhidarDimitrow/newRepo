function solve(array, criteria) {

    let kvp = criteria.split("-");
    let key = kvp[0];
    let value = kvp[1]

    let objArray = JSON.parse(array);
    function filter(input) {
        let count = 0
      input.forEach(element => {
          if (element[key]===value){
              console.log(`${count}. ${element["first_name"]} ${element["last_name"]} - ${element["email"]}`);
              count++
          }
      });
    }

   filter(objArray)
}
solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)