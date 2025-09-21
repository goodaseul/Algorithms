function solution(my_string, indices) {
    const letter=my_string.split("");
    let result = "";
    letter.forEach((spel,index) => {
        if(!indices.includes(index)) {
            result += spel
        }
    })
    
    return result
}