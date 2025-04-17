function solution(s) {
   
    let check = s.length === 4 || s.length === 6
    return check ? s.split("").every((ele) => !isNaN(ele)) : false
    
}