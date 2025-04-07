function solution(dot) {
    const x = dot[0];
    const y = dot[1];
    let answer = 0;
    if ( x > 0 && y > 0){
        answer = 1
    }else if ( x > 0  && y < 0){
        answer = 4
    }else if ( x < 0 && y > 0 ){
        answer = 2
    }else {
        answer = 3
    }
    
    return answer;
}