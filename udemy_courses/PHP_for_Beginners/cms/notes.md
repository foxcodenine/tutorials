ckeditor:
https://ckeditor.com/ckeditor-5/download/?undefined-addons=


<!-- --------------------------------------------------------------- -->


### Packages installed:

    $ composer require vlucas/phpdotenv

    $ composer require phpmailer/phpmailer


<!-- --------------------------------------------------------------- -->
### PHP package repo
https://packagist.org/


<!-- --------------------------------------------------------------- -->
### Updating composer.json
    
     After updating composer.json perfor:
    $ composer dump-autoload
<!-- --------------------------------------------------------------- -->

### godaddy email
So GoDaddy requires you to use their Relay Server for SMTP from their
cPanel / VPS / Dedicated Server. You can find the login information on
the dashboard for the server. 

GoDaddy also refuses to send with a From address belonging to any aol,
gmail, yahoo, hotmail, live, aim, or msn domain

https://nz.godaddy.com/community/Using-WordPress/Emails-not-routing-through-SMTP-using-WP-Mail-SMTP-with-GoDaddy/td-p/171654

<!-- --------------------------------------------------------------- -->

### Pusher.com

Site:
    https://pusher.com/
    https://dashboard.pusher.com/


Composer package installation:
    https://packagist.org/packages/pusher/pusher-php-server

    $ composer require pusher/pusher-php-server
    $ composer update
<!-- --------------------------------------------------------------- -->

### toastr.js (Flash message)
https://github.com/CodeSeven/toastr

<!-- --------------------------------------------------------------- -->

### PHP to JavaScript - fetch GET or POST data

    git/repo/research_n_study/php
    or
    https://www.mikestreety.co.uk/blog/how-to-use-fetch-in-javascript-to-get-or-post-data/


    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


<!-- --------------------------------------------------------------- -->
### JavaScript URL parameters 

    https://www.sitepoint.com/get-url-parameters-with-javascript/#:~:text=URL%20parameters%20(also%20called%20query,%2C%20user%20preferences%2C%20and%20more.

    window.location.search;
    The search property sets or returns the querystring part of a URL, including the question mark (?).


    window.location.pathname;
    Return the path name of the current URL

    window.location.hostname;
    The hostname property sets or returns the hostname of a URL.

    https://www.w3schools.com/jsref/obj_location.asp

<!-- --------------------------------------------------------------- -->
### How to render html tags from mysql database in PHP?

https://stackoverflow.com/questions/35218019/how-to-render-html-tags-from-mysql-database-in-php

        Use htmlspecialchars_decode function as below :

        echo htmlspecialchars_decode(stripslashes($row3['description'])); 
        
        Instead of:

        echo stripslashes($row3['description']);



<!-- --------------------------------------------------------------- -->

### tippyjs 

https://atomiks.github.io/tippyjs/
https://github.com/atomiks/tippyjs

    1. INSTALL

        npm i tippy.js     OR    yarn add tippy.js

    2. CDN
        <!-- Development -->
        <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
        <script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>

        <!-- Production -->
        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <script src="https://unpkg.com/tippy.js@6"></script>


    3. USE
    With a button element on the document like this:

        <button id="myButton">My Button</button>

    You can initialize it like so:

        tippy('#myButton', {
            content: "I'm a Tippy tooltip!",
        });

<!-- --------------------------------------------------------------- -->