function solution(numbers) {
    const newArr = [];
    const num = numbers.sort( ( a , b ) => a - b);
    num.forEach((ele, index) => {
        if( index < num.length - 1){
            newArr.push(ele * num[index + 1])
        }
    })
    const result = newArr.sort( (a,  b) => b - a );
    return result[0]
}