function solution(numbers) {
    const sortNum = numbers.sort((a,b) => b -a);
    const newStr = sortNum.splice(0,2);
    
    return newStr[0] * newStr[1]
}