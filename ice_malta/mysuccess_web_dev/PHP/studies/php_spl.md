### spl_autoload_register

    
    spl_autoload_register(function($className){

        $path = dirname(__FILE__) . '/' . str_replace('\\', '/', $className) . '.php';
        
        include $path;
    });

************************************************************************