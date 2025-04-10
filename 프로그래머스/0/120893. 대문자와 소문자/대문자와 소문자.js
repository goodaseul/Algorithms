function solution(my_string) {
    let newString = "";
    const newArr = my_string.split("").map((string) => (
        string === string.toUpperCase() ? (string.toLowerCase()) : (string.toUpperCase())
    ))
    
    return newArr.join("")
}