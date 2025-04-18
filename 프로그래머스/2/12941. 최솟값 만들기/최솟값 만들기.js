function solution(A,B){
    let sortA = A.sort((a,b) => a-b);
    let sortB = B.sort((a,b) => b-a);
    let sum = 0;
    sortA.map((ele, i)=> {
        sum += ele * sortB[i]
    })
    return sum 
}