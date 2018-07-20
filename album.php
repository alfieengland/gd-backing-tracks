<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><?php echo $_GET['album'] ?></title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/eric-meyer.css">
    <link rel="stylesheet" type="text/css" href="css/ungrid.css">
  </head>
  <body>
    <div class="album-songs">
      <?php
      if($_GET['album'] == "21st-century-breakdown") {
        $songs = array("song-of-the-century", "21st-century-breakdown", "know-your-enemy", "viva-la-gloria", "before-the-lobotomy", "christians-inferno", "last-night-on-earth", "east-jesus-nowhere", "peacemaker", "last-of-the-american-girls", "murder-city", "restless-heart-syndrome", "horseshoes-and-handgrenades", "the-static-age", "21-guns", "american-eulogy", "see-the-light");
      } elseif ($_GET['album'] == "american-idiot") {
        $songs = array("american-idiot", "jesus-of-suburbia", "holiday", "boulevard-of-broken-dreams", "are-we-the-waiting-st-jimmy", "give-me-novacaine-shes-a-rebel", "extraordinary-girl", "letterbomb", "wake-me-up-when-september-ends", "homecoming", "whatsername");
      } elseif ($_GET['album'] == "dookie") {
        $songs = array("burnout", "having-a-blast", "chump", "longview", "welcome-to-paradise", "pulling-teeth", "basket-case", "she", "sassafras-roots", "when-i-come-around", "coming-clean", "emenius-sleepus", "in-the-end", "f.o.d");
      } elseif ($_GET['album'] == "other") {
        $songs = array("brain-stew", "geek-stink-breath", "hitchin-a-ride", "minority", "nice-guys-finish-last", "time-of-your-life", "warning");
      }

      echo "<div class='row album-row'>";
      $i = 0;
      foreach ($songs as $value) {

        echo "<div class='col song ";
        if ($_GET['album'] == "21st-century-breakdown") {
          echo "century-breakdown-songs";
        } elseif ($_GET['album'] == "american-idiot") {
          echo "american-idiot-songs";
        } elseif ($_GET['album'] == "dookie") {
          echo "dookie-songs";
        } else {
          echo "other-songs";
        }
        echo "'>";
        echo "<a class='songLink' href='song.php?album=" . $_GET['album'] . "&song=" . $value . "'><h1>" . $value . "</h1></a>";
        echo "</div>";
        $i++;
        if ($i % 2 == 0 && $i != count ($songs)) {
          echo "</div>";
          echo "<div class='row album-row'>";
        }
      }
      ?>
    </div>
  </body>
</html>
