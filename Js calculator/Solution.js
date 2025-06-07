// Variable 'a' , 'b' and sign are already defined.Use them directly

switch (sign){
    case "+":
        console.log(a+b)
        break
    case "-":
        console.log(a-b)
        break
    case "*":
        console.log(a*b)
        break
    case "/":
        b == 0 ? console.log("Invalid operation") :console.log(a/b)
        break
    case "%":
        b == 0 ? console.log("Invalid operation") :console.log(a%b)
        break
    default:
        console.log("Invalid operation")
}