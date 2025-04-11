function solution(my_string) {
    const newString = my_string.toLowerCase();
    
    return newString.split("").sort().join("");
}