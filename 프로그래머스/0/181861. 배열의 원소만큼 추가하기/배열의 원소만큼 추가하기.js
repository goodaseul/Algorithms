function solution(arr) {
    let answer = [];
    arr.forEach((ele) => {
        answer.push(...Array(ele).fill(ele))
    })
    return answer
}