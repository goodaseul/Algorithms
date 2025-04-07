function solution(s1, s2) {
    const arrCheck = s1.filter( s => s2.includes(s));
    return arrCheck.length
}