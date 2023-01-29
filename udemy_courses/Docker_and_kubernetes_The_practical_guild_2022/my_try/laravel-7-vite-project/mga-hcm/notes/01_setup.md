# Running docker-compose steps  
  
# Step 1 - Do the build images
    $ docker-compose  build

    $ docker-compose  up -d --build 


# Step 2 - Run composer (using the php container) 
#          Step not required, composer packages are installed in php.dockerfile

    $ docker exec -it mga-hca-php bash -l

    $ cd /var/www/iot_solutions/laravel_app

    $ composer install


# Step 3 - installing vite

    <!-- $ docker exec -it mga-hca-php bash -l -->

a). Install the following:

    $ docker-compose run --rm npm remove laravel-mix
    $ docker-compose run --rm npm install --save-dev vite laravel-vite-plugin
    <!-- $ docker-compose run --rm npm install --force -->

b). Add in package.json remove mix script and add:

    "scripts": {
        "dev": "vite --host 172.21.0.4",                                # <~~ note the --host 172.21.0.4
        "build": "vite build"
    },
    
c). In root dir create 'vite.config.js' with:


    import laravel from 'laravel-vite-plugin'
    import {defineConfig} from 'vite'

    export default defineConfig({
        plugins: [
            laravel([
                'resources/sass/app.scss',
                'resources/js/app.js',
            ]),
        ],
    });

d). In header add link and script to js and css build:
    (not in laravel 7 @vite doesn't work so we have to add it manually in @php)
    (you need to comment out the dev link when using build)

```php
    {{-- css & js build---------------------------------------- --}}
    @php 
        $path = public_path('build/assets');
        $files = (array)  \File::allFiles($path);
        
        if (strstr($files[0], '.') === '.css') {
            $cssFile = $files[0]; $jsFile = $files[1];        
        } else {
            $cssFile = $files[1]; $jsFile = $files[0];                
        }
        $cssFile = strrchr($cssFile, '/'); $jsFile = strrchr($jsFile, '/');
    @endphp
    <link rel="stylesheet" href="{{asset('build/assets'. $cssFile)}}">
    <script src="{{asset('build/assets'. $jsFile)}}" defer></script>
    {{-- ------------------------------------------------------ --}}
```

e). Also in header add link and script to js and css dev:
    (you need to comment out the build link when using dev)

f). In appjs and bootstrap.js update 'request' to 'import'

    # app.js:

        // require('./bootstrap');
        import './bootstrap';

    # bootstrap.js:

        // window._ = require('lodash');
        import _ from 'lodash';
        window._ = _;

        // window.axios = require('axios');
        import axios from 'axios';
        window.axios = axios;
    
# Step 4 - Install Vue:

    $ docker-compose run --rm npm install vue@next vue-loader@next
    $ docker-compose run --rm npm install @vitejs/plugin-vue@3.0.1

# Step 5 - Connect postg db from server

    ssh -N -L 5003:127.0.0.1:5002 farrc001@10.50.200.57
    Rn******

# Step 6 - Add tailwind to project 
https://chipperci.com/news/vite-tailwind-laravel

    $ docker-compose run --rm npm install -D tailwindcss postcss autoprefixer



docker-compose run --rm --service-ports npm install
docker-compose run --rm --service-ports npm run dev








