function sortascdec(array){
    const mid=Math.floor(array.length/2);
    const firsthalf = array.slice(0,mid);
    const secondhalf = array.slice(mid);
    firsthalf.sort((p,q)=> p-q);
    secondhalf.sort((p,q)=>q-p);
    return firsthalf.concat(secondhalf);
}

const Array=[3,7,1,4,90,67,10,78,45];
const sortedArr = sortascdec(Array);
console.log(sortedArr);

const secondHalfArray = sortedArr.slice
(Math.floor(sortedArr.length/2));
console.log(secondHalfArray);