<?php
  $current_page = str_replace(".php", "", basename($_SERVER['PHP_SELF']));
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title><?= $title ?></title>
  <meta name="description" content="<?= $description ?>">

  <!--<base href="http://<?= $_SERVER['SERVER_NAME']; ?>">-->

  <!-- Mobile viewport optimized: h5bp.com/viewport -->
  <meta name="viewport" content="width=device-width; initial-scale=1.0;" />
  <meta name="google-site-verification" content="PGKs7Ix2AUSHsL8OPQJyP86AOhCYG_eYFnaMgIbuJIE" />
  
  <link rel="shortcut icon" href="favicon.ico" type="image/vnd.microsoft.icon" /> 
  <link rel="icon" href="favicon.ico" type="image/vnd.microsoft.icon" /> 

  <meta property="og:image" content="img/dc-logo.png"/>

  <link rel="apple-touch-icon" href="apple_touch.png"/>
  <link rel="apple-touch-icon" sizes="72x72" href="apple_touch_72.png"/>
  <link rel="apple-touch-icon" sizes="114x114" href="apple_touch_114.png"/>

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="http://f.fontdeck.com/s/css/kBCt3QS3rQvDiYrN7YSJsihsnuI/<?php echo $_SERVER['SERVER_NAME']; ?>/22808.css" type="text/css" />
  <link href='http://fonts.googleapis.com/css?family=Niconne' rel='stylesheet' type='text/css'>

  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

  <!-- All JavaScript at the bottom, except this Modernizr build.
       Modernizr enables HTML5 elements & feature detects for optimal performance.
       Create your own custom Modernizr build: www.modernizr.com/download/ -->
  <script src="js/libs/modernizr-2.5.3.min.js"></script>
  <!--[if lt IE 9]>
  <script src="js/html5shiv.js"></script>
  <![endif]-->
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
            <div class="page-description">Brief Bio</div>
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
          <a href="portfolio" title="Portfolio" <?= ($current_page == "portfolio") ? "class='active'" : "" ?>>
            <div class="page-title">Portfolio</div>
            <div class="page-description">Recent Work</div>
          </a>
        </li>
        <li>
          <a href="social" title="Social Stream" <?= ($current_page == "social") ? "class='active'" : "" ?>>
            <div class="page-title">Social</div>
            <div class="page-description">Noise</div>
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