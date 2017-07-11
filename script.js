$(document).ready(function() {
    /* Instrument Toggle Buttons */
    var guitar = false;
    $("#btnGuitar").click(function(){
      $.fn.fnGuitar();
    });

    var bass = false;
    $("#btnBass").click(function(){
      $.fn.fnBass();
    });

    var drums = false;
    $("#btnDrums").click(function(){
      $.fn.fnDrums();
    });

    var vocals = false;
    $("#btnVocals").click(function(){
      $.fn.fnVocals();
    });

    /* Instrument Functions */
    $.fn.fnGuitar = function(){
      if (guitar==true) {
        guitar = false;
        console.log("guitar = false");
        $("#btnGuitar").css("background-color", "#F728B4");
        $(".guitar").css("display", "none");
      } else if (guitar==false) {
        guitar = true;
        console.log("guitar = true");
        $("#btnGuitar").css("background-color", "#dd089a");
        $(".guitar").css("display", "block");
      }
    }

    $.fn.fnBass = function(){
      if (bass==true) {
        bass = false;
        console.log("bass = false");
        $("#btnBass").css("background-color", "#F728B4");
        $(".bass").css("display", "none");
      } else if (bass==false) {
        bass = true;
        console.log("bass = true");
        $("#btnBass").css("background-color", "#dd089a");
        $(".bass").css("display", "block");
      }
    }

    $.fn.fnDrums = function(){
      if (drums==true) {
        drums = false;
        console.log("drums = false");
        $("#btnDrums").css("background-color", "#F728B4");
        $(".drums").css("display", "none");
      } else if (drums==false) {
        drums = true;
        console.log("drums = true");
        $("#btnDrums").css("background-color", "#dd089a");
        $(".drums").css("display", "block");
      }
    }

    $.fn.fnVocals = function(){
      if (vocals==true) {
        vocals = false;
        console.log("vocals = false");
        $("#btnVocals").css("background-color", "#F728B4");
      } else if (vocals==false) {
        vocals = true;
        console.log("vocals = true");
        $("#btnVocals").css("background-color", "#dd089a");
      }
    }

    /* Album Toggle Buttons */
    var americanIdiot = false;
    $("#btnAmericanIdiot").click(function(){
      $.fn.fnAmericanIdiot();
    });

    var dookie = false;
    $("#btnDookie").click(function(){
      $.fn.fnDookie();
    });

    var warning = false;
    $("#btnWarning").click(function(){
      $.fn.fnWarning();
    });

    var centuryBreakdown = false;
    $("#btn21stCentury").click(function(){
      $.fn.fnCenturyBreakdown();
    });

    /* Album Functions */
    $.fn.fnAmericanIdiot = function(){
      if (americanIdiot==true) {
        americanIdiot = false;
        console.log("americanIdiot = false");
        $("#btnAmericanIdiot").css("background-color", "#000000");
        $(".americanIdiot").css("display", "none");
      } else if (americanIdiot==false) {
        americanIdiot = true;
        console.log("americanIdiot = true");
        $("#btnAmericanIdiot").css("background-color", "#444444");
        $(".americanIdiot").css("display", "block");
      }
    }

    $.fn.fnDookie = function(){
      if (dookie==true) {
        dookie = false;
        console.log("dookie = false");
        $("#btnDookie").css("background-color", "#DAE4EE");
        $(".dookie").css("display", "none");
      } else if (dookie==false) {
        dookie = true;
        console.log("dookie = true");
        $("#btnDookie").css("background-color", "#a8bfd7");
        $(".dookie").css("display", "block");
      }
    }

    $.fn.fnWarning = function(){
      if (warning==true) {
        warning = false;
        console.log("warning = false");
        $("#btnWarning").css("background-color", "#E1E0DE");
        $(".warning").css("display", "none");
      } else if (warning==false) {
        warning = true;
        console.log("warning = true");
        $("#btnWarning").css("background-color", "#c2c0bc");
        $(".warning").css("display", "block");
      }
    }

    $.fn.fnCenturyBreakdown = function(){
      if (centuryBreakdown==true) {
        centuryBreakdown = false;
        console.log("21stCentury = false");
        $("#btn21stCentury").css("background-color", "#010101");
        $(".21stCentury").css("display", "none");
      } else if (centuryBreakdown==false) {
        centuryBreakdown = true;
        console.log("21stCentury = true");
        $("#btn21stCentury").css("background-color", "#444444");
        $(".21stCentury").css("display", "block");
      }
    }
});
