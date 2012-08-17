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


 /*!
 * fancyBox - jQuery Plugin
 * version: 2.0.4 (12/12/2011)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2011 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function (window, document, $) {
  var W = $(window),
    D = $(document),
    F = $.fancybox = function () {
      F.open.apply( this, arguments );
    },
    didResize = false,
    resizeTimer = null;

  $.extend(F, {
    // The current version of fancyBox
    version: '2.0.4',

    defaults: {
      padding: 15,
      margin: 20,

      width: 800,
      height: 600,
      minWidth: 200,
      minHeight: 200,
      maxWidth: 9999,
      maxHeight: 9999,

      autoSize: true,
      fitToView: true,
      aspectRatio: false,
      topRatio: 0.5,

      fixed: !$.browser.msie || $.browser.version > 6 || !document.documentElement.hasOwnProperty('ontouchstart'),
      scrolling: 'auto', // 'auto', 'yes' or 'no'
      wrapCSS: 'fancybox-default',

      arrows: true,
      closeBtn: true,
      closeClick: false,
      nextClick : false,
      mouseWheel: true,
      autoPlay: false,
      playSpeed: 3000,

      modal: false,
      loop: true,
      ajax: {},
      keys: {
        next: [13, 32, 34, 39, 40], // enter, space, page down, right arrow, down arrow
        prev: [8, 33, 37, 38], // backspace, page up, left arrow, up arrow
        close: [27] // escape key
      },

      // Override some properties
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,

      // HTML templates
      tpl: {
        wrap: '<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : '') + ' scrolling="{scrolling}" src="{href}"></iframe>',
        swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
        next: '<a title="Next" class="fancybox-item fancybox-next"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-item fancybox-prev"><span></span></a>'
      },

      // Properties for each animation type
      // Opening fancyBox
      openEffect: 'fade', // 'elastic', 'fade' or 'none'
      openSpeed: 250,
      openEasing: 'swing',
      openOpacity: true,
      openMethod: 'zoomIn',

      // Closing fancyBox
      closeEffect: 'fade', // 'elastic', 'fade' or 'none'
      closeSpeed: 250,
      closeEasing: 'swing',
      closeOpacity: true,
      closeMethod: 'zoomOut',

      // Changing next gallery item
      nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
      nextSpeed: 300,
      nextEasing: 'swing',
      nextMethod: 'changeIn',

      // Changing previous gallery item
      prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
      prevSpeed: 300,
      prevEasing: 'swing',
      prevMethod: 'changeOut',

      // Enabled helpers
      helpers: {
        overlay: {
          speedIn: 0,
          speedOut: 300,
          opacity: 0.8,
          css: {
            cursor: 'pointer'
          },
          closeClick: true
        },
        title: {
          type: 'float' // 'float', 'inside', 'outside' or 'over'
        }
      },

      // Callbacks
      onCancel: $.noop, // If canceling
      beforeLoad: $.noop, // Before loading
      afterLoad: $.noop, // After loading
      beforeShow: $.noop, // Before changing in current item
      afterShow: $.noop, // After opening
      beforeClose: $.noop, // Before closing
      afterClose: $.noop // After closing
    },

    //Current state
    group: {}, // Selected group
    opts: {}, // Group options
    coming: null, // Element being loaded
    current: null, // Currently loaded element
    isOpen: false, // Is currently open
    isOpened: false, // Have been fully opened at least once
    wrap: null,
    outer: null,
    inner: null,

    player: {
      timer: null,
      isActive: false
    },

    // Loaders
    ajaxLoad: null,
    imgPreload: null,

    // Some collections
    transitions: {},
    helpers: {},

    /*
     *  Static methods
     */

    open: function (group, opts) {
      // Normalize group
      if (!$.isArray(group)) {
        group = [group];
      }

      if (!group.length) {
        return;
      }

      //Kill existing instances
      F.close(true);

      //Extend the defaults
      F.opts = $.extend(true, {}, F.defaults, opts);
      F.group = group;

      F._start(F.opts.index || 0);
    },

    cancel: function () {
      if (F.coming && false === F.trigger('onCancel')) {
        return;
      }

      F.coming = null;

      F.hideLoading();

      if (F.ajaxLoad) {
        F.ajaxLoad.abort();
      }

      F.ajaxLoad = null;

      if (F.imgPreload) {
        F.imgPreload.onload = F.imgPreload.onabort = F.imgPreload.onerror = null;
      }
    },

    close: function (a) {
      F.cancel();

      if (!F.current || false === F.trigger('beforeClose')) {
        return;
      }

      F.unbindEvents();

      //If forced or is still opening then remove immediately
      if (!F.isOpen || (a && a[0] === true)) {
        $(".fancybox-wrap").stop().trigger('onReset').remove();

        F._afterZoomOut();

      } else {
        F.isOpen = F.isOpened = false;

        $(".fancybox-item").remove();

        F.wrap.stop(true).removeClass('fancybox-opened');
        F.inner.css('overflow', 'hidden');

        F.transitions[F.current.closeMethod]();
      }
    },

    // Start/stop slideshow
    play: function (a) {
      var clear = function () {
          clearTimeout(F.player.timer);
        },
        set = function () {
          clear();

          if (F.current && F.player.isActive) {
            F.player.timer = setTimeout(F.next, F.current.playSpeed);
          }
        },
        stop = function () {
          clear();

          $('body').unbind('.player');

          F.player.isActive = false;

          F.trigger('onPlayEnd');
        },
        start = function () {
          if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
            F.player.isActive = true;

            $('body').bind({
              'afterShow.player onUpdate.player': set,
              'onCancel.player beforeClose.player': stop,
              'beforeLoad.player': clear
            });

            set();

            F.trigger('onPlayStart');
          }
        };

      if (F.player.isActive || (a && a[0] === false)) {
        stop();
      } else {
        start();
      }
    },

    next: function () {
      if (F.current) {
        F.jumpto(F.current.index + 1);
      }
    },

    prev: function () {
      if (F.current) {
        F.jumpto(F.current.index - 1);
      }
    },

    jumpto: function (index) {
      if (!F.current) {
        return;
      }

      index = parseInt(index, 10);

      if (F.group.length > 1 && F.current.loop) {
        if (index >= F.group.length) {
          index = 0;

        } else if (index < 0) {
          index = F.group.length - 1;
        }
      }

      if (typeof F.group[index] !== 'undefined') {
        F.cancel();

        F._start(index);
      }
    },

    reposition: function (a) {
      if (F.isOpen) {
        F.wrap.css(F._getPosition(a));
      }
    },

    update: function () {
      if (F.isOpen) {
        // It's a very bad idea to attach handlers to the window scroll event, run this code after a delay
        if (!didResize) {
          resizeTimer = setInterval(function () {
            if (didResize) {
              didResize = false;

              clearTimeout(resizeTimer);

              if (F.current) {
                if (F.current.autoSize) {
                  F.inner.height('auto');
                  F.current.height = F.inner.height();
                }

                F._setDimension();

                if (F.current.canGrow) {
                  F.inner.height('auto');
                }

                F.reposition();

                F.trigger('onUpdate');
              }
            }
          }, 100);
        }

        didResize = true;
      }
    },

    toggle: function () {
      if (F.isOpen) {
        F.current.fitToView = !F.current.fitToView;

        F.update();
      }
    },

    hideLoading: function () {
      $("#fancybox-loading").remove();
    },

    showLoading: function () {
      F.hideLoading();

      $('<div id="fancybox-loading"></div>').click(F.cancel).appendTo('body');
    },

    getViewport: function () {
      return {
        x: W.scrollLeft(),
        y: W.scrollTop(),
        w: W.width(),
        h: W.height()
      };
    },

    // Unbind the keyboard / clicking actions
    unbindEvents: function () {
      if (F.wrap) {
        F.wrap.unbind('.fb'); 
      }

      D.unbind('.fb');
      W.unbind('.fb');
    },

    bindEvents: function () {
      var current = F.current,
        keys = current.keys;

      if (!current) {
        return;
      }

      W.bind('resize.fb, orientationchange.fb', F.update);

      if (keys) {
        D.bind('keydown.fb', function (e) {
          var code;

          // Ignore key combinations and key events within form elements
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && $.inArray(e.target.tagName.toLowerCase(), ['input', 'textarea', 'select', 'button']) < 0) {
            code = e.keyCode;

            if ($.inArray(code, keys.close) > -1) {
              F.close();
              e.preventDefault();

            } else if ($.inArray(code, keys.next) > -1) {
              F.next();
              e.preventDefault();

            } else if ($.inArray(code, keys.prev) > -1) {
              F.prev();
              e.preventDefault();
            }
          }
        });
      }

      if ($.fn.mousewheel && current.mouseWheel && F.group.length > 1) {
        F.wrap.bind('mousewheel.fb', function (e, delta) {
          var target = $(e.target).get(0);

          if (target.clientHeight === 0 || target.scrollHeight === target.clientHeight) {
            e.preventDefault();

            F[delta > 0 ? 'prev' : 'next']();
          }
        });
      }
    },

    trigger: function (event) {
      var ret, obj = F[ $.inArray(event, ['onCancel', 'beforeLoad', 'afterLoad']) > -1 ? 'coming' : 'current' ];

      if (!obj) {
        return;
      }

      if ($.isFunction( obj[event] )) {
        ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
      }

      if (ret === false) {
        return false;
      }

      if (obj.helpers) {
        $.each(obj.helpers, function (helper, opts) {
          if (opts && typeof F.helpers[helper] !== 'undefined' && $.isFunction(F.helpers[helper][event])) {
            F.helpers[helper][event](opts, obj);
          }
        });
      }

      $.event.trigger(event + '.fb');
    },

    isImage: function (str) {
      return str && str.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i);
    },

    isSWF: function (str) {
      return str && str.match(/\.(swf)(.*)?$/i);
    },

    _start: function (index) {
      var coming = {},
        element = F.group[index] || null,
        isDom,
        href,
        type,
        rez;

      if (typeof element === 'object' && (element.nodeType || element instanceof $)) {
        isDom = true;

        if ($.metadata) {
          coming = $(element).metadata();
        }
      }

      coming = $.extend(true, {}, F.opts, {index : index, element : element}, ($.isPlainObject(element) ? element : coming));

      // Re-check overridable options
      $.each(['href', 'title', 'content', 'type'], function(i,v) {
        coming[v] = F.opts[ v ] || (isDom && $(element).attr( v )) || coming[ v ] || null;
      });

      // Convert margin property to array - top, right, bottom, left
      if (typeof coming.margin === 'number') {
        coming.margin = [coming.margin, coming.margin, coming.margin, coming.margin];
      }

      // 'modal' propery is just a shortcut
      if (coming.modal) {
        $.extend(true, coming, {
          closeBtn : false,
          closeClick: false,
          nextClick : false,
          arrows : false,
          mouseWheel : false,
          keys : null,
          helpers: {
            overlay : {
              css: {
                cursor : 'auto'
              },
              closeClick : false
            }
          }
        });
      }

      //Give a chance for callback or helpers to update coming item (type, title, etc)
      F.coming = coming;

      if (false === F.trigger('beforeLoad')) {
        F.coming = null;
        return;
      }

      type = coming.type;
      href = coming.href;

      ///Check if content type is set, if not, try to get
      if (!type) {
        if (isDom) {
          rez = $(element).data('fancybox-type');

          if (!rez && element.className) {
            rez = element.className.match(/fancybox\.(\w+)/);
            type = rez ? rez[1] : null;
          }
        }

        if (!type && href) {
          if (F.isImage(href)) {
            type = 'image';

          } else if (F.isSWF(href)) {
            type = 'swf';

          } else if (href.match(/^#/)) {
            type = 'inline';
          }
        }

        // ...if not - display element itself
        if (!type) {
          type = isDom ? 'inline' : 'html';
        }

        coming.type = type;
      }

      // Check before try to load; 'inline' and 'html' types need content, others - href
      if (type === 'inline' || type === 'html') {
        coming.content = coming.content || (type === 'inline' && href ? $(href) : element);

        if (!coming.content.length) {
          type = null;
        }

      } else {
        coming.href = href || element;

        if (!coming.href) {
          type = null;
        }
      }

      /*
        Add reference to the group, so it`s possible to access from callbacks, example:

        afterLoad : function() {
          this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }

      */

      coming.group = F.group;

      if (type === 'image') {
        F._loadImage();

      } else if (type === 'ajax') {
        F._loadAjax();

      } else if (type) {
        F._afterLoad();

      } else {
        F._error( 'type' );
      }
    },

    _error: function ( type ) {
      $.extend(F.coming, {
        type : 'html',
        autoSize : true,
        minHeight : '0',
        hasError : type,
        content : F.coming.tpl.error
      });

      F._afterLoad();
    },

    _loadImage: function () {
      // Reset preload image so it is later possible to check "complete" property
      F.imgPreload = new Image();

      F.imgPreload.onload = function () {
        this.onload = this.onerror = null;

        F.coming.width = this.width;
        F.coming.height = this.height;

        F._afterLoad();
      };

      F.imgPreload.onerror = function () {
        this.onload = this.onerror = null;

        F._error( 'image' );
      };

      F.imgPreload.src = F.coming.href;

      if (!F.imgPreload.complete) {
        F.showLoading();
      }
    },

    _loadAjax: function () {
      F.showLoading();

      F.ajaxLoad = $.ajax($.extend({}, F.coming.ajax, {
        url: F.coming.href,
        error: function (jqXHR, textStatus) {
          if (textStatus !== 'abort') {
            F._error( 'ajax', jqXHR );

          } else {
            F.hideLoading();
          }
        },
        success: function (data, textStatus) {
          if (textStatus === 'success') {
            F.coming.content = data;

            F._afterLoad();
          }
        }
      }));
    },

    _preload : function() {
      var group = F.group,
        index = F.current.index,
        load = function(href) {
          if (href && F.isImage(href)) {
            new Image().src = href;
          }
        };

      if (group.length > 1) {
        load( $( group[ index + 1 ] || group[ 0 ] ).attr('href') );
        load( $( group[ index - 1 ] || group[ group.length - 1 ] ).attr('href') );
      }
    },

    _afterLoad: function () {
      F.hideLoading();

      if (!F.coming || false === F.trigger('afterLoad', F.current)) {
        F.coming = false;

        return;
      }

      if (F.isOpened) {
        $(".fancybox-item").remove();

        F.wrap.stop(true).removeClass('fancybox-opened');
        F.inner.css('overflow', 'hidden');

        F.transitions[F.current.prevMethod]();

      } else {
        $(".fancybox-wrap").stop().trigger('onReset').remove();

        F.trigger('afterClose');
      }

      F.unbindEvents();

      F.isOpen = false;
      F.current = F.coming;
      F.coming = false;

      //Build the neccessary markup
      F.wrap = $(F.current.tpl.wrap).addClass('fancybox-tmp ' + F.current.wrapCSS).appendTo('body');
      F.outer = $('.fancybox-outer', F.wrap).css('padding', F.current.padding + 'px');
      F.inner = $('.fancybox-inner', F.wrap);

      F._setContent();

      //Give a chance for helpers or callbacks to update elements
      F.trigger('beforeShow');

      //Set initial dimensions and hide
      F._setDimension();

      F.wrap.hide().removeClass('fancybox-tmp');

      F.bindEvents();
      F._preload();

      F.transitions[ F.isOpened ? F.current.nextMethod : F.current.openMethod ]();
    },

    _setContent: function () {
      var content, loadingBay, current = F.current,
        type = current.type;

      switch (type) {
        case 'inline':
        case 'ajax':
        case 'html':
          content = current.content;

          if (type === 'inline' && content instanceof $) {
            content = content.show().detach();

            if (content.parent().hasClass('fancybox-inner')) {
              content.parents('.fancybox-wrap').trigger('onReset').remove();
            }

            $(F.wrap).bind('onReset', function () {
              content.appendTo('body').hide();
            });
          }

          if (current.autoSize) {
            loadingBay = $('<div class="fancybox-tmp"></div>').appendTo($("body")).append(content);

            current.width = loadingBay.outerWidth();
            current.height = loadingBay.outerHeight(true);

            content = loadingBay.contents().detach();

            loadingBay.remove();
          }

        break;

        case 'image':
          content = current.tpl.image.replace('{href}', current.href);

          current.aspectRatio = true;
        break;

        case 'swf':
          content = current.tpl.swf.replace(/\{width\}/g, current.width).replace(/\{height\}/g, current.height).replace(/\{href\}/g, current.href);
        break;

        case 'iframe':
          content = current.tpl.iframe.replace('{href}', current.href).replace('{scrolling}', current.scrolling).replace('{rnd}', new Date().getTime());
        break;
      }

      if ($.inArray(type, ['image', 'swf', 'iframe']) > -1) {
        current.autoSize = false;
        current.scrolling = false;
      }

      F.inner.append(content);
    },

    _setDimension: function () {
      var wrap = F.wrap,
        outer = F.outer,
        inner = F.inner,
        current = F.current,
        viewport = F.getViewport(),
        margin = current.margin,
        padding2 = current.padding * 2,
        width = current.width + padding2,
        height = current.height + padding2,
        ratio = current.width / current.height,

        maxWidth = current.maxWidth,
        maxHeight = current.maxHeight,
        minWidth = current.minWidth,
        minHeight = current.minHeight,
        height_,
        space;

      viewport.w -= (margin[1] + margin[3]);
      viewport.h -= (margin[0] + margin[2]);

      if (width.toString().indexOf('%') > -1) {
        width = ((viewport.w * parseFloat(width)) / 100);
      }

      if (height.toString().indexOf('%') > -1) {
        height = ((viewport.h * parseFloat(height)) / 100);
      }

      if (current.fitToView) {
        maxWidth = Math.min(viewport.w, maxWidth);
        maxHeight = Math.min(viewport.h, maxHeight);
      }

      minWidth = Math.min(width, minWidth);
      minHeight = Math.min(width, minHeight);

      maxWidth = Math.max(minWidth, maxWidth);
      maxHeight = Math.max(minHeight, maxHeight);

      if (current.aspectRatio) {
        if (width > maxWidth) {
          width = maxWidth;
          height = ((width - padding2) / ratio) + padding2;
        }

        if (height > maxHeight) {
          height = maxHeight;
          width = ((height - padding2) * ratio) + padding2;
        }

        if (width < minWidth) {
          width = minWidth;
          height = ((width - padding2) / ratio) + padding2;
        }

        if (height < minHeight) {
          height = minHeight;
          width = ((height - padding2) * ratio) + padding2;
        }

      } else {
        width = Math.max(minWidth, Math.min(width, maxWidth));
        height = Math.max(minHeight, Math.min(height, maxHeight));
      }

      width = Math.round(width);
      height = Math.round(height);

      //Reset dimensions
      $(wrap.add(outer).add(inner)).width('auto').height('auto');

      inner.width(width - padding2).height(height - padding2);
      wrap.width(width);

      height_ = wrap.height(); // Real wrap height

      //Fit wrapper inside
      if (width > maxWidth || height_ > maxHeight) {
        while ((width > maxWidth || height_ > maxHeight) && width > minWidth && height_ > minHeight) {
          height = height - 10;

          if (current.aspectRatio) {
            width = Math.round(((height - padding2) * ratio) + padding2);

            if (width < minWidth) {
              width = minWidth;
              height = ((width - padding2) / ratio) + padding2;
            }

          } else {
            width = width - 10;
          }

          inner.width(width - padding2).height(height - padding2);
          wrap.width(width);

          height_ = wrap.height();
        }
      }

      current.dim = {
        width: width,
        height: height_
      };

      current.canGrow = current.autoSize && height > minHeight && height < maxHeight;
      current.canShrink = false;
      current.canExpand = false;

      if ((width - padding2) < current.width || (height - padding2) < current.height) {
        current.canExpand = true;

      } else if ((width > viewport.w || height_ > viewport.h) && width > minWidth && height > minHeight) {
        current.canShrink = true;
      }

      space = height_ - padding2;

      F.innerSpace = space - inner.height();
      F.outerSpace = space - outer.height();
    },

    _getPosition: function (a) {
      var current = F.current,
        viewport = F.getViewport(),
        margin = current.margin,
        width = F.wrap.width() + margin[1] + margin[3],
        height = F.wrap.height() + margin[0] + margin[2],
        rez = {
          position: 'absolute',
          top: margin[0] + viewport.y,
          left: margin[3] + viewport.x
        };

      if (current.fixed && (!a || a[0] === false) && height <= viewport.h && width <= viewport.w) {
        rez = {
          position: 'fixed',
          top: margin[0],
          left: margin[3]
        };
      }

      rez.top = Math.ceil(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio))) + 'px';
      rez.left = Math.ceil(Math.max(rez.left, rez.left + ((viewport.w - width) * 0.5))) + 'px';

      return rez;
    },

    _afterZoomIn: function () {
      var current = F.current;

      F.isOpen = F.isOpened = true;

      F.wrap.addClass('fancybox-opened').css('overflow', 'visible');

      F.update();

      F.inner.css('overflow', current.scrolling === 'auto' ? 'auto' : (current.scrolling === 'yes' ? 'scroll' : 'hidden'));

      //Assign a click event
      if (current.closeClick || current.nextClick) {
        F.inner.css('cursor', 'pointer').bind('click.fb', current.nextClick ? F.next : F.close);
      }

      //Create a close button
      if (current.closeBtn) {
        $(current.tpl.closeBtn).appendTo(F.wrap).bind('click.fb', F.close);
      }

      //Create navigation arrows
      if (current.arrows && F.group.length > 1) {
        if (current.loop || current.index > 0) {
          $(current.tpl.prev).appendTo(F.wrap).bind('click.fb', F.prev);
        }

        if (current.loop || current.index < F.group.length - 1) {
          $(current.tpl.next).appendTo(F.wrap).bind('click.fb', F.next);
        }
      }

      F.trigger('afterShow');

      if (F.opts.autoPlay && !F.player.isActive) {
        F.opts.autoPlay = false;

        F.play();
      }
    },

    _afterZoomOut: function () {
      F.trigger('afterClose');

      F.wrap.trigger('onReset').remove();

      $.extend(F, {
        group: {},
        opts: {},
        current: null,
        isOpened: false,
        isOpen: false,
        wrap: null,
        outer: null,
        inner: null
      });
    }
  });

  /*
   *  Default transitions
   */

  F.transitions = {
    getOrigPosition: function () {
      var element = F.current.element,
        pos = {},
        width = 50,
        height = 50,
        image, viewport;

      if (element && element.nodeName && $(element).is(':visible')) {
        image = $(element).find('img:first');

        if (image.length) {
          pos = image.offset();
          width = image.outerWidth();
          height = image.outerHeight();

        } else {
          pos = $(element).offset();
        }

      } else {
        viewport = F.getViewport();
        pos.top = viewport.y + (viewport.h - height) * 0.5;
        pos.left = viewport.x + (viewport.w - width) * 0.5;
      }

      pos = {
        top: Math.ceil(pos.top) + 'px',
        left: Math.ceil(pos.left) + 'px',
        width: Math.ceil(width) + 'px',
        height: Math.ceil(height) + 'px'
      };

      return pos;
    },

    step: function (now, fx) {
      var ratio, innerValue, outerValue;

      if (fx.prop === 'width' || fx.prop === 'height') {
        innerValue = outerValue = Math.ceil(now - (F.current.padding * 2));

        if (fx.prop === 'height') {
          ratio = (now - fx.start) / (fx.end - fx.start);

          if (fx.start > fx.end) {
            ratio = 1 - ratio;
          }

          innerValue -= F.innerSpace * ratio;
          outerValue -= F.outerSpace * ratio;
        }

        F.inner[fx.prop](innerValue);
        F.outer[fx.prop](outerValue);
      }
    },

    zoomIn: function () {
      var wrap = F.wrap,
        current = F.current,
        startPos,
        endPos,
        dim = current.dim;

      if (current.openEffect === 'elastic') {
        endPos = $.extend({}, dim, F._getPosition(true));

        //Remove "position" property
        delete endPos.position;

        startPos = this.getOrigPosition();

        if (current.openOpacity) {
          startPos.opacity = 0;
          endPos.opacity = 1;
        }

        wrap.css(startPos).show().animate(endPos, {
          duration: current.openSpeed,
          easing: current.openEasing,
          step: this.step,
          complete: F._afterZoomIn
        });

      } else {
        wrap.css($.extend({}, dim, F._getPosition()));

        if (current.openEffect === 'fade') {
          wrap.fadeIn(current.openSpeed, F._afterZoomIn);

        } else {
          wrap.show();
          F._afterZoomIn();
        }
      }
    },

    zoomOut: function () {
      var wrap = F.wrap,
        current = F.current,
        endPos;

      if (current.closeEffect === 'elastic') {
        if (wrap.css('position') === 'fixed') {
          wrap.css(F._getPosition(true));
        }

        endPos = this.getOrigPosition();

        if (current.closeOpacity) {
          endPos.opacity = 0;
        }

        wrap.animate(endPos, {
          duration: current.closeSpeed,
          easing: current.closeEasing,
          step: this.step,
          complete: F._afterZoomOut
        });

      } else {
        wrap.fadeOut(current.closeEffect === 'fade' ? current.closeSpeed : 0, F._afterZoomOut);
      }
    },

    changeIn: function () {
      var wrap = F.wrap,
        current = F.current,
        startPos;

      if (current.nextEffect === 'elastic') {
        startPos = F._getPosition(true);
        startPos.opacity = 0;
        startPos.top = (parseInt(startPos.top, 10) - 200) + 'px';

        wrap.css(startPos).show().animate({
          opacity: 1,
          top: '+=200px'
        }, {
          duration: current.nextSpeed,
          complete: F._afterZoomIn
        });

      } else {
        wrap.css(F._getPosition());

        if (current.nextEffect === 'fade') {
          wrap.hide().fadeIn(current.nextSpeed, F._afterZoomIn);

        } else {
          wrap.show();
          F._afterZoomIn();
        }
      }
    },

    changeOut: function () {
      var wrap = F.wrap,
        current = F.current,
        cleanUp = function () {
          $(this).trigger('onReset').remove();
        };

      wrap.removeClass('fancybox-opened');

      if (current.prevEffect === 'elastic') {
        wrap.animate({
          'opacity': 0,
          top: '+=200px'
        }, {
          duration: current.prevSpeed,
          complete: cleanUp
        });

      } else {
        wrap.fadeOut(current.prevEffect === 'fade' ? current.prevSpeed : 0, cleanUp);
      }
    }
  };

  /*
   *  Overlay helper
   */

  F.helpers.overlay = {
    overlay: null,

    update: function () {
      var width, scrollWidth, offsetWidth;

      //Reset width/height so it will not mess
      this.overlay.width(0).height(0);

      if ($.browser.msie) {
        scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

        width = scrollWidth < offsetWidth ? W.width() : scrollWidth;

      } else {
        width = D.width();
      }

      this.overlay.width(width).height(D.height());
    },

    beforeShow: function (opts) {
      if (this.overlay) {
        return;
      }

      this.overlay = $('<div id="fancybox-overlay"></div>').css(opts.css || {
        background: 'black'
      }).appendTo('body');

      this.update();

      if (opts.closeClick) {
        this.overlay.bind('click.fb', F.close);
      }

      W.bind("resize.fb", $.proxy(this.update, this));

      this.overlay.fadeTo(opts.speedIn || "fast", opts.opacity || 1);
    },

    onUpdate: function () {
      //Update as content may change document dimensions
      this.update();
    },

    afterClose: function (opts) {
      if (this.overlay) {
        this.overlay.fadeOut(opts.speedOut || "fast", function () {
          $(this).remove();
        });
      }

      this.overlay = null;
    }
  };

  /*
   *  Title helper
   */

  F.helpers.title = {
    beforeShow: function (opts) {
      var title, text = F.current.title;

      if (text) {
        title = $('<div class="fancybox-title fancybox-title-' + opts.type + '-wrap">' + text + '</div>').appendTo('body');

        if (opts.type === 'float') {
          //This helps for some browsers
          title.width(title.width());

          title.wrapInner('<span class="child"></span>');

          //Increase bottom margin so this title will also fit into viewport
          F.current.margin[2] += Math.abs(parseInt(title.css('margin-bottom'), 10));
        }

        title.appendTo(opts.type === 'over' ? F.inner : (opts.type === 'outside' ? F.wrap : F.outer));
      }
    }
  };

  // jQuery plugin initialization
  $.fn.fancybox = function (options) {
    var opts = options || {},
      selector = this.selector || '';

    function run(e) {
      var group = [], relType, relVal, rel = this.rel;

      if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey)) {
        e.preventDefault();

        relVal = $(this).data('fancybox-group');

        // Check if element has 'data-fancybox-group' attribute, if not - use 'rel'
        if (typeof relVal !== 'undefined') {
          relType = relVal ? 'data-fancybox-group' : false;

        } else if (rel && rel !== '' && rel !== 'nofollow') {
          relVal = rel;
          relType = 'rel';
        }

        if (relType) {
          group = selector.length ? $(selector).filter('[' + relType + '="' + relVal + '"]') : $('[' + relType + '="' + relVal + '"]');
        }

        if (group.length) {
          opts.index = group.index(this);

          F.open(group.get(), opts);

        } else {
          F.open(this, opts);
        }
      }
    }

    if (selector) {
      D.undelegate(selector, 'click.fb-start').delegate(selector, 'click.fb-start', run);

    } else {
      $(this).unbind('click.fb-start').bind('click.fb-start', run);
    }

    return this;
  };

}(window, document, jQuery));

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);


 /*!
 * Buttons helper for fancyBox
 * version: 1.0.2
 * @requires fancyBox v2.0 or later
 *
 * Usage: 
 *     $(".fancybox").fancybox({
 *         buttons: {
 *             position : 'top'
 *         }
 *     });
 * 
 * Options:
 *     tpl - HTML template
 *     position - 'top' or 'bottom'
 * 
 */
