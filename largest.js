let a = [1,4,6,8,0,41,3];
let largest = a[0];
let secondlargest = a[0];
for(let i=1;i<a.length;i++){
    if (largest < a[i]){
        secondlargest = largest;
        largest = a[i];
    }
    else if(a[i] < largest && a[i] > secondlargest){
        secondlargest = a[i];
    }
}
console.log(secondlargest);