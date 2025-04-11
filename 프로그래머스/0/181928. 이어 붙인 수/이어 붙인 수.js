function solution(num_list) {
    const odd = [...num_list].filter( num => num % 2 === 0);
    const even = [...num_list].filter( num => num % 2 === 1);
    return  Number(odd.join("")) + Number(even.join(
""))
}