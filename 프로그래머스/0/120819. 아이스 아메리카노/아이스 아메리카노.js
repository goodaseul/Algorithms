function solution(money) {
    let newArr = [];
    const num = money % 5500;
    const mon = parseInt(money / 5500);
     newArr.push( mon, num )
    return newArr
}