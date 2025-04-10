function solution(my_string, num1, num2) {
    const newString = [...my_string];
    const temp = newString[num2];
    
    newString[num2] = newString[num1];
    newString[num1] = temp;
    
    return newString.join("")
}