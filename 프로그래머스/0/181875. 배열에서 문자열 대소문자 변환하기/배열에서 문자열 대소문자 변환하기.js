function solution(strArr) {
    let result = [];
    strArr.forEach((ele,index)=> {
        if( index % 2 === 0){
        result.push(ele.toLowerCase())
        } else{
            result.push(ele.toUpperCase())
        }
    })
    return result
}