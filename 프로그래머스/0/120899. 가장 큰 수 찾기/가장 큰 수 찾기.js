function solution(array) {
    const newArr = [...array].sort( (a,b) => b-a);
    const max = newArr[0];
    return [max, array.indexOf(max)]

}