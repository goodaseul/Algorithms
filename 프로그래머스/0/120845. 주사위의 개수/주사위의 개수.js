function solution(box, n) {
    const [w,l,h] = box;
    return Math.floor(w / n) * Math.floor(l/n) * Math.floor(h/n);
}