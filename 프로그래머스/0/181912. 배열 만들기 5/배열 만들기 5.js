function solution(intStrs, k, s, l) {
    let newArr = [];
    let endNum = undefined;
    intStrs.forEach((num) => {
        endNum = num.slice(s,s+l);
        if( endNum > k) {
            newArr.push(endNum)
        }
    })
    let final = newArr.map(Number)
    return final;
}