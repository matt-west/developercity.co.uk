<?php
  $title = "Portfolio - Developer City";
  $description = "A selection of recent web design and app development work.";
  
  include_once('templates/header.php');
?>

  <div id="container" class="clearfix" role="main">
    <section id="page-text" class="clearfix">
      <h1>Portfolio</h1>

      <section id="html5-foundations" class="clearfix project">
        <figure>
          <a href="img/portfolio/html5-foundations.png" class="fancybox"><img src="img/portfolio/html5-foundations.png" alt="HTML5 Foundations Website"></a>
        </figure>
        <div class="project-content">
          <h1>HTML5 Foundations</h1>
          <p>
            To support the release of my first book (<a href="http://html5foundations.com" title="HTML5 Foundations by Matt West" target="_blank">HTML5 Foundations</a>) I created a simple one-page promotional website that acts as a landing page to entice in potential readers when they search for the book.
          </p>
          <p>
            The website was designed to be inline with Treehouse's brand identity and uses a bespoke <a href="design#rwd" title="Responsive Web Design">fluid grid system</a> to allow the layout to be responsive to different screen sizes. The site looks just as fantastic on mobile devices as it does on laptop and desktop computers.
          </p>
          <p>
            The HTML5 Foundations website makes use of <a href="development#html5" title="HTML5 Websites by Developer City">HTML5</a>, CSS3 and JavaScript to create an enjoyable in-browser <a href="design#ux" title="User Experience Design">experience</a>, all on a single web page.
          </p>
          <p>
            <a href="http://html5foundations.com" target="_blank" class="visit-link">Visit the HTML5 Foundations Website</a>
          </p>
        </div>
      </section>

      <section id="locarn" class="clearfix project">
        <figure>
          <a href="img/portfolio/locarn-1.png" class="fancybox"><img src="img/portfolio/locarn-1.png" alt="LOCARN"></a>
        </figure>
        <div class="project-content">
          <h1>LOCARN</h1>
          <p>
            LOCARN approached me towards the end of last year to build them a website that could handle orders for their timed delivery service. I designed and developed a <a href="./development#rails">Ruby on Rails</a> application with a promotional website, customer portal and admin interface.
          </p>
          <p>
            The admin interface is used to manage parcels as they pass through LOCARN's internal processes. It tracks a parcel from the minute it arrives at the depot right through to it being delivered to the customer.
          </p>
          <p>
            Customers can log in to the customer portal to select a time slot that they would like their parcel to be delivered in and then pay. Slots are presented in hourly segments. The slot picker is backed by a bespoke route optimiser to ensure that LOCARN can indeed deliver the parcel at the time requested, taking into account any current inventory and orders. Customers can also use the portal to track active parcels, access their delivery and billing history and manage multiple delivery addresses.
          </p>
          <p>
            This project involved using the following technologies: Ruby on Rails (with RSpec <a href="./development#testing">Automated Testing</a>), Task Queues, <a href="./development#html5">HTML5</a>, CSS3, JavaScript and the TxtLocal SMS Service API.
          </p>
          <p>
            <a href="http://locarn.co.uk" target="_blank"  class="visit-link">Visit the LOCARN Website</a>
          </p>
        </div>
      </section>

      <section id="init" class="clearfix project">
        <figure>
          <a href="img/portfolio/init-photography-1.png" class="fancybox"><img src="img/portfolio/init-photography-1.png" alt="Init Photography"></a>
        </figure>
        <div class="project-content">
          <h1>Init Photography</h1>
          <p>
            Johanna from Init Photography approached me earlier this year to design and build a website for her new photography business. She wanted something that was simple but effective.
          </p>
          <p>
            Using a combination of PHP, HTML5, CSS3 and JavaScript I designed Johnanna a website that captures the simplistic and honest character of her business.
          </p>
          <p>
            <a href="http://initphotography.co.uk" target="_blank" class="visit-link">Visit the Init Photography Website</a>
          </p>
        </div>
      </section>

      <section id="nina-ferrara" class="clearfix project">
        <figure>
          <a href="img/portfolio/nina-ferrara.png" class="fancybox"><img src="img/portfolio/nina-ferrara.png" alt="Nina Ferrara"></a>
        </figure>
        <div class="project-content">
          <h1>Nina Ferrara</h1>
          <p>
            Nadine from Nina Ferrara approached me in May to redesign her online clothing store. She was in the process of changing the name of her company and wanted a design that incorporated the new brand identity.
          </p>
          <p>
            I created a stylish new design for the Nina Ferrara website, working with the existing ecommerce platform (Magento) to create custom layout templates that allow Nadine to manage the website herself.
          </p>
          <p>
            This project involved working with PHP, Magento, HTML5, CSS3, JavaScript and MySQL.
          </p>
          <p>
            <a href="http://ninaferrara.co.uk" target="_blank"  class="visit-link">Visit the Nina Ferrara Website</a>
          </p>
        </div>
      </section>

      <section id="coding-skyscrapers" class="clearfix project">
        <figure>
          <a href="img/portfolio/coding-skyscrapers.png" class="fancybox"><img src="img/portfolio/coding-skyscrapers.png" alt="Coding Skyscrapers"></a>
        </figure>
        <div class="project-content">
          <h1>Coding Skyscrapers</h1>
          <p>
            Coding Skyscrapers is my personal blog. When it came to coming up with a design for this site I really wanted to make the content the focus. I have a string belief that to make the content shine the rest of the page elements need to get out of the way. The resulting minimalist layout and color scheme almost feels <em>undesigned</em>.
          </p>
          <p>
            The website is backed by <a href="http://www.enkiblog.com/" title="Enki Blog" target="_blank" rel="nofollow">Enki</a>, an open-source <a href="development#rails" title="Ruby on Rails Development">Ruby on Rails</a> application. Enki provides a raw administration interface from which to manage pages and posts. It can also handle comments, although I opted to use <a href="http://disqus.com/" title="Disqus" target="_blank" rel="nofollow">Disqus</a> on this occasion.
          </p>
          <p>
            Coding Skyscrapers uses a fluid layout which allows the design to be <a href="design#rwd" title="Responsive Web Design">responsive</a> to the size of screen that it is being viewed on.
          </p>
          <p>
            <a href="http://codingskyscrapers.com" target="_blank" class="visit-link">Visit the Coding Skyscrapers Blog</a>
          </p>
        </div>
      </section>

      <!-- Leave this one out for now -->
      <!--<section id="two" class="clearfix project">
        <figure>
          <a href="img/portfolio/two.png" class="fancybox"><img src="img/portfolio/two.png" alt="LOCARN"></a>
        </figure>
        <div class="project-content">
          <h1>This Weeks Offers</h1>
          <p>
            This Weeks Offers required a website to showcase offers from small independent retailers in Market Harborough. The solution that I developed was a <a href="./development#rails">Ruby on Rails</a> application that includes an administration interface for managing offers and tracking site usage trends.
          </p>
          <p>
            The website makes extensive use of <a href="./development#html5">HTML5</a> and CSS3, and has a Facebook based authentication system. The design is <a href="./design#rwd">responsive</a> to provide the optimum experience to users at any screen size.
          </p>
          <p>
            <a href="http://thisweeksoffers.com" target="_blank" class="visit-link">Visit the This Weeks Offers Website</a>
          </p>
        </div>
      </section>-->

    </section>
  </div>

<?php
  include_once('templates/footer.php');
?>