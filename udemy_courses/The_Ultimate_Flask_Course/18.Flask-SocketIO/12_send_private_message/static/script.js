// alert('PAGE WORK')


$(document).ready(function(){


    var scoket = io.connect('http://127.0.0.1:5000')

    //--------------------------

    $('#send').on('click', function(){

        var message = $('#message').val();

        scoket.emit('message from user', message);        
    });

    //--------------------------

    scoket.on('forward from flask', function(msg){
        alert(msg);
    });

    //--------------------------

    scoket.on('server_originated', function(msg){
        alert(msg);
    });

    //-------------------------

    // Session_id

    var private_scoket = io.connect('http://127.0.0.1:5000/private')

    $('#send_username').on('click', function(){

        var username = $('#username').val();

        private_scoket.emit('username', username);

    });

    //--------------------------

    // Send_private_message 
    // (we are using the same socket as in session.)

    $('#send_private_message').on('click', function(){

        var recipient = $('#send_to_username').val();
        var message_to_send = $('#private_message').val();

        private_scoket.emit('private_message', {'username': recipient, 'message': message_to_send});

    });

    private_scoket.on('new_private_message', function(msg){
        alert(msg);
    });

       

// //___________________________________________________________________
    // /* Here we are listening to the connect event and when it happens we are sending
    // a message from the client to server  */
    // scoket.on('connect', function() {
    //     scoket.send('I am now connected!');  
    // Wallet	Reward
    // Yoroi R3	322.141139 ADA
    // Daedalus R2	325.255966 ADA
    // Daedalus R1	223.267716 ADA

        // /* Here we are listening to the server message (C) and sending it as an
        // alert */
        // scoket.on('message', function(msg) {
        //     alert(msg);
        // });
        

        // /* emit vs send.  emit is a message with a name */
        // // scoket.emit('custom event', 'The custom event message!');
        // scoket.emit('custom event', {'name' : 'Anthony'});

        // // scoket.on('from flask', function(msg) {
        // //     alert(msg);
        // // });


        // /* Here we are listening to the emit server message (CC) and sending it as an
        // alert */
        // scoket.on('from flask', function(msg) {
        //     alert(msg['extension']);
        // });       

    // }); 
// //___________________________________________________________________

});