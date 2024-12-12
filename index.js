
function calculateDifference(num1,num2){
    return num1-num2
}

function isOdd(num1){
    return num1%2 !== 0
}
function findMin(array){
    return Math.min(...array)
}
function filterEvenNumbers(array){
    let newArray = []
    for(let i=0;i<array.length;i++){
       if(array[i] % 2 == 0){
        newArray.push(array[i])
       }
    }
    return newArray
}
function sortArrayDescending(array){
    return array.sort((a,b)=>{
        return b-a
    })
}
function lowercaseFirstLetter(str){
   return String(str).charAt(0).toLocaleLowerCase()+String(str).slice(1)
}
function findAverage(array){
    let sum = 0;

    for(let i = 0;i<array.length;i++){
        sum += array[i]
    }
    
    return sum / array.length
}
function isLeapYear(year){

    if(year%4 == 0 && year %100 != 0 || year % 400 == 0 ){
        return true
    }
    return false
}



//1.ans
console.log(`The difference is ${calculateDifference(20,10)}`)
//2.ans
console.log(isOdd(12))
//3.ans
console.log(findMin([10,20,5,7,9,40,56,]))
//4.ans
console.log(filterEvenNumbers([10,20,5,7,9,40,56,]))
//5.ans
console.log(sortArrayDescending ([10,40,20,5,2,3]))
//6.ans
console.log(lowercaseFirstLetter ('My Name is Mehedi hasan'))
//7.ans
console.log(findAverage([10,40,20,11,50,23]))
//8.ans
console.log(isLeapYear(1900))
