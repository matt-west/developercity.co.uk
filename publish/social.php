<?php
  $title = "Social // Developer City";
  $description = "";
  
  include_once('templates/header.php');
?>

  <div id=container class=clearfix role=main>
    <section id=page-text class=clearfix>
      <h1 id=social>Social</h1>

      <div id=social-left>
        <section id=social-events>
          <h1>Say Hello At...</h1>
          <ul>
            <li class=clearfix>
              <div class=event-date>
                Sept <br>20
              </div>
              <div class=event-details>
                <div class=event-name>
                  MK Geek Night
                </div>
                <div class=event-location>
                  Milton Keynes, England
                </div>
              </div>
            </li>
            <li class=clearfix>
              <div class=event-date>
                Nov <br>12-16
              </div>
              <div class=event-details>
                <div class=event-name>
                  Build Conference 2012
                </div>
                <div class=event-location>
                  Belfast, Northern Ireland
                </div>
              </div>
            </li>
            <li class=clearfix>
              <div class=event-date>
                Jan <br>24
              </div>
              <div class=event-details>
                <div class=event-name>
                  New Adventures in Web Design
                </div>
                <div class=event-location>
                  Nottingham, England
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section id=social-instagram>
          <h1>Instagram Photos</h1>
          <div id=instagram-photos class=clearfix></div>
        </section>
      </div>

      <section id=social-twitter>
        <h1>Latest Tweets</h1>
        <div id=twitter-posts></div>
        <a href="https://twitter.com/MattAntWest" class=twitter-follow-button data-show-count=false>Follow @MattAntWest</a>
        <script>!function(e,a,f){var c,b=e.getElementsByTagName(a)[0];if(!e.getElementById(f)){c=e.createElement(a);c.id=f;c.src="//platform.twitter.com/widgets.js";b.parentNode.insertBefore(c,b)}}(document,"script","twitter-wjs");</script>
      </section>
    </section>
  </div>

<?php
  include_once('templates/footer.php');
?>