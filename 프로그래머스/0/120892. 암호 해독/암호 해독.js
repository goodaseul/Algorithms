function solution(cipher, code) {
    let result = "";
    let str = cipher.split("");
    
    for( let i = code - 1; i< str.length; i+=code){
        result += str[i]
    }
    return result
}