// alert('PAGE WORK')


$(document).ready(function(){


    var scoket = io.connect('http://127.0.0.1:5000');
    var scoket_messages = io.connect('http://127.0.0.1:5000/messages');
    var scoket_notifications = io.connect('http://127.0.0.1:5000/notifications');

    //--------------------------

    $('#send').on('click', function(){

        var message = $('#message').val();

        scoket.emit('message from user', message);        
    });

    $('#msg_send').on('click', function(){

        var message = $('#msg_message').val();

        scoket_messages.emit('message from user', message);        
    });

    $('#ntf_send').on('click', function(){

        var message = $('#ntf_message').val();

        scoket_notifications.emit('message from user', message);        
    });


    //--------------------------

    scoket.on('forward from flask', function(msg){
        alert(msg);
    });

    //--------------------------

    scoket.on('server_originated', function(msg){
        alert(msg);
    });



// //___________________________________________________________________
    // /* Here we are listening to the connect event and when it happens we are sending
    // a message from the client to server  */
    // scoket.on('connect', function() {
    //     scoket.send('I am now connected!');  
        

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