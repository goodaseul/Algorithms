function solution(n) {
    const newArr = [...String(n)].reverse().map(Number)
    return newArr;
}