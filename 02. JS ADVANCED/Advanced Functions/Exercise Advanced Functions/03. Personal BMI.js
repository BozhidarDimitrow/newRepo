function solve(name, age, weight, height) {

    let status = ""


    let bmi = (weight / (((height) / 100) * ((height) / 100)))
    if (bmi < 18.5) {
        status = "underweight";
    } else if (bmi < 25) {
        status = "normal"
    } else if (bmi < 30) {
        status = "overweight"
    } else {
        status = "obese"
    }

    let personalInfo = { "age": age, "weight": weight, "height": height }
    let object = { "name": name, "personalInfo": personalInfo,"BMI": Number(bmi.toFixed(0)) ,"status": status }

    if (status === "obese"){
        object["recommendation"] = 'admission required'
    }



       console.log(object)
}
solve("Vanko", 47, 81, 180)