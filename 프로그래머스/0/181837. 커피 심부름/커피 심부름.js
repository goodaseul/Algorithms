function solution(order) {
    let sum = 0;
    order.map((ele) => {
        ele.includes("anything") && (sum += 4500);
        ele.includes("americano") && (sum += 4500);
        ele.includes("cafelatte") && (sum += 5000)
    })
    return sum
}