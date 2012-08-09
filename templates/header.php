<?php
  $current_page = str_replace(".php", "", basename($_SERVER['PHP_SELF']));
?>

<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Use the .htaccess and remove these lines to avoid edge case issues.
       More info: h5bp.com/i/378 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title><?= $title ?></title>
  <meta name="description" content="<?= $description ?>">

  <base href="http://localhost/Projects/websites/developercity/">

  <!-- Mobile viewport optimized: h5bp.com/viewport -->
  <meta name="viewport" content="width=device-width">
  
  <link rel="shortcut icon" href="favicon.ico" type="image/vnd.microsoft.icon" /> 
  <link rel="icon" href="favicon.ico" type="image/vnd.microsoft.icon" /> 

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

  <link rel="stylesheet" href="css/style.css">

  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

  <!-- All JavaScript at the bottom, except this Modernizr build.
       Modernizr enables HTML5 elements & feature detects for optimal performance.
       Create your own custom Modernizr build: www.modernizr.com/download/ -->
  <script src="js/libs/modernizr-2.5.3.min.js"></script>
</head>
<body class="<?= $current_page ?>">
  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
  
  <!-- Header -->
  <header class="clearfix">
    <div id="logo">
      <a href="./">Developer City</a>
    </div>
    <!-- Nav -->
    <nav>
      <ul class="clearfix">
        <li>
          <a href="about" title="About" <?= ($current_page == "about") ? "class='active'" : "" ?>>
            <div class="page-title">About</div>
            <div class="page-description">Who We Are</div>
          </a>
        </li>
        <li>
          <a href="design" title="Web Design" <?= ($current_page == "design") ? "class='active'" : "" ?>>
            <div class="page-title">Design</div>
            <div class="page-description">Crafting Pixels</div>
          </a>
        </li>
        <li>
          <a href="development" title="Web Development" <?= ($current_page == "development") ? "class='active'" : "" ?>>
            <div class="page-title">Development</div>
            <div class="page-description">Mining Data</div>
          </a>
        </li>
        <li>
          <a href="projects" title="Projects" <?= ($current_page == "projects") ? "class='active'" : "" ?>>
            <div class="page-title">Projects</div>
            <div class="page-description">Our Work</div>
          </a>
        </li>
        <li>
          <a href="social" title="Social Stream" <?= ($current_page == "social") ? "class='active'" : "" ?>>
            <div class="page-title">Social</div>
            <div class="page-description">Our Noise</div>
          </a>
        </li>
        <li>
          <a href="contact" title="Contact" <?= ($current_page == "contact") ? "class='active'" : "" ?>>
            <div class="page-title">Contact</div>
            <div class="page-description">Say Hello!</div>
          </a>
        </li>
      </ul>
    </nav>
  </header>