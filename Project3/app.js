var main=function() {
    var volume;
  //The PLAY button
    $('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
});

$('#pause').click(function(){
    $('#message').text("Track paused");
    $('#player').trigger("pause");
});
var mute
 $('#Mute').click(function(){
    $('#message').text("Track muted");
    $("#player").prop('muted', true);
});

var unmute
 $('#Unmute').click(function(){
    $('#message').text("Track unmuted");
    $("#player").prop('muted', false);
});

$('#Stop').click(function(){
    $('#player').trigger("pause");
    $("#player").prop('currentTime',0);
    $('#message').text("Track stopped");
    
     
});
$('#volUp').click(function(){
    $('#message').text("volUp");
    $('#player').trigger("volUp");
     $("#player").prop('volume', 0.2);
});
 $('#volDown').click(function(){
    $('#message').text("volDown");
    $('#player').trigger("volDown");
    $("#player").prop('volume', 0.1);
  });  
}
$(document).ready(main);
