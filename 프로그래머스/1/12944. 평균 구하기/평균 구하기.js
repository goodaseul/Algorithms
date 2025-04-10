function solution(arr) {
    let result = 0;
    const newArr = [...arr].map( num => result += num);
    result = result / newArr.length;
    return result;
}