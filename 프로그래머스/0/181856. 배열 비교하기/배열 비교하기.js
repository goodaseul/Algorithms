function solution(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;
    if( len1 > len2) return 1;
    if( len1 < len2) return -1
    const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
    const sum2 = arr2.reduce((acc, cur) => acc + cur, 0)
  
    if( sum1 > sum2) return 1;
    if( sum1 < sum2) return -1
    
    
    return 0
}