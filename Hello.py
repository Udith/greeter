import arrow
import os

def handler(event, context):
    
    print(os.environ.get("COMMON_ENV_VAR"))

    now = arrow.now()
    print(now)
    print(now.tzname())
    return {"message": "Successfully executed"}
