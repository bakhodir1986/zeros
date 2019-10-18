var f = [];

function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = BigInt(factorial(n - 1)) * BigInt(n);
}

var fd = [];

function factorialDouble(n) {
    if (n == 0 || n == 1)
        return 1;
    if (fd[n] > 0)
        return fd[n];
    return fd[n] = BigInt(factorialDouble(n - 2)) * BigInt(n);
}

module.exports = function zeros(expression) {
    // your solution
    console.log(expression)
    var expMassiv = expression.split("*");
    let totalSumma = 1;

    //CalculatedFaktorial = factorialDouble(10) * factorialDouble(9)

    //console.log("CalculatedFaktorial")
    //console.log(CalculatedFaktorial)

    for (i = 0; i < expMassiv.length; i++) {

        let numberWithFaktorial = expMassiv[i];

        let CalculatedFaktorial = 0;

        console.log(numberWithFaktorial);

        if (numberWithFaktorial.includes("!!")) {
            //console.log('!!')
            let onlyNumber = numberWithFaktorial.replace("!!", "")
                //console.log(onlyNumber)
            CalculatedFaktorial = factorialDouble(onlyNumber)
                //console.log('result of faktorial = ')
                //console.log(CalculatedFaktorial)

        } else if (numberWithFaktorial.includes("!")) {
            // console.log('!')
            let onlyNumber = numberWithFaktorial.replace("!", "")
                //console.log(onlyNumber)
            CalculatedFaktorial = factorial(onlyNumber)
                //console.log('result of faktorial = ')
                //console.log(CalculatedFaktorial)
        }

        //console.log(totalSumma)
        totalSumma = BigInt(totalSumma) * BigInt(CalculatedFaktorial)
            //console.log("totalSumma for= ")
            //console.log(totalSumma)
    }

    console.log("totalSumma Last = ")
    console.log(totalSumma)

    let counter = 0

    console.log("Begin counting ******")

    let strNum = String(totalSumma)
    console.log(strNum)

    for (i = strNum.length - 1; i > 0; i--) {

        let charStr = ''
        charStr = strNum[i];
        console.log(charStr)

        if (charStr === '0') {
            counter = counter + 1
        } else {
            break
        }

    }

    //console.log(totalSumma % 10)
    /*while (BigInt(totalSumma) % BigInt(10) === 0) {
        console.log("counter")
        console.log(counter)
        counter++;
        totalSumma = BigInt(totalSumma) / BigInt(10);

        console.log('counter = ' + counter)
        console.log('division')
        console.log(totalSumma)
    }*/

    return counter;

}