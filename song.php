<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><?php echo $_GET['song'] ?></title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/eric-meyer.css">
    <link rel="stylesheet" type="text/css" href="css/ungrid.css">
  </head>
  <body>
    <div class="album-songs">
      <?php
      $album = $_GET['album'];
      $song = $_GET['song'];
      $dir = "gd-multitrack/" . $album . "/" . $song;
      $files = preg_grep('/^([^.])/', scandir($dir));
      $titles = array("Drums", "", "", "Bass", "Guitar", "Vocals", "Additional");
      ?>
      <div class="row">
          <?php
          $i = 0;
          foreach ($files as $value) {
            echo "<div class='col'>";
            if ($value == "01-kick-drum") {
              echo "<p>Drums</p>";
            } elseif ($value == "04-bass") {
              echo "<p>Bass</p>";
            } elseif ($value == "05-guitar") {
              echo "<p>Guitar</p>";
            } elseif ($value == "06-vocals") {
              echo "<p>Vocals</p>";
            } elseif ($value == "07-additional-instruments") {
              echo "<p>Other</p>";
            }
            echo "
              <audio class='audio' controls>
                <source src='gd-multitrack/" . $album . "/" . $song . "/" . $value . "' type='audio/ogg' />
              </audio><br/>
            ";

            echo "<button id='track" . $i .  "Button' class='button buttonOff' onclick='track" . $i . "Mute();''>" . $i . "</button><br/>";
            echo "
            <script type='text/javascript'>
            var track" . $i . "Mute = function() {
              var audio = document.getElementsByClassName('audio');
                if (audio[" . $i . "].muted == true) {
                  audio[" . $i . "].muted = false;
                  track" . $i .  "Button.className = '';
                  track" . $i .  "Button.className = 'button buttonOff';
                } else {
                  audio[" . $i . "].muted = true;
                  track" . $i .  "Button.className = '';
                  track" . $i .  "Button.className = 'button buttonOn';
                }
            }
            </script>
            ";
            echo "</div>";
            $i++;
          } ?>
      </div>
      <div class="row spacer"></div>
      <div class="row">
        <div class="col">
          <button id="pButton" class="button play buttonOff" onclick="play();"></button><br/>
        </div>
      </div>

      <script type="text/javascript">
      var play = function() {
        var audio = document.getElementsByClassName('audio');
        if (audio[0].paused) {
          for (var i = 0; i < audio.length; i++) {
            audio[i].play();
          }
          pButton.className = "";
          pButton.className = "button pause buttonOff";
        } else {
          for (var i = 0; i < audio.length; i++) {
            audio[i].pause();
          }
          pButton.className = "";
          pButton.className = "button play buttonOn";
        }
      }
      </script>

    </div>
  </body>
</html>
