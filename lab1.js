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
//4
var bill = 275
var tip
if(bill>=50 && bill <=300)
    tip=bill*0.2
else 
    tip=bill*0.15

    console.log(`The bill was ${bill.toFixed(2)}, The tip was ${tip.toFixed(2)}, The total was ${(bill + tip).toFixed(2)}`)
    //JF2
    //1
    var calAverage = (a,b,c) => (a+b+c)/3
    dola = 44
    dolb = 23
    dolc = 71
    
    koaa = 65
    koab = 54
    koac = 49
    var avgDolphins = calAverage(dola,dolb,dolc)
    var avgKoalas = calAverage(koaa,koab,koac)
    
    function checkWinner(avgDolphins,avgKoalas){
        if (avgDolphins >= 2 * avgKoalas) {
            console.log(`Dolphins thắng (${avgDolphins} vs ${avgKoalas})`);
        } else if (avgKoalas >= 2 * avgDolphins) {
            console.log(`Koalas thắng (${avgKoalas} vs ${avgDolphins})`);
        } else {
            console.log("Không đội nào thắng!");
        }
        
    }
    checkWinner(avgDolphins,avgKoalas)
    //2
    function calcTip(bill){
        return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
    }
    console.log("calcTip(100) = " + calcTip(100))
    var bills = [125, 555, 44]
    var tips = bills.map(calcTip)
    var total = bills.map((bill, i) => bill + tips[i])


    console.log("Hóa đơn:", bills)
    console.log("Tiền tip:", tips)
    console.log("Total:", total)
   //3
    var MarkMiller = {
            
            fullname: "Mark Miller",
            mass: 78,
            height: 1.69,
            calcBMI: function(){
                this.BMI = this.mass / (this.height ** 2)
                return this.BMI
            }
    }
    var  JohnSmith = {
        
            fullname: "John Smith",
            mass: 92,
            height: 1.95,
            calcBMI: function(){
                this.BMI = this.mass / (this.height ** 2)
                return this.BMI
            }
    }
    MarkMiller.calcBMI()
    JohnSmith.calcBMI()
    if (MarkMiller.BMI > JohnSmith.BMI) {
        console.log(`${MarkMiller.fullname} có BMI cao hơn ${JohnSmith.fullname} (${MarkMiller.BMI.toFixed(1)} vs ${JohnSmith.BMI.toFixed(1)})`)
    } else if (JohnSmith.BMI > MarkMiller.BMI) {
        console.log(`${JohnSmith.fullname} có BMI cao hơn ${MarkMiller.fullname} (${JohnSmith.BMI.toFixed(1)} vs ${MarkMiller.BMI.toFixed(1)})`)
    }
    else {
            console.log(`${MarkMiller.fullname} và ${JohnSmith.fullname} có BMI bằng nhau (${MarkMiller.BMI.toFixed(1)} vs ${JohnSmith.BMI.toFixed(1)})`)
        }
    

    
    

   
