function solution(s) {
    const check = s.length;
    let result = s.length % 2 ===  0 ? (
        [...s][s.length / 2 - 1] + [...s][s.length / 2]
    ) : (
        [...s][parseInt(s.length / 2)]
    )
    return result;
}