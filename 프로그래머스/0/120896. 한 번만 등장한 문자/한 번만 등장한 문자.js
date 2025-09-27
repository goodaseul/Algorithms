function solution(s) {
    var answer = [...s].filter((ch) => s.indexOf(ch) === s.lastIndexOf(ch));
    return answer.sort().join("");
}