<?php
  $title = "Contact // Developer City";
  $description = "";

  include_once('templates/header.php');
?>

  <div id="container" class="clearfix" role="main">
    <section id="page-text" class="clearfix">
      <h1 id="contact">Contact</h1>

      <section id="contact-message" class="clearfix">
        <h1>Send us a Message</h1>
        <form method="post" action="./">
          <p>
            <input type="text" name="name" placeholder="Name" required>
          </p>
          <p>
            <input type="tel" name="phone" placeholder="Phone Number" required>
          </p>
          <p>
            <input type="email" name="email" placeholder="Email" required>
          </p>
          <p>
            <textarea name="message" placeholder="Type your message here..." required></textarea>
          </p>
          <p>
            <button id="submit">Send</button>
          </p>
        </form>
      </section>

      <section id="contact-social" class="clearfix">
        <h1>Twitter &amp; Facebook</h1>
        <p>
          <a href="http://twitter.com/DeveloperCity" title="Developer City on Twitter" target="_blank">@DeveloperCity</a><br>
          <a href="http://twitter.com/MattAntWest" title="Matt West on Twitter" target="_blank">@MattAntWest</a><br>
          <a href="http://facebook.com/DeveloperCity" title="Developer City on Facebook" target="_blank">Developer City on Facebook</a>
        </p>
      </section>

      <section id="contact-trad" class="clearfix">
        <h1>Phone &amp; Post</h1>
        <p>
          +44 (0) 1604 749014<br>
          +44 (0) 2081 333216
        </p>
        <p>
          Developer City<br>
          Seatons Business Centre<br>
          High Street<br>
          Guilsborough<br>
          Northamptonshire<br>
          NN6 9EE<br>
          England
        </p>
      </section>
      
    </section>
  </div>

<?php
  include_once('templates/footer.php');
?>