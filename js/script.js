/* Author:
	Matt West
*/

$(document).ready(function() {
	win = $(document);

	if ($('body').hasClass('home')) {
		//$('body').css('height', (window.innerHeight * 3) + 'px');
	
		$('#design').css('height', window.innerHeight + 'px');
		$('#development').css('height', window.innerHeight + 'px');
	}

	if ($('body').hasClass('social')) {
		getSocial();
	}

	headerAdditions = '<div id="menu-side"><a href="#">&#171;</a></div><div id="menu-popout"><ul class="clearfix"><li><a href="about" title="About"><div class="page-title">About</div><div class="page-description">Brief Bio</div></a></li><li><a href="design" title="Web Design"><div class="page-title">Design</div><div class="page-description">Crafting Pixels</div></a></li><li><a href="development" title="Web Development"><div class="page-title">Development</div><div class="page-description">Mining Data</div></a></li><li><a href="portfolio" title="Portfolio"><div class="page-title">Portfolio</div><div class="page-description">Recent Work</div></a></li><li><a href="social" title="Social Stream"><div class="page-title">Social</div><div class="page-description">Noise</div></a></li><li><a href="contact" title="Contact"><div class="page-title">Contact</div><div class="page-description">Say Hello!</div></a></li></ul></div>';

	$("header").append(headerAdditions);

	// Logo Start Position
	logo = $("#logo");

	nav = $("nav");
	menu = $("#menu-side");
	menuPopout = $("#menu-popout");

	// Scroll Listener
	win.scroll(function(data) {
		// Only enabled the slidy logo/menu combo for viewports larger than 1024.
		// This prevents things breaking on mobiles/tablets.
		if (win.width() > 1024) {
			// Make the logo fixed
			$("#logo").css('position', 'fixed');

			if (win.scrollTop() > 20) {
				logo.addClass('fix-side');

				nav.addClass('nav-hide');
				menu.addClass('slide-left');

				$("#feature").addClass('hide');
				$("#design").addClass('show');
			} else if (win.scrollTop() <= 0) {
				logo.removeClass('fix-side');
				nav.removeClass('nav-hide');
				menu.removeClass('slide-left');

				menuPopout.removeClass('visible');
				$("#menu-side a").html("&#171;");

				$("#feature").removeClass('hide');
				$("#design").removeClass('show');
			}
		} else {
			// Make the logo absolutely positioned
			$("#logo").css('position', 'absolute');
		}

	});

	// Menu Button Listener
	$("#menu-side a").click(function(e) {
		e.preventDefault();
		
		if (menuPopout.hasClass('visible')) {
			menuPopout.removeClass('visible');
			$("#menu-side a").html("&#171;");
		} else {
			menuPopout.addClass('visible');
			$("#menu-side a").html("&#187;");
		}
	});

	// Gallery
  $(".fancybox").fancybox({
    openEffect  : 'none',
    closeEffect : 'none'
  });

  // Contact Form Submission
  $('#contact-message form').submit(function(e){
    e.preventDefault();

    $.ajax({
      url: "mailers/contact.php",
      data: $(this).serialize(),
      type: "post",
      success: function(response){
        if (response == "true") {
          $("#name, #phone, #email, #message").val("");
          html = "<div class='success'>Your message was sent successfully. Thank you.</div>";
          $("#form-errors").html(html);
          $('.success').fadeOut(2500);
        } else {
          html = "<div class='error'>There was a problem sending your message. Please make sure you filled in all of the fields.</div>";
          $("#form-errors").html(html);
        }
      }
    });
  });

});

function getSocial() {
  $('#twitter-posts').twitter({from: 'MattAntWest', retweets: false, limit : 8, avatar : false, replies: false});
}
