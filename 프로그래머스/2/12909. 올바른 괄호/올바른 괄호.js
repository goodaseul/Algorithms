function solution(s){
    let count = 0;
    
    for(char of s){
        if( char === "("){
            count ++
        }else if ( char === ")"){
            count --
        }
        
        if( count < 0){
            return false
        }
    }
    
 return   count === 0
   
}