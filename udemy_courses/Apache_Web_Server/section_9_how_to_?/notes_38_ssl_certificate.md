#### How to create Self Signed SSL certificate for HTTPS testing?

Create dir where to save certificates:

    $ sudo mkdir /etc/apache2/certs
    $ cd /etc/apache2/certs

1. Generating Your Private Key:

( This command generates a private key in your current directory named
yourdomain.key (-out yourdomain.key) using the RSA algorithm (genrsa)
with a key length of 2048 bits (2048). The generated key is created
using the OpenSSL format called PEM. )

    $ sudo openssl genrsa -out my_server1.com.key 2048
    $ ll

Use the following command to view the raw, encoded contents (PEM format)
of the private key:

    $ sudo openssl rsa -text -in my_server1.com.key -noout

The -noout switch omits the output of the encoded version of the private
key.

And to save it:

    $ sudo openssl rsa -text -in my_server1.com.key -out my_server1.com_private.key

2. Extracting Your Public Key

The private key file contains both the private key and the public key.
You can extract your public key from your private key file if needed.

Use the following command to extract your public key:

    $ sudo openssl rsa -in my_server1.com.key -pubout -out my_server1.com_public.key
    $ ll

3. a. Creating Your CSR ( do 'b' not this)

After generating your private key, you are ready to create your CSR. The CSR is created using the PEM format and contains the public key portion of the private key as well as information about you (or your company).

Use the following command to create a CSR using your newly generated private key:

    # $ openssl req -new -key yourdomain.key -out yourdomain.csr        

After entering the command, you will be asked series of questions. 
Your answers to these questions will be embedded in the CSR.


3. b. Using the -subj Switch

Another option when creating a CSR is to provide all the necessary
information within the command itself by using the -subj switch.

Use the following command to disable question prompts when generating a CSR:

    $ sudo openssl req -sha256 -new -key my_server1.com_private.key -out my_server1.com.csr -subj '/CN=my_server1.com'
    $ ll

4. Creating the crt certificate for that is valid for 365 days

        $ sudo openssl x509 -req -sha256 -days 365 -in my_server1.com.csr -signkey my_server1.com_private.key -out my_server1.com.crt



