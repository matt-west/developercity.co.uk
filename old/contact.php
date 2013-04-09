<?php
  $title = "Contact Developer City";
  $description = "How to get in touch with Developer City to discuss a web degirn or application development project.";

  include_once('templates/header.php');
?>

  <div id="container" class="clearfix" role="main">
    <section id="page-text" class="clearfix">
      <h1 id="contact">Contact</h1>

      <section id="contact-message" class="clearfix">
        <h1>Say Hello...</h1>
        <div id="form-errors"></div>
        <form method="post" action="mailers/contact.php">
          <p>
            <input type="text" id="name" name="name" placeholder="Name" required>
          </p>
          <p>
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" required>
          </p>
          <p>
            <input type="email" id="email" name="email" placeholder="Email" required>
          </p>
          <p>
            <textarea name="message" id="message" placeholder="Type your message here..." required></textarea>
          </p>
          <p>
            <button id="submit">Send</button>
          </p>
        </form>
      </section>

      <section id="contact-trad" class="clearfix" itemscope itemtype="http://schema.org/LocalBusiness">
        <meta itemprop="image" content="http://developercity.co.uk/apple_touch_114.png">
        <meta itemprop="url" content="http://developercity.co.uk">
        <meta itemprop="email" content="hello@developercity.co.uk">
        <h1>Phone &amp; Post</h1>
        <p>
          <span itemprop="telephone">+44 (0) 1604 749014</span><br>
          <span itemprop="telephone">+44 (0) 2081 333216</span>
        </p>
        <p itemscope itemtype="http://schema.org/PostalAddress" itemprop="address">
          <span itemprop="name">Developer City</span><br>
          <span itemprop="streetAddress">Seatons Business Centre</span><br>
          <span itemprop="streetAddress">High Street</span><br>
          <span itemprop="addressLocality">Guilsborough</span><br>
          <span itemprop="addressRegion">Northamptonshire</span><br>
          <span itemprop="postalCode">NN6 9EE</span><br>
          <span itemprop="addressCountry">England</span>
        </p>
        <p>
          <a href="https://twitter.com/MattAntWest" class="twitter-follow-button" data-show-count="false">Follow @MattAntWest</a>
          <a href="https://twitter.com/DeveloperCity" class="twitter-follow-button" data-show-count="false">Follow @DeveloperCity</a>
          <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
        </p>
      </section>
      
    </section>
  </div>

<?php
  include_once('templates/footer.php');
?>