
function siempreHambriento(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i]=="comida"){
            console.log("delicioso")
        } else {
            console.log("tengo hambre")
        }
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var j=0; j<arr.length; j++){
        if(arr[j]>cutoff){
            filteredArr.push(arr[j]);
        }
    }
    return filteredArr;
}

var highPassResult = highPass([10,9,8,7,6,5,4,3,2,1],5);
console.log(highPassResult);

function betterThanAverage(arr) {
    var sum = 0;
    for (var k=0; k<arr.length; k++){
        sum=sum+arr[k];
    }
    sum = (sum/arr.length);
    var count = 0
    for (var l=0; l<arr.length; l++){
        if(arr[l]>sum){
            count = count+1;
        }
    }
    console.log(count)
}

betterThanAverage([6, 8, 3, 10, -2, 5, 9]);

function reverse(arr) {
    var temp=[];
    for (var m = arr.length - 1; m >= 0; m--){
        temp.push(arr[m]);
    }
    console.log(temp);
}

reverse(["a", "b", "c", "d", "e"]);

function fibonacciArray(n) {
    var fibArr = [0,1];
    for (var p = 2; p < n; p++){
        fibArr.push(fibArr[p-2]+fibArr[p-1]);
    }
    console.log(fibArr);
}

fibonacciArray(10);