// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*! jQuery Twitter Plugin - v0.2.0 - 2/13/2012
* http://code.bocoup.com/jquery-twitter-plugin/
* Copyright (c) 2012 Boaz Sender; Licensed MIT, GPL */
window.linkify=function(){var a="[a-z\\d.-]+://",b="(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])",c="(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+",d="(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)",e="(?:"+c+d+"|"+b+")",f="(?:[;/][^#?<>\\s]*)?",g="(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?",h="\\b"+a+"[^<>\\s]+",i="\\b"+e+f+g+"(?!\\w)",j="mailto:",k="(?:"+j+")?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@"+e+g+"(?!\\w)",l=new RegExp("(?:"+h+"|"+i+"|"+k+")","ig"),m=new RegExp("^"+a,"i"),n={"'":"`",">":"<",")":"(","]":"[","}":"{","»":"«","›":"‹"},o={callback:function(a,b){return b?'<a href="'+b+'" title="'+b+'">'+a+"</a>":a},punct_regexp:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};return function(a,b){b=b||{};var c,d,e,f,g="",h=[],i,k,p,q,r,s,t,u;for(d in o)b[d]===undefined&&(b[d]=o[d]);while(c=l.exec(a)){e=c[0],k=l.lastIndex,p=k-e.length;if(/[\/:]/.test(a.charAt(p-1)))continue;do q=e,u=e.substr(-1),t=n[u],t&&(r=e.match(new RegExp("\\"+t+"(?!$)","g")),s=e.match(new RegExp("\\"+u,"g")),(r?r.length:0)<(s?s.length:0)&&(e=e.substr(0,e.length-1),k--)),b.punct_regexp&&(e=e.replace(b.punct_regexp,function(a){return k-=a.length,""}));while(e.length&&e!==q);f=e,m.test(f)||(f=(f.indexOf("@")!==-1?f.indexOf(j)?j:"":f.indexOf("irc.")?f.indexOf("ftp.")?"http://":"ftp://":"irc://")+f),i!=p&&(h.push([a.slice(i,p)]),i=k),h.push([e,f])}h.push([a.substr(i)]);for(d=0;d<h.length;d++)g+=b.callback.apply(window,h[d]);return g||a}}();var linkify=linkify||function(){};(function(a,b){var c=function(a){return a.replace("/[@]+[A-Za-z0-9-_]+/ig",function(a){return a.link("http://twitter.com/"+a.replace("@",""))})},d=function(a){return a.replace("/[#]+[A-Za-z0-9-_]+/ig",function(a){return a.link("http://search.twitter.com/search?q="+a.replace("#","%23"))})};a.twitter=function(b,c){if(!b)return!1;var d,e="",f=new RegExp(!1);typeof b=="string"?d=a.extend({},a.twitter.opts,{q:b}):(b.rpp=b.limit?b.limit:b.rpp,b.limit=b.limit?b.limit:b.rpp,e=b.exclusions?b.exclusions.replace(" ","|"):!1,f=e?new RegExp(e):!1,d=a.extend({},a.twitter.opts,b),d.rpp=d.exclusions||!d.replies||!d.retweets?d.rpp*10:d.rpp),a.getJSON("http://search.twitter.com/search.json?callback=?",d,function(a){c(a,d,f)})},a.fn.twitter=function(e){return e?this.each(function(){var f=a(this);a.twitter(e,function(e,g,h){var i=a("<ul>"),j=0,k;if(e.results&&e.results.length){for(k in e.results){var l=e.results[k],m=!g.replies&&l.to_user_id?!1:!0,n=!g.retweets&&l.text.slice(0,2)==="RT"?!1:!0;if(!m)continue;if(!n)continue;if(h&&h.test(l.text))continue;var o=a("<li/>",{"class":"tweet"});g.avatar===!0&&o.append(a("<a/>",{href:"http://twitter.com/"+l.from_user,html:"<img src='"+l.profile_image_url+"'/>"})),o.append(a("<span>",{"class":"content",html:"<a href='http://twitter.com/"+l.from_user+"'>@"+l.from_user+"</a>: "+c(d(b(l.text)))})).appendTo(i),j++;if(j===g.limit)break}f.html(i)}else f.html(a("<h3/>",{"class":"twitter-notFound",text:g.notFoundText}))})}):this},a.twitter.opts={limit:7,exclusions:"",notFoundText:"No results found on twitter",replies:!0,retweets:!0,ands:"",phrase:"",ors:"",nots:"",tag:"",lang:"",from:"",to:"",ref:"",near:"",within:"",units:"",since:"",until:"",tude:"",filter:"",include:"",rpp:5,q:"",avatar:!0}})(jQuery,linkify)

/* jQuery Instagram */
$.fn.instagram = function(options) {
    var that = this,
        apiEndpoint = "https://api.instagram.com/v1",
        settings = {
            hash: null
          , userId: null
          , locationId: null
          , search: null
          , accessToken: null
          , clientId: null
          , show: null
          , onLoad: null
          , onComplete: null
          , maxId: null
          , minId: null
          , next_url: null
        };
        
    options && $.extend(settings, options);
    
    function createPhotoElement(photo) {
      return $('<div>')
        .addClass('instagram-placeholder')
        .attr('id', photo.id)
        .append(
          $('<a>')
            .attr('target', '_blank')
            .attr('href', photo.link)
            .append(
              $('<img>')
                .addClass('instagram-image')
                .attr('src', photo.images.thumbnail.url)
            )
        );
    }
    
    function createEmptyElement() {
      return $('<div>')
        .addClass('instagram-placeholder')
        .attr('id', 'empty')
        .append($('<p>').html('No photos for this query'));
    }
    
    function composeRequestURL() {

      var url = apiEndpoint,
          params = {};
      
      if (settings.next_url != null) {
        return settings.next_url;
      }

      if(settings.hash != null) {
        url += "/tags/" + settings.hash + "/media/recent";
      }
      else if(settings.search != null) {
        url += "/media/search";
        params.lat = settings.search.lat;
        params.lng = settings.search.lng;
        settings.search.max_timestamp != null && (params.max_timestamp = settings.search.max_timestamp);
        settings.search.min_timestamp != null && (params.min_timestamp = settings.search.min_timestamp);
        settings.search.distance != null && (params.distance = settings.search.distance);
      }
      else if(settings.userId != null) {
        url += "/users/" + settings.userId + "/media/recent";
      }
      else if(settings.locationId != null) {
        url += "/locations/" + settings.locationId + "/media/recent";
      }
      else {
        url += "/media/popular";
      }
      
      settings.accessToken != null && (params.access_token = settings.accessToken);
      settings.clientId != null && (params.client_id = settings.clientId);
      settings.minId != null && (params.min_id = settings.minId);
      settings.maxId != null && (params.max_id = settings.maxId);

      url += "?" + $.param(params)
      
      return url;
    }
    
    settings.onLoad != null && typeof settings.onLoad == 'function' && settings.onLoad();
    
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: composeRequestURL(),
      success: function(res) {
        var length = typeof res.data != 'undefined' ? res.data.length : 0;
        var limit = settings.show != null && settings.show < length ? settings.show : length;
        
        if(limit > 0) {
          for(var i = 0; i < limit; i++) {
            that.append(createPhotoElement(res.data[i]));
          }
        }
        else {
          that.append(createEmptyElement());
        }

        settings.onComplete != null && typeof settings.onComplete == 'function' && settings.onComplete(res.data, res);
      }
    });
    
    return this;
  };