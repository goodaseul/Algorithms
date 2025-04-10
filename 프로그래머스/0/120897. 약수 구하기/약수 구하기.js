function solution(n) {
    let newArr = [];
    for( let i = 1; i <= n; i++){
        if( n % i === 0) newArr.push( i);
    }
    return newArr
}