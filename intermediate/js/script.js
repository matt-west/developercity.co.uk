$(document).ready(function(){win=$(document);$("body").hasClass("home")&&($("#design").css("height",window.innerHeight+"px"),$("#development").css("height",window.innerHeight+"px"));headerAdditions='<div id="menu-side"><a href="#">&#171;</a></div><div id="menu-popout"><ul class="clearfix"><li><a href="about.html" title="About"><div class="page-title">About</div><div class="page-description">Who We Are</div></a></li><li><a href="design.html" title="Web Design"><div class="page-title">Design</div><div class="page-description">Crafting Pixels</div></a></li><li><a href="development.html" title="Web Development"><div class="page-title">Development</div><div class="page-description">Mining Data</div></a></li><li><a href="projects.html" title="Projects"><div class="page-title">Projects</div><div class="page-description">Our Work</div></a></li><li><a href="social.html" title="Social Stream"><div class="page-title">Social</div><div class="page-description">Our Noise</div></a></li><li><a href="contact.html" title="Contact"><div class="page-title">Contact</div><div class="page-description">Say Hello!</div></a></li></ul></div>';
$("header").append(headerAdditions);logo=$("#logo");$("#logo").css("position","fixed");nav=$("nav");menu=$("#menu-side");menuPopout=$("#menu-popout");win.scroll(function(){win.scrollTop()>20?(logo.addClass("fix-side"),nav.addClass("nav-hide"),menu.addClass("slide-left"),$("#feature").addClass("hide"),$("#design").addClass("show")):win.scrollTop()<=0&&(logo.removeClass("fix-side"),nav.removeClass("nav-hide"),menu.removeClass("slide-left"),menuPopout.removeClass("visible"),$("#menu-side a").html("&#171;"),
$("#feature").removeClass("hide"),$("#design").removeClass("show"))});$("#menu-side a").click(function(a){a.preventDefault();menuPopout.hasClass("visible")?(menuPopout.removeClass("visible"),$("#menu-side a").html("&#171;")):(menuPopout.addClass("visible"),$("#menu-side a").html("&#187;"))})});
