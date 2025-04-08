function solution(my_string) {
    const check = my_string.replace(/[^0-9]/g, "");
    const result = check.split("").map(Number).reduce((acc, cur) => acc + cur , 0);
    return result;
}