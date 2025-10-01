function solution(ineq, eq, n, m) {
    var answer = 0;
    if( ineq === "<" && eq === "="){
        answer = n <= m;
    }
    if( ineq === "<" && eq === "!"){
        answer = n < m;
    }
    if( ineq === ">" && eq === "=") {
        answer = n >= m;
    }
    if( ineq === ">" && eq === "!"){
        answer = n > m;
    }
    return Number(answer);
}