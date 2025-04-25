function solution(n) {
    let count = 0;
    let k = 1;
    
    while((k * (k-1)) / 2 < n){
        const temp = n - (k * (k-1)) / 2;
        if( temp % k === 0){
            count ++;
        }
        k++;
    }
    return count
}