$(document).ready(function(){win=$(document);$("body").hasClass("home")&&($("#design").css("height",window.innerHeight+"px"),$("#development").css("height",window.innerHeight+"px"));$("body").hasClass("social")&&getSocial();headerAdditions='<div id="menu-side"><a href="#">&#171;</a></div><div id="menu-popout"><ul class="clearfix"><li><a href="about" title="About"><div class="page-title">About</div><div class="page-description">Brief Bio</div></a></li><li><a href="design" title="Web Design"><div class="page-title">Design</div><div class="page-description">Crafting Pixels</div></a></li><li><a href="development" title="Web Development"><div class="page-title">Development</div><div class="page-description">Mining Data</div></a></li><li><a href="portfolio" title="Portfolio"><div class="page-title">Portfolio</div><div class="page-description">Recent Work</div></a></li><li><a href="social" title="Social Stream"><div class="page-title">Social</div><div class="page-description">Noise</div></a></li><li><a href="contact" title="Contact"><div class="page-title">Contact</div><div class="page-description">Say Hello!</div></a></li></ul></div>';
$("header").append(headerAdditions);logo=$("#logo");nav=$("nav");menu=$("#menu-side");menuPopout=$("#menu-popout");win.scroll(function(){win.width()>1024?($("#logo").css("position","fixed"),win.scrollTop()>20?(logo.addClass("fix-side"),nav.addClass("nav-hide"),menu.addClass("slide-left"),$("#feature").addClass("hide"),$("#design").addClass("show")):win.scrollTop()<=0&&(logo.removeClass("fix-side"),nav.removeClass("nav-hide"),menu.removeClass("slide-left"),menuPopout.removeClass("visible"),$("#menu-side a").html("&#171;"),
$("#feature").removeClass("hide"),$("#design").removeClass("show"))):$("#logo").css("position","absolute")});$("#menu-side a").click(function(a){a.preventDefault();menuPopout.hasClass("visible")?(menuPopout.removeClass("visible"),$("#menu-side a").html("&#171;")):(menuPopout.addClass("visible"),$("#menu-side a").html("&#187;"))});$(".fancybox").fancybox({openEffect:"none",closeEffect:"none"});$("#contact-message form").submit(function(a){a.preventDefault();$.ajax({url:"mailers/contact.php",data:$(this).serialize(),
type:"post",success:function(a){a=="true"?($("#name, #phone, #email, #message").val(""),html="<div class='success'>Your message was sent successfully. Thank you.</div>",$("#form-errors").html(html),$(".success").fadeOut(2500)):(html="<div class='error'>There was a problem sending your message. Please make sure you filled in all of the fields.</div>",$("#form-errors").html(html))}})})});
function getSocial(){$("#twitter-posts").twitter({from:"MattAntWest",retweets:!1,limit:8,avatar:!1,replies:!1});$("#instagram-photos").instagram({userId:"10798725",clientId:"6b108482fa9944a694a6b1d8807d95a6",accessToken:"10798725.6b10848.eaac2a39c14d4e8e8a5d1b03a3a928ed",show:"12"})};