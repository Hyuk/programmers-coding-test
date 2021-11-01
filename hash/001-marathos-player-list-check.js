function solution(participant, completion) { // participant: 참가자, completion: 완주자
  var answer = '';
  for (let i = 0; i < participant.length; i++) { // 참가자 리스트를 for loop 돌린다.
      if(!completion.includes(participant[i])) { // 참가자 중 완주자에 명단이 없는 경우
          answer = participant[i];
      } else { // 참가자 같은 이름의 중복 수와 완주자 같은 이름의 중복 수가 일치하지 않는 경우
          if(completion.filter(x => x==participant[i]).length != participant.filter(x => x==participant[i]).length) {
              answer = participant[i];
          }
      }
  }
  return answer;
}