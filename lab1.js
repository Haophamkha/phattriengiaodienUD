//JF1
//1
var massMark = 78
var heightMark = 1.69
var BMIMark = massMark/(heightMark*heightMark)

var massJohn = 92
var heightJohn = 1.95
var BMIJohn = massJohn/(heightJohn*heightJohn)

var markHigherBMI = BMIMark > BMIJohn 
//2
if(markHigherBMI ==true)
    console.log(`BMI của Mark (${BMIMark.toFixed(1)}) is cao hơn của John (${BMIJohn.toFixed(1)})!`)
else
    console.log(`BMI của John (${BMIJohn.toFixed(1)}) is cao hơn của Mark (${BMIMark.toFixed(1)})!`);