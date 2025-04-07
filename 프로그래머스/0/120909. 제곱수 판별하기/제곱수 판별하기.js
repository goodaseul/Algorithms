function solution(n) {
    let answer = 2
    for ( i= 0; i<= n; i ++) {
        if( i * i === n) {
            answer = 1
        }
    }
    
    return answer;
}