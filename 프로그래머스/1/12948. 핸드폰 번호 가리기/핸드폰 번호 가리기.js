function solution(phone_number) {
    var answer = '';
    if( phone_number.length >= 4 && phone_number.length <= 20){
        answer = phone_number.slice(-4).padStart(phone_number.length, "*")
       }
    return answer;
}