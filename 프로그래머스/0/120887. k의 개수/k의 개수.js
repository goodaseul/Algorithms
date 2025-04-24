function solution(i, j, k) {
    let count = 0;
    for( let n = i; n<=j; n ++){
        let str = n.toString();
        for( let char of str){
            if( char === k.toString()){
                count ++
            }
        }
    }
    return count
}