def solution(phone_book):
  answer = True
  for x in phone_book:
    if phone_book.startwith(x) == True :
      answer = True
    else:
      answer = False
  return answer