function solution(my_string) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let newArr = Array(52).fill(0);
    my_string.split("").forEach((str) => {
        const idx = alpha.indexOf(str);
        if( idx !== -1){
            newArr[idx]++
        }
    })
    return newArr;
}