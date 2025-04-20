function solution(before, after) {
    const check = before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0
    return check;
}