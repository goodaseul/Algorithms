function solution(my_string, s, e) {
    const splitStr = my_string.slice(s, e+1).split("").reverse().join("");
    const front = my_string.substring(0,s);
    const last = my_string.substring(e + 1);
    const result = front + splitStr + last;
    return result
}