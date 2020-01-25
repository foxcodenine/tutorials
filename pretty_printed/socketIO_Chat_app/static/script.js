
$(document).ready(function(){

    var scoket = io.connect('http://127.0.0.1:5000');
    scoket.on('connect', function(){
        scoket.emit('myMessages','User has connected!!!!');
    });

    var btnSend;
    btnSend = $('#sendbutton').on('click',function(){

        var myMessage = $('#myMessage').val();

        // document.getElementById('messages').innerHTML += "<li>"+myMessage+"</li>"
        scoket.emit('myMessages', myMessage)

     });

    scoket.on('flask_msg', function(msgFromFlask){
        document.getElementById('messagesJS').innerHTML += "<li>"+msgFromFlask+"</li>"
    });

});

















// $(document).ready(function() {

//     var scoket = io.connect('http://127.0.0.1:5000')

//     scoket.on('connect', function() {
//         scoket.send('I am now connected!');  
//     });
// });