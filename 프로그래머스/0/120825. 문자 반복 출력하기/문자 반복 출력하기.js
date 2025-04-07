function solution(my_string, n) {
    const answer = my_string.split("").map( (string) =>  string.repeat(n)).join("");

    return answer;
}