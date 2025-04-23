function solution(rank, attendance) {
    const sorted = rank.map((r,i) => ({
        rank: r,
            index: i,
    })).sort((a,b) => a.rank - b.rank);
    const selected = sorted.filter((student) => attendance[student.index]).slice(0,3).map((student) => student.index);
    
    const [a,b,c] = selected
    return 10000 * a + 100 * b + c
}