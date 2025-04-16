function solution(a, b) {
    let total = 0;
    
    a.forEach((ele, index) => {
        total += ele * b[index];
    })
    
    return total
}