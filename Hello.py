import arrow

def handler(event, context):
    
    now = arrow.now()
    print(now)
    print(now.tzname())
    return {"message": "Successfully executed"}
