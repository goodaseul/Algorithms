function solution(myString) {
    const string = myString.split("x");
    const newArr = string.map((ele) => ele.length)
    return newArr;
}