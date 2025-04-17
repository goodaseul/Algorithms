function solution(my_string) {
    const arr = my_string.split(" ");
    let result = parseInt(arr[0]);
    for( let i = 1; i<arr.length ; i+=2){
        const operator = arr[i];
        const num = parseInt(arr[i + 1]);
        
        if( operator === "+"){
            result += num
        }else {
            result -= num
        }
    }
    return result
}