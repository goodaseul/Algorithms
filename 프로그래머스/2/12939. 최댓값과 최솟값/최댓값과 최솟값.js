function solution(s) {
    const sortArr = s.split(" ").sort((a,b) => a - b).map(Number);
    const max = Math.max(...sortArr);
    const min = Math.min(...sortArr);
    let num = `${min} ${max}` 
    return num
}