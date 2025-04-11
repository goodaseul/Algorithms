function solution(num_list) {
    const sortArr = [...num_list].sort( (a,b) => b-a);
    const newArr = [...sortArr].slice(0, num_list.length -5).sort((a,b) => a-b)
    return newArr;
}