from datetime import datetime, datetime, time 


def how_long_since(date_time):
    ''' This func returns how longe a tweet has been posted
        in days or hours or minutes or secondes. 
        Parrameter 'date_time' is the datetime  of the tweet when created'''

    # in care a datetime instance (as datetime.now()) is given instaed of a str.
    if isinstance(date_time, datetime):
        date_time = date_time.strftime('%Y-%m-%d %H:%M:%S')


    datetimeformat ='%Y-%m-%d %H:%M:%S'
    date1 =  datetime.now()
    date2 = datetime.strptime(date_time, datetimeformat)
    
    differance = date1 - date2
 

    days = differance.days
    seconds = differance.seconds
    result = 'none'
 
    minutes, seconds = divmod(seconds, 60)
    hours, minutes = divmod(minutes, 60)


    if days > 1: 
      result = ('{}days').format(days)

    elif days == 1: 
        result = ('{}day').format(days)    

    elif hours > 1:
        result = ('{}hrs').format(hours)

    elif hours == 1: 
        result = ('{}hr').format(hours)

    elif minutes >= 1: 
        result = ('{}m').format(minutes)
    
    else:
        result = 'Just now'

    return result


# ______________________________________________________________________
if __name__ == '__main__':
    print(how_long_since('2020-02-24 8:01:28'))