function solution(array) {
    const check = 
          array.reduce((acc, num ) => acc + [...num.toString()].filter((c) => c === '7').length , 0)
    return check
}