(function ($) {
  //Shortcut for fancyBox object
  var F = $.fancybox;

  //Add helper object
  F.helpers.buttons = {
    tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>',
    list: null,
    buttons: {},

    update: function () {
      var toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

      //Size toggle button
      if (F.current.canShrink) {
        toggle.addClass('btnToggleOn');

      } else if (!F.current.canExpand) {
        toggle.addClass('btnDisabled');
      }
    },

    beforeLoad: function (opts) {
      //Remove self if gallery do not have at least two items
      if (F.group.length < 2) {
        F.coming.helpers.buttons = false;
        F.coming.closeBtn = true;

        return;
      }

      //Increase top margin to give space for buttons
      F.coming.margin[ opts.position === 'bottom' ? 2 : 0 ] += 30;
    },

    onPlayStart: function () {
      if (this.list) {
        this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
      }
    },

    onPlayEnd: function () {
      if (this.list) {
        this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
      }
    },

    afterShow: function (opts) {
      var buttons;

      if (!this.list) {
        this.list = $(opts.tpl || this.tpl).addClass(opts.position || 'top').appendTo('body');

        this.buttons = {
          prev : this.list.find('.btnPrev').click( F.prev ),
          next : this.list.find('.btnNext').click( F.next ),
          play : this.list.find('.btnPlay').click( F.play ),
          toggle : this.list.find('.btnToggle').click( F.toggle )
        }
      }

      buttons = this.buttons;

      //Prev
      if (F.current.index > 0 || F.current.loop) {
        buttons.prev.removeClass('btnDisabled');
      } else {
        buttons.prev.addClass('btnDisabled');
      }

      //Next / Play
      if (F.current.loop || F.current.index < F.group.length - 1) {
        buttons.next.removeClass('btnDisabled');
        buttons.play.removeClass('btnDisabled');

      } else {
        buttons.next.addClass('btnDisabled');
        buttons.play.addClass('btnDisabled');
      }

      this.update();
    },

    onUpdate: function () {
      this.update();
    },

    beforeClose: function () {
      if (this.list) {
        this.list.remove();
      }

      this.list = null;
      this.buttons = {};
    }
  };

}(jQuery));

 /*!
 * Thumbnail helper for fancyBox
 * version: 1.0.2
 * @requires fancyBox v2.0 or later
 *
 * Usage: 
 *     $(".fancybox").fancybox({
 *         thumbs: {
 *             width  : 50,
 *             height : 50
 *         }
 *     });
 * 
 * Options:
 *     width - thumbnail width
 *     height - thumbnail height
 *     source - function to obtain the URL of the thumbnail image
 *     position - 'top' or 'bottom'
 * 
 */
