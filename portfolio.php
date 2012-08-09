<?php
  $title = "Portfolio // Developer City";
  $description = "";
  
  include_once('templates/header.php');
?>

  <div id="container" class="clearfix" role="main">
    <section id="page-text" class="clearfix">
      <h1>Portfolio</h1>

      <!-- LOCARN -->
      <section class="project clearfix">
        <a href="projects/locarn" title="LOCARN Project Details">
          <img src="img/portfolio/locarn.png" alt="The LOCARN Website">
          <h1>LOCARN</h1>
        </a>
      </section>
      
      <!-- Init Photography -->
      <section class="project project-first clearfix">
        <a href="projects/init-photography" title="Init Photography Project Details">
          <img src="img/portfolio/init2.png" alt="The Init Photography Website">
          <h1>Init Photography</h1>
        </a>
      </section>

      <!-- Heritage Wood Floors -->
      <section class="project clearfix">
        <a href="projects/heritage-wood-floors" title="Heritage Wood Floors Project Details">
          <img src="img/portfolio/hwf.png" alt="The Heritage Wood Floors Website">
          <h1>Heritage Wood Floors</h1>
        </a>
      </section>

    </section>
  </div>

<?php
  include_once('templates/footer.php');
?>