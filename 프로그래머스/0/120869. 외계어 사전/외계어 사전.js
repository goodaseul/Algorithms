function solution(spell, dic) {
    var answer = dic.some((word) => spell.every(ch => word.includes(ch))) ? 1:2;
    return answer;
}