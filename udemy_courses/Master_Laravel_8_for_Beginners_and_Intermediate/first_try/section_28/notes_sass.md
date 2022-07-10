### installing sass

    $ npm install --save-dev sas




### Update the 'webpack.mix.js' 
### By adding the sass method 
### And removing the postCss method

    from:
            mix.js('resources/js/app.js', 'public/js')
                .postCss('resources/css/app.css', 'public/css', [
                    //
                ]);
    
    to:
            mix.js('resources/js/app.js', 'public/js')
                .sass('resources/sass/app.scss', 'public/css');
                // .postCss('resources/css/app.css', 'public/css', [
                //     //
                // ]);



### Running Mix

            // Run all Mix tasks...
            $ npm run dev
            
            // Run all Mix tasks and minify output...
            $ npm run prod

You may be asked to run this again
            
            $ npm run [dev|prod]


### Watching Assets For Changes

            $ npm run watch

Webpack may not be able to detect your file changes in certain local 
development environments. 
If this is the case on your system, consider using the watch-poll command:

            $ npm run watch-poll

### Add the required sass files

        $ touch resources/sass/app.scss

### Link the php blade tamplete to the compiled css file

        <link rel="stylesheet" href="/css/app.css">



### For more indormation:

https://laravel.com/docs/9.x/mix#sass           <- I followed this doc for the current setup

https://ralphjsmit.com/tailwind-sass-laravel 

