
// HW #11
function getDigitsSum(number) {
    //computes sum of all digits in the integer part of the number
    // number may be either negative or positive or 0
    if (number == 0) {
        return 0;
    }
    if (number < 0){
        number = Math.abs(number);
    }
    number = Math.trunc(number);
    let digitSum = 0;
    let temp;
    while (number){
        temp = number % 10;
        digitSum += temp;
        temp = 0;
        number /= 10;
        number = Math.trunc(number); 
    }
return digitSum;
}
console.log("\n===Digit sum fuction results:===");
console.log("Expected =  6, Actual = " + getDigitsSum(123.45));
console.log("Expected = 10, Actual = " + getDigitsSum(-280.123));
console.log("Expected =  6, Actual = " + getDigitsSum(123));
console.log("Expected =  0, Actual = " + getDigitsSum(0));



function computeExpression(expressionStr) {
    //example of expression "9000 / ((10 + 20) ** 2)"
    //returns 10
    //task for searching in Internet
    //only one line code
    //how to use Internet for finding required code
    return result = eval(expressionStr);
}
console.log("\nCompute expressions fuction results:"); 
console.log("Expected = 10, Actual = " + computeExpression("9000 / ((10 + 20) ** 2)")) ; //prints 10
console.log("Expected = 59, Actual = " + computeExpression("9 + 100 / 2")); //prints 59


function printAnanas() {
    //TODO 
    //To use only capital "A" "S"
    //print "ananas"
    let b;
    console.log('A'+ +'A'+'A'+'S');
}
console.log("\n===Print Ananas fuction results:==="); 
printAnanas() //there should be printed "ananas"

function reverse(number) {
    //returns string with digits of a given number in the reversed order
    //number may be either positive or negative
    //consider only integer part, fractional part should be removed
    if (number == 0){ 
        return '0';
    }
    let res = (number > 0) ? '' : '-';
    number = Math.abs(number);
    number = Math.trunc(number);
    while (number){
        res += (number % 10);
        number = Math.trunc(number / 10); 
    }
    return res;
}
console.log("\n===Reverse fuction results:==="); 
console.log("Expected = 321; Actual = "+ reverse(123.45));
console.log("Expected = 4321; Actual = "+ reverse(1234));
console.log("Expected = 321; Actual = "+ reverse(123.45));
console.log("Expected = -082; Actual = "+ reverse(-280.123));
console.log("Expected = 0; Actual = "+ reverse(0));

