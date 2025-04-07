function solution(sides) {
    sides.sort( (a,b) => a-b);
    let answer;
    return sides[0] + sides[1] > sides[2] ? (answer = 1) : (answer = 2)
}