<?php
  $current_page = str_replace(".php", "", basename($_SERVER['PHP_SELF']));
?>

<!doctype html>

<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=en><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang=en><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" lang=en><![endif]-->

<!--[if gt IE 8]><!--> <html class=no-js lang=en> <!--<![endif]-->
<head>
  <meta charset=utf-8>

  
  <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">

  <title><?= $title ?></title>
  <meta name="description" content="<?= $description ?>">

  <base href="http://192.168.0.51/Projects/websites/developercity/">

  
  <meta name=viewport content="width=device-width; initial-scale=1.0;"/>
  
  <link rel="shortcut icon" href="favicon.ico" type="image/vnd.microsoft.icon"/> 
  <link rel=icon href="favicon.ico" type="image/vnd.microsoft.icon"/> 

  <meta property="og:image" content="img/full-logo.png"/>

  <link rel=apple-touch-icon href="apple_touch.png"/>
  <link rel=apple-touch-icon sizes=72x72 href="apple_touch_72.png"/>
  <link rel=apple-touch-icon sizes=114x114 href="apple_touch_114.png"/>

  
  <link rel=stylesheet href='css/9930520.css'>
  <link rel=stylesheet href="http://f.fontdeck.com/s/css/kBCt3QS3rQvDiYrN7YSJsihsnuI/<?php echo $_SERVER['SERVER_NAME']; ?>/22808.css" type="text/css"/>
  <link href='http://fonts.googleapis.com/css?family=Niconne' rel=stylesheet type='text/css'>

  

  
  <script src="js/libs/modernizr-2.5.3.min.js"></script>
  <!--[if lt IE 9]><script src="js/html5shiv.js"></script><![endif]-->
</head>
<body class="<?= $current_page ?>">
  
  <!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
  
  
  <header class=clearfix>
    <div id=logo>
      <a href="./">Developer City</a>
    </div>
    
    <nav>
      <ul class=clearfix>
        <li>
          <a href="about" title="About" <?= ($current_page ==about) ? "class=active" : "" ?>>
            <div class=page-title>About</div>
            <div class=page-description>Who We Are</div>
          </a>
        </li>
        <li>
          <a href="design" title="Web Design" <?= ($current_page ==design) ? "class=active" : "" ?>>
            <div class=page-title>Design</div>
            <div class=page-description>Crafting Pixels</div>
          </a>
        </li>
        <li>
          <a href="development" title="Web Development" <?= ($current_page ==development) ? "class=active" : "" ?>>
            <div class=page-title>Development</div>
            <div class=page-description>Mining Data</div>
          </a>
        </li>
        <li>
          <a href="portfolio" title="Portfolio" <?= ($current_page ==portfolio) ? "class=active" : "" ?>>
            <div class=page-title>Portfolio</div>
            <div class=page-description>Our Work</div>
          </a>
        </li>
        <li>
          <a href="social" title="Social Stream" <?= ($current_page ==social) ? "class=active" : "" ?>>
            <div class=page-title>Social</div>
            <div class=page-description>Our Noise</div>
          </a>
        </li>
        <li>
          <a href="contact" title="Contact" <?= ($current_page ==contact) ? "class=active" : "" ?>>
            <div class=page-title>Contact</div>
            <div class=page-description>Say Hello!</div>
          </a>
        </li>
      </ul>
    </nav>
  </header>