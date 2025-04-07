function solution(my_string) {
    const check = ["a", "e", "i", "o", "u"];
    const answer = my_string.split("");

    let result = answer.filter( word => !check.includes(word.toLowerCase()));
    result = result.join("")
    return result
}