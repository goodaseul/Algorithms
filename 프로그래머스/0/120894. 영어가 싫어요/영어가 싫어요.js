function solution(numbers) {
    let strArr = ["zero" ,"one", "two", "three", "four", "five", "six", "seven","eight", "nine" ];
    
    strArr.forEach((word, index) => {
        numbers = numbers.split(word).join(index)
    })
    return Number(numbers)
}