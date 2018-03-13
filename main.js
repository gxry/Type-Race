/* 
    Created by: -gx-
    Date:       08 March 2018
    
    This code is fucking simple, but i'll do my best to made it

    Btw, You can modify this code, enjoy it
*/

var mudah = ["mudah", "susah", "aku", "kamu", "dia", "kenapa", "apa", "cinta", "kau", "dan", "dia", "meng4pa", "c1nta", "d1mana", "k4mu", "ker3n", "kuran9", "cepa7", "l4ptop", "busy3t", "sus4h", "bang3t"]
var score = 0
var waktu = 16

function mulai() {
    $("#katanya").show();
    indexing = Math.floor(Math.random() * mudah.length)
    randomkata = mudah.splice(indexing, 1)
    $("#katanya").text(randomkata);
    $("#score").html("<b>Score: 0</b>");
    $("#ketikannya").show();
    $("#ketikannya").focus();
    $("#btnStart").hide();
}

function countdown() {
    start = setInterval(function() {
        waktu -=1;
        $("#waktu").html(" | <b>Countdown: " + waktu + "</b>");
        
        if (waktu <= 0) {
            clearInterval(start);
            var audio = new Audio('win.mp3');
            audio.play();
            $("#waktu").html(" | <b>Waktu Selesai!</b><br/><br/>Do you want to share your score and invite other to play?<br/><a href='whatsapp://send?text=Hi, my score is: " + score + " Try to beat me with play this game https://final-gxry.netlify.com' data-action='share/whatsapp/share' >Share</a>");
            $("#ketikannya").hide();
            $("#ketikannya").val("");
            $("#katanya").hide();
            $("#btnStart").show();
            $("#btnStart").html("Play Again");
            score = 0
            waktu = 16
        }
    }, 1000);
}

function ketik() {
    ketikannya = $("#ketikannya").val()
    katanya = $("#katanya").text()
    if (katanya == ketikannya) {
        var audio = new Audio('sound.mp3');
        audio.play();
        $("#ketikannya").val("");
        mulai();
        score +=1;
        $("#score").html("<b>Score: " + score + "</b>");
    }
}

function init() {
    $("#ketikannya").hide();
}