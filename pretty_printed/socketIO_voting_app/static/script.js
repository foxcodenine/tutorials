$(document).ready(function() {
    var socket = io.connect('http://127.0.0.1:5000');


    $('#vote1').on('click', function(){
        socket.emit('vote', 1);
    });

    $('#vote2').on('click', function(){
        socket.emit('vote', 2);
    });

    

    socket.on('vote_results', function(results){

        var total_votes = results.results1 + results.results2;
        var one_pct = Math.round(results.results1 / total_votes * 100);
        var two_pct = 100 - one_pct;

        $('#results1').css('width', one_pct +'%');
        $('#results2').css('width', two_pct +'%');


    });

});