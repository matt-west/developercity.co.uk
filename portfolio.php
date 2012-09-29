<?php
  $title = "Portfolio - Developer City";
  $description = "A selection of recent web design and app development work.";
  
  include_once('templates/header.php');
?>

  <div id="container" class="clearfix" role="main">
    <section id="page-text" class="clearfix">
      <h1>Portfolio</h1>

      <p class="right emphasize">
        A selection of my recent work.
      </p>
      <p class="right">
        I have been lucky enough to work with some fantastic companies (both big and small) over the past few years. Here are a few examples of projects I have completed for clients recently.
      </p>

      <section id="locarn" class="clearfix left project">
        <h1 class="left">LOCARN</h1>
        <figure class="left">
          <a href="img/portfolio/locarn-1.png" class="fancybox"><img src="img/portfolio/locarn-1.png" alt="LOCARN"></a>
        </figure>
        <p class="left">
          LOCARN approached me towards the end of last year to build them a website that could handle orders for their timed delivery service. I designed and developed a <a href="./development#rails">Ruby on Rails</a> application with a promotional website, customer portal and admin interface.
        </p>
        <p class="left">
          The admin interface is used to manage parcels as they pass through LOCARN's internal processes. It tracks a parcel from the minute it arrives at the depot right through to it being delivered to the customer.
        </p>
        <p class="left">
          Customers can log in to the customer portal to select a time slot that they would like their parcel to be delivered in and then pay. Slots are presented in hourly segments. The slot picker is backed by a bespoke route optimizer to ensure that LOCARN can indeed deliver the parcel at the time requested, taking into account any current inventory and orders. Customers can also use the portal to track active parcels, access their delivery and billing history and manage multiple delivery addresses.
        </p>
        <p class="left">
          This project involved using the following technologies: Ruby on Rails (with RSpec <a href="./development#testing">Automated Testing</a>), Task Queues, <a href="./development#html5">HTML5</a>, CSS3, JavaScript and the TxtLocal SMS Service API.
        </p>
        <p class="left">
          <a href="http://locarn.co.uk" target="_blank">Visit the LOCARN Website</a>
        </p>
      </section>

      <section id="init" class="clearfix right project">
        <h1 class="right">Init Photography</h1>
        <figure class="right">
          <a href="img/portfolio/init-photography-1.png" class="fancybox"><img src="img/portfolio/init-photography-1.png" alt="Init Photography"></a>
        </figure>
        <p class="right">
          Johanna from Init Photography approached me earlier this year to design and build a website for her new photography business. She wanted something that was simple but effective.
        </p>
        <p class="right">
          Using a combination of PHP, HTML5, CSS3 and JavaScript I designed Johnanna a website that captures the simplistic and honest character of her business.
        </p>
        <p class="right">
          <a href="http://initphotography.co.uk" target="_blank" class="visit-link">Visit the Init Photography Website</a>
        </p>
      </section>

      <section id="nina-ferrara" class="clearfix left project">
        <h1 class="left">Nina Ferrara</h1>
        <figure class="left">
          <a href="img/portfolio/nina-ferrara.png" class="fancybox"><img src="img/portfolio/nina-ferrara.png" alt="Nina Ferrara"></a>
        </figure>
        <p class="left">
          Nadine from Nina Ferrara approached me in May to redesign her online clothing store. She was in the process of changing the name of her company and wanted a design that incorporated the new brand identity.
        </p>
        <p class="left">
          I created a stylish new design for the Nina Ferrara website, working with the existing ecommerce platform (Magento) to create custom layout templates that allow Nadine to manage the website herself.
        </p>
        <p class="left">
          This project involved working with PHP, Magento, HTML5, CSS3, JavaScript and MySQL.
        </p>
        <p class="left">
          <a href="http://ninaferrara.co.uk" target="_blank">Visit the Nina Ferrara Website</a>
        </p>
      </section>

    </section>
  </div>

<?php
  include_once('templates/footer.php');
?>