pyjwt
https://pyjwt.readthedocs.io/en/stable/
https://pyjwt.readthedocs.io/en/stable/usage.html


<!-- --------------------------------------------------------------- -->

Boto3 

There are 3 ways to set the  various configuration, check the following link:
https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html



awscli option:

If aws_access_key_id, aws_secret_access_key or region still does not load and you get:

    botocore.exceptions.NoCredentialsError: Unable to locate credentials

You can also set them globaly by awscli:    

You can perform the below 2 steps to get it working:

    1. Install awscli using pip3.

        $ pip3 awscli

    2. Run aws configure and setup your access key and secret key globally. 

        $ aws configure

https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#guide-credentials

MB:
I think the best way is to:

    1.  Install awscli and setup configuration
        It will create '~/.aws' folder with two files
            i.  config
            ii. credentials

    2.  Move this folder to your project directory and redirect aws/boto3 to
        the new path by setting AWS_CONFIG_FILE & AWS_SHARED_CREDENTIALS_FILE 
        in your .env
    



<!-- --------------------------------------------------------------- -->