(function ($) {
  //Shortcut for fancyBox object
  var F = $.fancybox;

  //Add helper object
  F.helpers.thumbs = {
    wrap: null,
    list: null,
    width: 0,

    //Default function to obtain the URL of the thumbnail image
    source: function (el) {
      var img = $(el).find('img');

      return img.length ? img.attr('src') : el.href;
    },

    init: function (opts) {
      var that = this,
        list,
        thumbWidth = opts.width || 50,
        thumbHeight = opts.height || 50,
        thumbSource = opts.source || this.source;

      //Build list structure
      list = '';

      for (var n = 0; n < F.group.length; n++) {
        list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
      }

      this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position || 'bottom').appendTo('body');
      this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);

      //Load each thumbnail
      $.each(F.group, function (i) {
        $("<img />").load(function () {
          var width = this.width,
            height = this.height,
            widthRatio, heightRatio, parent;

          if (!that.list || !width || !height) {
            return;
          }

          //Calculate thumbnail width/height and center it
          widthRatio = width / thumbWidth;
          heightRatio = height / thumbHeight;
          parent = that.list.children().eq(i).find('a');

          if (widthRatio >= 1 && heightRatio >= 1) {
            if (widthRatio > heightRatio) {
              width = Math.floor(width / heightRatio);
              height = thumbHeight;

            } else {
              width = thumbWidth;
              height = Math.floor(height / widthRatio);
            }
          }

          $(this).css({
            width: width,
            height: height,
            top: Math.floor(thumbHeight / 2 - height / 2),
            left: Math.floor(thumbWidth / 2 - width / 2)
          });

          parent.width(thumbWidth).height(thumbHeight);

          $(this).hide().appendTo(parent).fadeIn(300);

        }).attr('src', thumbSource(this));
      });

      //Set initial width
      this.width = this.list.children().eq(0).outerWidth();

      this.list.width(this.width * (F.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (F.current.index * this.width + this.width * 0.5)));
    },

    //Center list
    update: function (opts) {
      if (this.list) {
        this.list.stop(true).animate({
          'left': Math.floor($(window).width() * 0.5 - (F.current.index * this.width + this.width * 0.5))
        }, 150);
      }
    },

    beforeLoad: function (opts) {
      //Remove self if gallery do not have at least two items 
      if (F.group.length < 2) {
        F.coming.helpers.thumbs = false;

        return;
      }

      //Increase bottom margin to give space for thumbs
      F.coming.margin[ opts.position === 'top' ? 0 : 2 ] = opts.height + 30;
    },

    afterShow: function (opts) {
      //Check if exists and create or update list
      if (this.list) {
        this.update(opts);

      } else {
        this.init(opts);
      }

      //Set active element
      this.list.children().removeClass('active').eq(F.current.index).addClass('active');
    },

    onUpdate: function () {
      this.update();
    },

    beforeClose: function () {
      if (this.wrap) {
        this.wrap.remove();
      }

      this.wrap = null;
      this.list = null;
      this.width = 0;
    }
  }

}(jQuery));

