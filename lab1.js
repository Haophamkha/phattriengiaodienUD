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
//3
var dola = 96
var dolb = 108
var dolc = 89

var koaa = 88
var koab = 91
var koac = 110  
DolphinsAvg = (dola+dolb+dolc)/3
KoalasAvg = (koaa+koab+koac)/3

if(DolphinsAvg>KoalasAvg && DolphinsAvg >= 100)
console.log("Dolphins thắng Koalas")
else if(DolphinsAvg<KoalasAvg && KoalasAvg >= 100)
console.log("Dolphins thua Koalas")
else if(DolphinsAvg==KoalasAvg && DolphinsAvg >= 100 && KoalasAvg >= 100)
console.log("Dolphins hòa Koalas")
else 
console.log("Không đội nào thắng")