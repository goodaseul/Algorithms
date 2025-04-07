function solution(price) {
    let result;
    if ( price >= 500000 ){
        result = price * 0.2;
    }else if ( price >= 300000){
        result = price * 0.1;
    }else if ( price >= 100000) {
        result = price * 0.05;
    } else {
        result = 0
    }
    return Math.floor(price - result);
}