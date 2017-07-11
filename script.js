$(document).ready(function() {
    var guitar = false;
    $("#btnGuitar").click(function(){
      if (guitar==true) {
        guitar = false;
        console.log("guitar = false");
        $("#btnGuitar").css("background-color", "#F728B4");
      } else if (guitar==false) {
        guitar = true;
        console.log("guitar = true");
        $("#btnGuitar").css("background-color", "#dd089a");
      }
    });

    var bass = false;
    $("#btnBass").click(function(){
      if (bass==true) {
        bass = false;
        console.log("bass = false");
        $("#btnBass").css("background-color", "#F728B4");
      } else if (bass==false) {
        bass = true;
        console.log("bass = true");
        $("#btnBass").css("background-color", "#dd089a");
      }
    });

    var drums = false;
    $("#btnDrums").click(function(){
      if (drums==true) {
        drums = false;
        console.log("drums = false");
        $("#btnDrums").css("background-color", "#F728B4");
      } else if (drums==false) {
        drums = true;
        console.log("drums = true");
        $("#btnDrums").css("background-color", "#dd089a");
      }
    });

    var vocals = false;
    $("#btnVocals").click(function(){
      if (vocals==true) {
        vocals = false;
        console.log("vocals = false");
        $("#btnVocals").css("background-color", "#F728B4");
      } else if (vocals==false) {
        vocals = true;
        console.log("vocals = true");
        $("#btnVocals").css("background-color", "#dd089a");
      }
    });

    var americanIdiot = false;
    $("#btnAmericanIdiot").click(function(){
      if (americanIdiot==true) {
        americanIdiot = false;
        console.log("americanIdiot = false");
        $("#btnAmericanIdiot").css("background-color", "#000000");
      } else if (americanIdiot==false) {
        americanIdiot = true;
        console.log("americanIdiot = true");
        $("#btnAmericanIdiot").css("background-color", "#444444");
      }
    });

    var dookie = false;
    $("#btnDookie").click(function(){
      if (dookie==true) {
        dookie = false;
        console.log("dookie = false");
        $("#btnDookie").css("background-color", "#DAE4EE");
      } else if (dookie==false) {
        dookie = true;
        console.log("dookie = true");
        $("#btnDookie").css("background-color", "#a8bfd7");
      }
    });

    var warning = false;
    $("#btnWarning").click(function(){
      if (warning==true) {
        warning = false;
        console.log("warning = false");
        $("#btnWarning").css("background-color", "#E1E0DE");
      } else if (warning==false) {
        warning = true;
        console.log("warning = true");
        $("#btnWarning").css("background-color", "#c2c0bc");
      }
    });

    var centuryBreakdown = false;
    $("#btn21stCentury").click(function(){
      if (centuryBreakdown==true) {
        centuryBreakdown = false;
        console.log("21stCentury = false");
        $("#btn21stCentury").css("background-color", "#010101");
      } else if (centuryBreakdown==false) {
        centuryBreakdown = true;
        console.log("21stCentury = true");
        $("#btn21stCentury").css("background-color", "#444444");
      }
    });
});
