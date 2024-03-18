function halfAscDesc(arr) {
    const n = arr.length;
    const mid = Math.floor(n / 2); 
  
    
    const firstHalf = arr.slice(0, mid).sort((a, b) => a - b);
    
    
    const secondHalf = arr.slice(mid).sort((a, b) => b - a);
    

    const sortedArr = firstHalf.concat(secondHalf);
    
    return sortedArr;
  }
  
  const arr = [3, 10, 67, 4, 90, 1, 78, 45, 7];
  const sortedArr = halfAscDesc(arr);
  console.log(sortedArr);
  