function solution(number, n, m) {
    let result = 0;
    for( let i = 1; i < number; i++){
        if( number % n  === 0 && number % m === 0){
            result = 1
        }
    }
    return result
}