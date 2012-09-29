<?php
  $title = "Web Development - Developer City";
  $description = "Developer City specializes in the development of custom web applications.";
  
  include_once('templates/header.php');
?>

  <div id="container" class="clearfix" role="main">
    <section id="page-text" class="clearfix">
      <h1>Web <br>Development</h1>
      <p class="right emphasize">
        I Develop Bespoke Web Applications Using <a href="development#rails">Rails</a>, <a href="development#golang">Go</a> and <a href="development#html5">HTML5</a>.
      </p>
      <p class="right">
        The number of web-based applications on the internet has rapidly increased in the past few years. The proliferation of high-speed internet connections and the further development of web technologies has made developers better equipped than ever before to tackle really meaningful problems through the web. Companies such as Facebook and Google have built hugely successful companies through the development of web applications; applications that are used by millions of people every day.
      </p>
      <p class="right">
        I specialise in the development of bespoke web applications that are <a href="development#speed">fast</a>, <a href="development#security">secure</a> and <a href="development#testing">robust</a>. In the past I have been lucky enough to work closely with some fantastic clients to produce applications for both consumers and enterprise users.
      </p>

      <section id="rails" class="clearfix left">
        <h1 class="left">Ruby on Rails Applications</h1>
        <p class="left">
          Rails is a popular web framework that builds on the Ruby programming language. Many of the highest traffic web applications are built using rails, including the social network Twitter.
        </p>
        <p class="left">
          I use Rails for building both consumer and enterprise facing applications and find that it is particularly useful for applications that will handle large amounts of data.
        </p>
      </section>

      <section id="golang" class="clearfix right">
        <h1 class="right">Go Applications</h1>
        <p class="right">
          Go is a fairly young programming language that is increasing in popularity. The engineers at Google required a language that is lightning fast, extensible and reliable. After struggling to find one that met their needs they decided to build it. Go currently powers parts of Google's infrastructure and is ideal for building highly scalable apps or web processes that can quickly execute traditionally resource intensive tasks.
        </p>
        <p class="right">
          I use Go for creating web services to handle tasks such as image manipulation. I have also developed a number of highly scalable web frameworks that are written in Go (such as <a href="https://github.com/matt-west/go-blog" title="GO-Blog" target="_blank">go-blog</a>).
        </p>
      </section>

      <section id="html5" class="clearfix left">
        <h1 class="left">HTML5 and NEWT</h1>
        <p class="left">
          The future of the web is being outlined in HTML5, the latest version of the Hypertext Markup Language that makes up the foundations of all the pages on the internet. HTML5 brings some really exciting new innovations such as video and audio that can play in the browser without the need for third-party plugins like Flash.
        </p>
        <p class="left">
          HTML5 also brings new technologies that allow developers to build websites that are easier to understand by computer programs (such as search engines).
        </p>
        <p class="left">
          There are also a number of other technologies that are now being implemented in the latest versions of web browsers. These are referred to as the New Exciting Web Technologies (<abbr title="New Exciting Web Technologies">NEWT</abbr>) and include support for browser features such as GeoLocation, Canvas (drawing objects in the browser) and WebGL (Real-time 3D imagery).
        </p>
        <p class="left">
          Collectively all of these new technologies are helping to make websites smarter than they have ever been before. I am embracing these new technologies and use them regularly in my projects.
        </p>
      </section>

      <section id="standards" class="clearfix right">
        <h1 class="right">Web Standards</h1>
        <p class="right">
          There are a number of web standards bodies that work to create specifications on how technologies should be properly used. I closely monitor the standards developed by the <a href="http://w3.org" title="World Wide Web Consortium" target="_blank"><abbr title="World Wide Web Consortium">W3C</abbr></a> and <a href="http://whatwg.org" title="Web Hypertext Application Technology Working Group" target="_blank"><abbr title="Web Hypertext Application Technology Working Group">WHATWG</abbr></a> in order to ensure my methods of building web applications follow the industry best practices.
        </p>
      </section>

      <section id="speed" class="clearfix left">
        <h1 class="left">Speed and Performance</h1>
        <p class="left">
          The performance of websites and web applications directly impacts the experience of the end user and can be the difference between obtaining a loyal customer or losing them altogether.
        </p>
        <p class="left">
          I have a number of measures in place to make sure that the applications I develop run quickly and smoothly. These measures include writing efficient code, utilising caching and compression technologies and deploying to a highly scalable infrastructure.
        </p>
      </section>

      <section id="security" class="clearfix right">
        <h1 class="right">Security</h1>
        <p class="right">
          Your data is an important asset and it is my job to makes sure that I build applications that can take care of it. All of my code must conform to a set of security standards in order to ensure that there are no security holes in the applications that I develop.
        </p>
        <p class="right">
          For larger projects I also have a team of ethical hackers that can be used to comprehensively test applications.
        </p>
      </section>

      <section id="testing" class="clearfix left">
        <h1 class="left">Automated Testing</h1>
        <p class="left">
          Automated testing involves writing computer programs that can test your applications to make sure that they are functioning correctly. This is particularly important when you are building the sort of large-scale web applications that I develop.
        </p>
        <p class="left">
          As well as maintaining a high level of automated test coverage I also manually test our applications before they go live to ensure that everything is as robust as possible.
        </p>
      </section>

      <section id="ci" class="clearfix right">
        <h1 class="right">Continuous Deployment</h1>
        <p class="right">
          Once I have written the code for a particular feature, I want to get that code running in the live application as soon as possible. For some of my larger projects I use a process called continuous deployment to ensure that all code-complete features are autmotamtically put straight into a production environment.
        </p>
        <p class="right">
          I can confidently do this because I write <a href="development#testing">comprehensive automated tests</a> that must all pass before the code is pushed to production. This means that I can be sure any changes do not cause problems in any of the other components of the application.
        </p>
      </section>

    </section>
  </div>

<?php
  include_once('templates/footer.php');
?>