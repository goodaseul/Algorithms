function solution(n, numlist) {
    const part = [...numlist].filter( num => num % n === 0)
    return part
}