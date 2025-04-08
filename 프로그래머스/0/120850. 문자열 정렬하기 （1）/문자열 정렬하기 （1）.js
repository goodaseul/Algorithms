function solution(my_string) {
    const check = my_string.replace(/[^0-9]/g, "");
    const newArr = [...check].map(Number).sort( (a,b) => (a-b));
    return newArr
}