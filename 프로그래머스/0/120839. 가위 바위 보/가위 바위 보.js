function solution(rsp) {
    const newArr = rsp.split("");
    const result = [];
    newArr.map((rspNum) => {
        rspNum === "2" && result.push("0");
        rspNum === "0" && result.push("5");
        rspNum === "5" && result.push("2");
     })
    return result.join().replaceAll(",","")
}