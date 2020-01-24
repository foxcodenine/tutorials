import string

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
    



    



    


