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

	headerAdditions = '<div id="menu-side"><a href="#">&#171;</a></div><div id="menu-popout"><ul class="clearfix"><li><a href="about" title="About"><div class="page-title">About</div><div class="page-description">Who We Are</div></a></li><li><a href="design" title="Web Design"><div class="page-title">Design</div><div class="page-description">Crafting Pixels</div></a></li><li><a href="development" title="Web Development"><div class="page-title">Development</div><div class="page-description">Mining Data</div></a></li><li><a href="projects" title="Projects"><div class="page-title">Projects</div><div class="page-description">Our Work</div></a></li><li><a href="social" title="Social Stream"><div class="page-title">Social</div><div class="page-description">Our Noise</div></a></li><li><a href="contact" title="Contact"><div class="page-title">Contact</div><div class="page-description">Say Hello!</div></a></li></ul></div>';

	$("header").append(headerAdditions);

	// Logo Start Position
	logo = $("#logo");
	$("#logo").css('position', 'fixed');

	nav = $("nav");
	menu = $("#menu-side");
	menuPopout = $("#menu-popout");

	// Scroll Listener
	win.scroll(function(data) {
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

});

function getSocial() {
  $('#twitter-posts').twitter({from: 'MattAntWest', retweets: false, limit : 8, avatar : false, replies: false});

  $("#instagram-photos").instagram({
    userId: '10798725',
    //hash: 'food',
    clientId: '6b108482fa9944a694a6b1d8807d95a6',
    accessToken: '10798725.6b10848.eaac2a39c14d4e8e8a5d1b03a3a928ed',
    show: '12'
  });
}
