function solution(arr) {
    const rowCount = arr.length;
    const colCount = arr[0].length;
    
    if( rowCount > colCount) {
        arr.forEach((row) => { 
            while(row.length < rowCount) 
        {row.push(0)
        }
                             })
    }
    
    if( rowCount < colCount) {
        const diff = colCount - rowCount;
        for( let i = 0; i<diff; i++){
            arr.push( new Array(colCount).fill(0))
        }
    }
    return arr
}