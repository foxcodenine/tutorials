def check_header(request_xhr_key):
    if not request_xhr_key or request_xhr_key != '123#456#789':
        return True