# Mailhog

### Video Tutorial

[<img src="https://img.youtube.com/vi/xH8VAWLmLRk/maxresdefault.jpg" width="50%">](https://youtu.be/xH8VAWLmLRk)

# 1. Install GoLang

### Install 
Mailhog Requires **Go 1.4+** to run so we will install GO language in system.

> `sudo apt install golang-go -y`

Cross verify **Go** language is successfully installed. 
 
 Verify installation

> `go version`


we will see output something like this

```
go version go1.13.8 linux/amd64
```

If you found any installation related issues please visit: https://golang.org/doc/install

# 2. Install Mailhog

### Install Mailhog 

Downloading & installation
> `go install github.com/mailhog/MailHog@latest`

>  <s>`go get github.com/mailhog/MailHog`</s> // this command is deprecated as of now

To start the MailHog run:
> `~/go/bin/MailHog`

Copy Mailhog to bin directory 
> ` sudo cp ~/go/bin/MailHog /usr/local/bin/Mailhog`

Open terminal and start mailhog server
> `Mailhog`

we will see something lke below 
```
[CurrentDate] [TIME] Using in-memory storage
[CurrentDate] [TIME] [SMTP] Binding to address: 0.0.0.0:1025
[HTTP] Binding to address: 0.0.0.0:8025
[CurrentDate] [TIME] Serving under http://0.0.0.0:8025/
Creating API v1 with WebPath: 
Creating API v2 with WebPath: 
```

Go to http://0.0.0.0:8025/ where we will receive all Emails. and keep open terminal until want to stop it.


# 3. Setup **PHP** with Mailhog

## Get **php.ini** directory
> `php --ini`

We will see below output.
```
Configuration File (php.ini) Path: /<direcotry>/etc
Loaded Configuration File:        /<direcotry>/php.ini
Scan for additional .ini files in: (none)
Additional .ini files parsed:      (none)
```

## Modify **php.ini** by following command.
> `sudo sed -i "s/;sendmail_path.*/sendmail_path='\/usr\/local\/bin\/Mailhog sendmail mailhog@mail.com'/" /<direcotry>/php.ini`

Or we may modify **php.ini** manually, 
Set **sendmail_path** to `'/usr/local/bin/Mailhog sendmail mailhog@mail.com'`
```
sendmail_path='/usr/local/bin/Mailhog sendmail mailhog@mail.com'
```



# 4. Testing Email
Create **index.php** file, with following content to fire mail

```php
<?php
    $from = 'from@sender.com';
    $to = 'to@receiver.com';
    $x = mail($to, 'subject' . time(), 'Test email working', 'From: ' . $from);
    var_dump($x); // true means successfull.
?>
```

If we see something like following means everyting is working fine and ready to go. Visit http://0.0.0.0:8025/ where we receive all mails.
```
/<Direcotry>/index.php:6:boolean true
```


# 5. Create Mailhog service [optional]
Now we are going make **MailHog service**, So we dont have to start every time Mailhog after rebooting system.

open terminal and copy paste below content.

```
sudo tee /etc/systemd/system/mailhog.service <<EOL
[Unit]
Description=Mailhog
After=network.target
[Service]
User="$USER" 
ExecStart=/usr/bin/env /usr/local/bin/mailhog > /dev/null 2>&1 &
[Install]
WantedBy=multi-user.target
EOL
```

To check status service is loaded successfully.

> `sudo systemctl status mailhog`

```
● mailhog.service - Mailhog
     Loaded: loaded (/etc/systemd/system/mailhog.service; disabled; vendor preset: enabled)
     Active: inactive (dead)
```
To start service 

> `sudo systemctl enable mailhog`

Reboot system and visit http://0.0.0.0:8025/

We done, That's it.
Thanks 