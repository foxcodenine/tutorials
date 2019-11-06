import string

# ______________________________________________________________________

def num_in_str(string):
    """Check if string contains numeric value."""

    string_list = [] 
    num_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    num = False

    for s in string:
        string_list.append(s)
    

    for n in num_list:
        num = n in string_list 
        if num == True:
            break

    return num
# ______________________________________________________________________

def pass_val(_str):
    """Check if a string contains an lowerCase, upperCase and digit 
    character."""

    string_list = []
    for s in _str:
        string_list.append(s)


    lower = list(string.ascii_lowercase)
    upper = list(string.ascii_uppercase)
    num   = list(string.digits)

    dic = {
        'lower': [lower, False], 
        'upper':[upper, False], 
        'num': [num, False]
    }

    for k, v in dic.items():
            
            for x in v[0]:
                v[1] = x in string_list
                if v[1] == True:
                    break


    if dic['lower'][1] * dic['upper'][1] * dic['num'][1]:
        return True 
    else:
        return False
    



    



    


