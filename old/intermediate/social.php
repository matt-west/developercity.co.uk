<?php
  $title = "Social // Developer City";
  $description = "";
  
  include_once('templates/header.php');
?>

  <div id="container" class="clearfix" role="main">
    <section id="page-text" class="clearfix">
      <h1 id="social">Social</h1>

      <div id="social-left">
        <section id="social-events">
          <h1>Say Hello At...</h1>
          <ul>
            <li class="clearfix">
              <div class="event-date">
                Nov <br>12-16
              </div>
              <div class="event-details">
                <div class="event-name">
                  Build Conference 2012
                </div>
                <div class="event-location">
                  Belfast, Northern Ireland
                </div>
              </div>
            </li>
            <li class="clearfix">
              <div class="event-date">
                Dec <br>6
              </div>
              <div class="event-details">
                <div class="event-name">
                  MK Geek Night
                </div>
                <div class="event-location">
                  Milton Keynes, England
                </div>
              </div>
            </li>
            <li class="clearfix">
              <div class="event-date">
                Jan <br>24
              </div>
              <div class="event-details">
                <div class="event-name">
                  New Adventures in Web Design
                </div>
                <div class="event-location">
                  Nottingham, England
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section id="social-instagram">
          <h1>Instagram Photos</h1>
          <div id="instagram-photos" class="clearfix"></div>
        </section>
      </div>

      <section id="social-twitter">
        <h1>Latest Tweets</h1>
        <div id="twitter-posts"></div>
        <a href="https://twitter.com/MattAntWest" class="twitter-follow-button" data-show-count="false">Follow @MattAntWest</a>
        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
      </section>
    </section>
  </div>

<?php
  include_once('templates/footer.php');
?>