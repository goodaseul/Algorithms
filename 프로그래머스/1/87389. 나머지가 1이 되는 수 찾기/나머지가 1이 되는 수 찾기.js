function solution(n) {
    let newArr = [];
    for( let i = 1; i <= n ; i++){
        if( n % i === 1){
            newArr.push( i )
        }
    }
    return newArr[0]
}