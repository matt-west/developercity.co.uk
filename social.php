<?php
  $title = "Social // Developer City";
  $description = "";
  
  include_once('templates/header.php');
?>

  <div id="container" class="clearfix" role="main">
    <section id="page-text" class="clearfix">
      <h1 id="social">Social</h1>

      <section id="social-twitter">
        <h1>Latest Tweets</h1>
        <div id="twitter-posts"></div>
      </section>
      <section id="social-events">
        <h1>Upcoming Events</h1>
        <ul>
          <li class="clearfix">
            <div class="event-date">
              Sept <br>20
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
        </ul>
      </section>
      <section id="social-instagram">
        <h1>Instagram Photos</h1>
        <div id="instagram-photos"></div>
      </section>
    </section>
  </div>

<?php
  include_once('templates/footer.php');
?>