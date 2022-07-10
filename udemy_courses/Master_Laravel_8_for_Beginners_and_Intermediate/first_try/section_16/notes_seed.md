### To seed the database with the default seed functions

        $ php artisan db:seed


### Or to refresh and seed

        $ php artisan migrate:refresh --seed


### Making new seedes file

        $ php artisan make:seed UserTableSeeder

        $ php artisan make:seed NewsPostTableSeeder

        $ php artisan make:seed CommentsTableSeeder

        $ php artisan make:seed MyDefaultDbSeeder

        $ composer dump-autoload

### Calling a spesific class seeder

        $ php artisan db:seed --class=UserTableSeeder