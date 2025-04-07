function solution(n, k) {
    const nPrice = 12000;
    const kPrice = 2000;
    
    let price;
    
    const calc = Math.trunc(n / 10);
    
    if( (n % 10) + 1 ){
        price = (n * nPrice) + (k - calc ) * kPrice;
    } else {
        price = (n * nPrice) + (k * kPrice)
    }
    
    return price
}