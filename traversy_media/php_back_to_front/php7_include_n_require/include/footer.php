    <p>php' . The difference between include and require arises when the file 
    being included cannot be found: include will emit a warning ( E_WARNING ) 
    and the script will continue, whereas require will emit a fatal error 
    ( E_COMPILE_ERROR ) and halt the script.</p>

    <p>The require_once() statement is identical to require() except PHP will 
    check if the file has already been included, and if so, not include (require)
     it again.</p>
    <footer>
        <p>Mywebsite &copy; 2017</p>
    </footer>
</body>
</html>