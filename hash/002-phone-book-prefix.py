def solution(phone_book):
    answer = True
    for x in phone_book:
        if x.startswith(tuple(phone_book)) == True :
            answer = False
        else:
            answer = True
    return answer