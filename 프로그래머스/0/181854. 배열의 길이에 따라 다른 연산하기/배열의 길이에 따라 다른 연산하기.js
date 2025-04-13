function solution(arr, n) {
    let newArr = [];
    if( arr.length % 2 === 0) {
        newArr = arr.map((ele, index) => {
            return index % 2 === 1 ? ele + n : ele
        }) 
    }else{
        newArr = arr.map((ele, index) => {
            return index % 2 === 0 ? ele + n : ele 
        })
    }
    return newArr;
}