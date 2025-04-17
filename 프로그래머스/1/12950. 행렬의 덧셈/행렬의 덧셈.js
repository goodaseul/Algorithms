function solution(arr1, arr2) {
    let result = [];
    
    arr1.map((ele, index) => {
        let temp = [];
        
        ele.map((sEle, sIndex) => {
            temp.push(sEle + arr2[index][sIndex])
        })
        result.push(temp)
    })
    
    return result
}