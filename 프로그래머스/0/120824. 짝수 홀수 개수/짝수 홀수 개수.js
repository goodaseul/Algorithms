function solution(num_list) {
    const newArr = [];
    const odd = num_list.filter( num => num % 2 === 1);
    const even = num_list.filter (num => num % 2 === 0);
    newArr.push( even.length, odd.length);
    return newArr
}