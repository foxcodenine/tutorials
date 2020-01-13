// alert('PAGE WORK')

var scoket = io.connect('http://127.0.0.1:5000')

scoket.on('connect', function() {
    scoket.send('I am now connected!');

    // scoket.emit('custom event', 'The custom event message!');
    scoket.emit('custom event', {'name' : 'Anthony'});

    // scoket.on('from flask', function(msg) {
    //     alert(msg);
    // });

    scoket.on('from flask', function(msg) {
        alert(msg['extension']);
    });

    scoket.on('message', function(msg) {
        alert(msg);
    });
}); 