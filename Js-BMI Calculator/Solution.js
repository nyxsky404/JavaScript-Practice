let BMI = (weight / (height * height)).toFixed(2)

console.log(`Your BMI is ${BMI}`)

if (BMI < 18.5){
    console.log(`Health Category: Underweight`)
}
else if (18.5 <= BMI && BMI< 24.9){
    console.log(`Health Category: Normal weight`)
}
else if (25 <= BMI && BMI < 29.9){
    console.log("Health Category: Overweight")
}
else if (BMI >= 30){
    console.log("Health Category: Obesity")
}