## to start:

1. Install package vlucas/phpdotenv using composer in the project root folder.
    ```bash
    $ composer require vlucas/phpdotenv


2. Create a .env file in the project root folder, with environmental variables, (a sample copy has been provided):

    ```.env 

    username = ‘database_username’
    password = ‘database_passord’
    database = ‘database_username’
    server   = ‘dbType:host’


3. Create the database (fitting the environmental variables). Run the database.php file by open it with php in the terminal or in the browser:

    ```bash
    $ php database.php


4. Final the app could be opened on the server through index.php.






## files:

*database.php* \
This file creates the database connection, and the employee table.
 

*crud.php* \
Interacts with the database to create, update and delete records. And provide the user input fields. 
    

*app.php* \
Is the main file, it imports all other files. Read from database and display it content in the full-timers and part-timers tables. Provides employee payslip selector, and displays the payslip.    
 

*my_classes.php* \
Contain traids, interfaces, abstract classes and classes.


*my_function.php* \
Contain other helper function.

##
