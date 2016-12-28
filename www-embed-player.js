(function(){var l,n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function aa(a){a.getInstance=function(){return a.Ja?a.Ja:a.Ja=new a}}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ca(a){return"array"==ba(a)}
function ea(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function v(a){return"string"==typeof a}
function fa(a){return"function"==ba(a)}
function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return w.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function oa(a,b){for(var c in b)a[c]=b[c]}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function pa(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
pa.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function qa(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function ra(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ra);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(ra,Error);ra.prototype.name="CustomError";var sa;function ta(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function ua(a){a=String(a);if(ta(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function va(a){return eval("("+a+")")}
function wa(a){var b=[];xa(new ya,a,b);return b.join("")}
function ya(){}
function xa(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ca(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],xa(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),za(d,c),c.push(":"),xa(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":za(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Aa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Da=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function za(a,b){b.push('"',a.replace(Da,function(a){var b=Aa[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Aa[a]=b);return b}),'"')}
;function Ea(a,b){this.width=a;this.height=b}
l=Ea.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Fa(a){this.b=a||{cookie:""}}
var Ga=/\s*;\s*/;l=Fa.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Ga),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.ba=function(){return this.b.cookie?(this.b.cookie||"").split(Ga).length:0};
l.clear=function(){for(var a=(this.b.cookie||"").split(Ga),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ha=new Fa("undefined"==typeof document?null:document);Ha.f=3950;function Ia(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ja(a){var b=Ka,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function La(){var a=Ma,b;for(b in a)return!1;return!0}
function Na(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Oa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Pa.length;f++)c=Pa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ra(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Sa(a){Sa[" "](a);return a}
Sa[" "]=t;function Ta(a,b){var c=Ua;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Va(a){return/^[\s\xa0]*$/.test(a)}
var Wa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Xa(a,b){return a<b?-1:a>b?1:0}
function Ya(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Za=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Za,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var $a=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",$a,void 0);function z(a){ab(Za,arguments)}
function A(a,b){return a in Za?Za[a]:b}
function B(a,b){fa(a)&&(a=bb(a));return window.setTimeout(a,b)}
function cb(a){window.clearTimeout(a)}
function bb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){db(b)}}:a}
function db(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=A("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),z("ERRORS",c))}
function ab(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var eb=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},fb="Microsoft Internet Explorer"==navigator.appName;function gb(a,b,c){a&&(a.dataset?a.dataset[hb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[hb(b)]:a.getAttribute("data-"+b):null}
function ib(a,b){a&&(a.dataset?delete a.dataset[hb(b)]:a.removeAttribute("data-"+b))}
var jb={};function hb(a){return jb[a]||(jb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var kb=null;"undefined"!=typeof XMLHttpRequest?kb=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(kb=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function lb(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function D(){this.S=this.S;this.K=this.K}
D.prototype.S=!1;D.prototype.isDisposed=function(){return this.S};
D.prototype.dispose=function(){this.S||(this.S=!0,this.w())};
function mb(a,b){a.S?p(void 0)?b.call(void 0):b():(a.K||(a.K=[]),a.K.push(p(void 0)?w(b,void 0):b))}
D.prototype.w=function(){if(this.K)for(;this.K.length;)this.K.shift()()};
function nb(a){a&&"function"==typeof a.dispose&&a.dispose()}
function pb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?pb.apply(null,d):nb(d)}}
;var E;a:{var qb=n.navigator;if(qb){var rb=qb.userAgent;if(rb){E=rb;break a}}E=""}function F(a){return-1!=E.indexOf(a)}
;var sb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},tb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=v(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var h=g[k];
b.call(c,h,k,a)&&(e[f++]=h)}return e},ub=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},vb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function wb(a,b){var c;a:{c=a.length;for(var d=v(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:v(a)?a.charAt(c):a[c]}
function xb(a,b){return 0<=sb(a,b)}
function yb(a,b){var c=sb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function zb(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Ab(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Bb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Cb(a,b,c,d){return Array.prototype.splice.apply(a,Db(arguments,1))}
function Db(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Eb(){this.f=this.b=null}
var Gb=new pa(function(){return new Fb},function(a){a.reset()},100);
Eb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Fb(){this.next=this.scope=this.b=null}
Fb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Fb.prototype.reset=function(){this.next=this.scope=this.b=null};function Hb(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;var Ib=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function H(a){return a.match(Ib)}
function Jb(a){return a?decodeURI(a):a}
function Kb(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Lb(a,b,c){if(ca(b))for(var d=0;d<b.length;d++)Lb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Mb(a,b,c){for(c=c||0;c<b.length;c+=2)Lb(b[c],b[c+1],a);return a}
function Nb(a,b){for(var c in b)Lb(c,b[c],a);return a}
function Ob(a){a=Nb([],a);a[0]="";return a.join("")}
function Pb(a,b){return Kb(2==arguments.length?Mb([a],arguments[1],0):Mb([a],arguments,1))}
;function Qb(){this.b="";this.f=Rb}
Qb.prototype.va=!0;Qb.prototype.ua=function(){return this.b};
function Sb(a){return a instanceof Qb&&a.constructor===Qb&&a.f===Rb?a.b:"type_error:SafeUrl"}
var Tb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Ub(a){if(a instanceof Qb)return a;a=a.va?a.ua():String(a);Tb.test(a)||(a="about:invalid#zClosurez");return Vb(a)}
var Rb={};function Vb(a){var b=new Qb;b.b=a;return b}
Vb("about:blank");function Wb(){this.b="";this.f=Xb}
Wb.prototype.va=!0;Wb.prototype.ua=function(){return this.b};
var Xb={};function Yb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")}
;function Zb(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ca(b[f])?Bb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function $b(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Zb(d[1]||""),e;for(e in b)d[e]=b[e];return Kb(Nb([a],d))+c}
;function ac(a){n.setTimeout(function(){throw a;},0)}
var bc;
function cc(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Ha;c.Ha=null;a()}};
return function(a){d.next={Ha:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function dc(){this.b=""}
dc.prototype.va=!0;dc.prototype.ua=function(){return this.b};
function ec(a){var b=new dc;b.b=a;return b}
ec("<!DOCTYPE html>");ec("");ec("<br>");var fc="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function gc(){}
gc.prototype.next=function(){throw fc;};
gc.prototype.aa=function(){return this};
function hc(a){if(a instanceof gc)return a;if("function"==typeof a.aa)return a.aa(!1);if(ea(a)){var b=0,c=new gc;c.next=function(){for(;;){if(b>=a.length)throw fc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ic(a,b){if(ea(a))try{G(a,b,void 0)}catch(c){if(c!==fc)throw c;}else{a=hc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==fc)throw c;}}}
function jc(a){if(ea(a))return Ab(a);a=hc(a);var b=[];ic(a,function(a){b.push(a)});
return b}
;function I(a,b){this.l=p(a)?a:0;this.o=p(b)?b:0}
I.prototype.equals=function(a){return a instanceof I&&(this==a?!0:this&&a?this.l==a.l&&this.o==a.o:!1)};
I.prototype.ceil=function(){this.l=Math.ceil(this.l);this.o=Math.ceil(this.o);return this};
I.prototype.floor=function(){this.l=Math.floor(this.l);this.o=Math.floor(this.o);return this};
I.prototype.round=function(){this.l=Math.round(this.l);this.o=Math.round(this.o);return this};var kc=F("Opera"),J=F("Trident")||F("MSIE"),lc=F("Edge"),mc=F("Gecko")&&!(-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),nc=-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"),oc=F("Macintosh"),pc=F("Windows"),qc=F("Android"),rc=Hb(),sc=F("iPad"),tc=F("iPod");function uc(){var a=n.document;return a?a.documentMode:void 0}
var vc;a:{var xc="",yc=function(){var a=E;if(mc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(lc)return/Edge\/([\d\.]+)/.exec(a);if(J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(nc)return/WebKit\/(\S+)/.exec(a);if(kc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
yc&&(xc=yc?yc[1]:"");if(J){var zc=uc();if(null!=zc&&zc>parseFloat(xc)){vc=String(zc);break a}}vc=xc}var Ac=vc,Ua={};
function K(a){return Ta(a,function(){for(var b=0,c=Wa(String(Ac)).split("."),d=Wa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=Xa(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||Xa(0==g[2].length,0==k[2].length)||Xa(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}
var Bc;var Cc=n.document;Bc=Cc&&J?uc()||("CSS1Compat"==Cc.compatMode?parseInt(Ac,10):5):void 0;function Dc(a,b){Ec||Fc();Gc||(Ec(),Gc=!0);var c=Hc,d=Gb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Ec;function Fc(){var a=n.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);Ec=function(){b.then(Ic)}}else Ec=function(){var a=Ic;
!fa(n.setImmediate)||n.Window&&n.Window.prototype&&!F("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(bc||(bc=cc()),bc(a)):n.setImmediate(a)}}
var Gc=!1,Hc=new Eb;function Ic(){for(var a;a=Hc.remove();){try{a.b.call(a.scope)}catch(b){ac(b)}qa(Gb,a)}Gc=!1}
;!mc&&!J||J&&9<=Number(Bc)||mc&&K("1.9.1");var Jc=J&&!K("9");function Kc(a,b){var c;c=b instanceof Qb?b:Ub(b);a.href=Sb(c)}
function Lc(a,b){a.rel="stylesheet";a.href=b instanceof Wb&&b.constructor===Wb&&b.f===Xb?b.b:"type_error:TrustedResourceUrl"}
;function Mc(a){Nc();var b=new Wb;b.b=a;return b}
var Nc=t;var Oc=F("Firefox"),Pc=Hb()||F("iPod"),Qc=F("iPad"),Rc=F("Android")&&!(Yb()||F("Firefox")||F("Opera")||F("Silk")),Sc=Yb(),Tc=F("Safari")&&!(Yb()||F("Coast")||F("Opera")||F("Edge")||F("Silk")||F("Android"))&&!(Hb()||F("iPad")||F("iPod"));function Uc(a){return a?new Vc(Wc(a)):sa||(sa=new Vc)}
function Xc(a){var b=document;return v(a)?b.getElementById(a):a}
function Yc(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):Zc(a)}
function Zc(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&xb(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function $c(a){a=a.document;a=ad(a)?a.documentElement:a.body;return new Ea(a.clientWidth,a.clientHeight)}
function bd(a){var b=a.scrollingElement?a.scrollingElement:!nc&&ad(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return J&&K("10")&&a.pageYOffset!=b.scrollTop?new I(b.scrollLeft,b.scrollTop):new I(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function ad(a){return"CSS1Compat"==a.compatMode}
function cd(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function dd(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function ed(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Wc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function fd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else cd(a),a.appendChild(Wc(a).createTextNode(String(b)))}
var gd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},hd={IMG:" ",BR:"\n"};function id(a){if(Jc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];jd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Jc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function jd(a,b,c){if(!(a.nodeName in gd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in hd)b.push(hd[a.nodeName]);else for(a=a.firstChild;a;)jd(a,b,c),a=a.nextSibling}
function kd(a){var b=ld.ab;return b?md(a,function(a){return!b||v(a.className)&&xb(a.className.split(/\s+/),b)},!0,void 0):null}
function md(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Vc(a){this.b=a||n.document||document}
Vc.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Vc.prototype.createElement=function(a){return this.b.createElement(String(a))};
Vc.prototype.isElement=function(a){return ga(a)&&1==a.nodeType};
Vc.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function L(a,b){this.b=0;this.D=void 0;this.i=this.f=this.g=null;this.j=this.A=!1;if(a!=t)try{var c=this;a.call(b,function(a){nd(c,2,a)},function(a){nd(c,3,a)})}catch(d){nd(this,3,d)}}
function od(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
od.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var pd=new pa(function(){return new od},function(a){a.reset()},100);
function qd(a,b,c){var d=pd.get();d.g=a;d.f=b;d.context=c;return d}
function rd(a){if(a instanceof L)return a;var b=new L(t);nd(b,2,a);return b}
function sd(a){return new L(function(b,c){c(a)})}
L.prototype.then=function(a,b,c){return td(this,fa(a)?a:null,fa(b)?b:null,c)};
Ra(L);L.prototype.cancel=function(a){0==this.b&&Dc(function(){var b=new ud(a);vd(this,b)},this)};
function vd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?vd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):wd(c),xd(c,e,3,b)))}a.g=null}else nd(a,3,b)}
function yd(a,b){a.f||2!=a.b&&3!=a.b||zd(a);a.i?a.i.next=b:a.f=b;a.i=b}
function td(a,b,c,d){var e=qd(null,null,null);e.b=new L(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof ud?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;yd(a,e);return e.b}
L.prototype.K=function(a){this.b=0;nd(this,2,a)};
L.prototype.J=function(a){this.b=0;nd(this,3,a)};
function nd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.K,g=a.J;if(e instanceof L)yd(e,qd(f||t,g||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(m){k=!1}else k=!1;if(k)e.then(f,g,a),d=!0;else{if(ga(e))try{var h=e.then;if(fa(h)){Ad(e,h,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.D=c,a.b=b,a.g=null,zd(a),3!=b||c instanceof ud||Bd(a,c))}}
function Ad(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function zd(a){a.A||(a.A=!0,Dc(a.H,a))}
function wd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
L.prototype.H=function(){for(var a;a=wd(this);)xd(this,a,this.b,this.D);this.A=!1};
function xd(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Cd(b,c,d);else try{b.i?b.g.call(b.context):Cd(b,c,d)}catch(e){Dd.call(null,e)}qa(pd,b)}
function Cd(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Bd(a,b){a.j=!0;Dc(function(){a.j&&Dd.call(null,b)})}
var Dd=ac;function ud(a){ra.call(this,a)}
y(ud,ra);ud.prototype.name="cancel";function M(a){D.call(this);this.i=1;this.f=[];this.g=0;this.b=[];this.G={};this.j=!!a}
y(M,D);l=M.prototype;l.subscribe=function(a,b,c){var d=this.G[a];d||(d=this.G[a]=[]);var e=this.i;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.i=e+3;d.push(e);return e};
l.unsubscribe=function(a,b,c){if(a=this.G[a]){var d=this.b;if(a=wb(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.R(a)}return!1};
l.R=function(a){var b=this.b[a];if(b){var c=this.G[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&yb(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.M=function(a,b){var c=this.G[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.j)for(e=0;e<c.length;e++){var g=c[e];Ed(this.b[g+1],this.b[g+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.R(c)}}return 0!=e}return!1};
function Ed(a,b,c){Dc(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.G[a];b&&(G(b,this.R,this),delete this.G[a])}else this.b.length=0,this.G={}};
l.ba=function(a){if(a){var b=this.G[a];return b?b.length:0}a=0;for(b in this.G)a+=this.ba(b);return a};
l.w=function(){M.B.w.call(this);this.clear();this.f.length=0};var Fd=r("yt.pubsub.instance_")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.R;M.prototype.publish=M.prototype.M;M.prototype.clear=M.prototype.clear;q("yt.pubsub.instance_",Fd,void 0);var Gd=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Gd,void 0);var Hd=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Hd,void 0);var Id=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Id,void 0);
var Jd=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",Jd,void 0);function Kd(a,b,c){var d=Md();if(d){var e=d.subscribe(a,function(){if(!Jd||Jd!=e){var d=arguments,g;g=function(){Gd[e]&&b.apply(c||window,d)};
try{Id[a]?g():B(g,0)}catch(k){db(k)}}},c);
Gd[e]=!0;Hd[a]||(Hd[a]=[]);Hd[a].push(e);return e}return 0}
function Nd(a){var b=Md();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),G(a,function(a){b.unsubscribeByKey(a);delete Gd[a]}))}
function Od(a,b){var c=Md();return c?c.publish.apply(c,arguments):!1}
function Pd(a){Hd[a]&&(a=Hd[a],G(a,function(a){Gd[a]&&delete Gd[a]}),a.length=0)}
function Qd(a){var b=Md();if(b)if(b.clear(a),a)Pd(a);else for(var c in Hd)Pd(c)}
function Md(){return r("yt.pubsub.instance_")}
;function Rd(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&bb(b)(h)}
var h=kb&&kb();if(!("open"in h))return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);f="POST"==c;if(e=Sd(a,e))for(var m in e)h.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(f=!1);f&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);return h}
function Sd(a,b){b=b||{};var c;c||(c=window.location.href);var d=H(a)[1]||null,e=Jb(H(a)[3]||null);d&&e?(d=c,c=H(a),d=H(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Jb(H(c)[3]||null)==e&&(Number(H(c)[4]||null)||null)==(Number(H(a)[4]||null)||null):!0;for(var f in Td){if((e=d=A(Td[f]))&&!(e=c)){var e=f,g=A("CORS_HEADER_WHITELIST")||{},k=Jb(H(a)[3]||null);e=k?(g=g[k])?xb(g,e):!1:!0}e&&(b[f]=d)}return b}
function Ud(a,b){b.method="POST";b.C||(b.C={});Vd(a,b)}
function Wd(a,b){var c=A("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.hc&&(!Jb(H(a)[3]||null)||b.withCredentials||Jb(H(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.C&&b.C[c])}
function Vd(a,b){var c=b.format||"JSON";b.tb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=A("XSRF_FIELD_NAME",void 0),e=A("XSRF_TOKEN",void 0),f=b.xa;f&&(f[d]&&delete f[d],a=$b(a,f||{}));var g=b.postBody||"",f=b.C;Wd(a,b)&&(f||(f={}),f[d]=e);f&&v(g)&&(d=Zb(g),Qa(d,f),g=b.Pa&&"JSON"==b.Pa?JSON.stringify(d):Ob(d));var k=!1,h,m=Rd(a,function(a){if(!k){k=!0;h&&cb(h);var d=lb(a),e=null;if(d||400<=a.status&&500>a.status)e=
Xd(c,a,b.gc);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.wa&&b.wa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.O&&0<b.timeout&&(h=B(function(){k||(k=!0,m.abort(),cb(h),b.O.call(b.context||n,m))},b.timeout))}
function Xd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=va(a));break;case "XML":if(b=(b=b.responseXML)?Yd(b):null)d={},G(b.getElementsByTagName("*"),function(a){d[a.tagName]=Zd(a)})}c&&$d(d);
return d}
function $d(a){if(ga(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=ec(a[b]);a[c]=d}else $d(a[b])}}
function Yd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Zd(a){var b="";G(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Td={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function ae(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(be,""),c=c.replace(ce,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else de(a,b)}
function de(a,b){var c=ee(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Kd(c,b),g=""+ia(b);fe[g]=e}f||(d=ge(a,c,function(){C(d,"loaded")||(gb(d,"loaded","true"),Od(c),B(na(Qd,c),0))}))}}
function ge(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function he(a,b){if(a&&b){var c=""+ia(b);(c=fe[c])&&Nd(c)}}
function ee(a){var b=document.createElement("a");Kc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ya(a)}
var be=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ce=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,fe={};function ie(a){if(window.spf){var b=a.match(je);spf.style.load(a,b?b[1]:"",void 0)}else ke(a)}
function ke(a){var b=le(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=me(a,b,function(){C(c,"loaded")||(gb(c,"loaded","true"),Od(b),B(na(Qd,b),0))}))}
function me(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Mc(a);Lc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function le(a){var b=document.createElement("a");Kc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ya(a)}
var je=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var ne={},oe=0;function pe(a,b){a&&(A("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Rd(a,b):qe(a,b))}
function qe(a,b){var c=new Image,d=""+oe++;ne[d]=c;c.onload=c.onerror=function(){b&&ne[d]&&b();delete ne[d]};
c.src=a}
;function re(){var a=Oa(se);return new L(function(b,c){a.F=function(a){lb(a)?b(a):c(new te("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new te("Unknown request error","net.unknown"))};
a.O=function(){c(new te("Request timed out","net.timeout"))};
Vd("//googleads.g.doubleclick.net/pagead/id",a)})}
function te(a,b){ra.call(this,a+", errorCode="+b);this.errorCode=b}
y(te,ra);te.prototype.name="PromiseAjaxError";var ue=null;function ve(){var a=A("BG_I",null),b=A("BG_IU",null),c=A("BG_P",void 0);b?ae(b,function(){ue=new botguard.bg(c)}):a&&(eval(a),ue=new botguard.bg(c))}
function we(){return null!=ue}
function xe(){return ue?ue.invoke():null}
;function ye(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function ze(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],m,u,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),u=1518500249):(m=d^f^h,u=1859775393):60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782),m=((a<<5|a>>>27)&4294967295)+m+k+u+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var h=24;0<=h;h-=8)a[d++]=e[g]>>h&255;return a}
for(var e=[],f=[],g=[],k=[128],h=1;64>h;++h)k[h]=0;var m,u;a();return{reset:a,update:c,digest:d,lb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Ae=window,Be=document,Ce=Ae.location;function De(){}
var Ee=/\[native code\]/;function N(a,b,c){return a[b]=a[b]||c}
function Fe(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Ge(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function O(){var a;if((a=Object.create)&&Ee.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var He=N(Ae,"gapi",{});function Ie(){}
;function Je(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ke||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Je.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Je.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Je.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Ke={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function Le(a,b,c){this.b=a;this.g=b;this.f=c}
var Me=1;function Ne(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;function Oe(a){this.b=a}
Oe.prototype.set=function(a,b){p(b)?this.b.set(a,wa(b)):this.b.remove(a)};
Oe.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return ua(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Oe.prototype.remove=function(a){this.b.remove(a)};function Pe(a){return A("EXPERIMENT_FLAGS",{})[a]}
;function Qe(){return{apiaryHost:A("APIARY_HOST",void 0),Fa:A("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:A("GAPI_HINT_OVERRIDE"),gapiHintParams:A("GAPI_HINT_PARAMS",void 0),innertubeApiKey:A("INNERTUBE_API_KEY",void 0),innertubeApiVersion:A("INNERTUBE_API_VERSION",void 0),ub:A("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:A("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),wb:A("INNERTUBE_CONTEXT_HL",void 0),vb:A("INNERTUBE_CONTEXT_GL",void 0),Wb:A("XHR_APIARY_HOST",void 0)}}
function Re(a){a={client:{hl:a.wb,gl:a.vb,clientName:a.ub,clientVersion:a.innertubeContextClientVersion}};A("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:A("DELEGATED_SESSION_ID")});return a}
;var P;P=N(Ae,"___jsl",O());N(P,"I",0);N(P,"hel",10);function Se(){var a=Ce.href,b;if(P.dpo)b=P.h;else{b=P.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Te(a){var b=N(P,"PQ",[]);P.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ue(a){return N(N(P,"H",O()),a,O())}
;function Ve(a){this.b=a}
y(Ve,Oe);function We(a){this.data=a}
function Xe(a){return!p(a)||a instanceof We?a:new We(a)}
Ve.prototype.set=function(a,b){Ve.B.set.call(this,a,Xe(b))};
Ve.prototype.f=function(a){a=Ve.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ve.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ye(a,b,c){var d=[],e=[];if(1==(ca(c)?2:1))return e=[b,a],G(d,function(a){e.push(a)}),Ze(e.join(" "));
var f=[],g=[];G(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(a){e.push(a)});
a=Ze(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ze(a){var b=ze();b.update(a);return b.lb().toLowerCase()}
;var $e=N(P,"perf",O());N($e,"g",O());var af=N($e,"i",O());N($e,"r",[]);O();O();function bf(a,b,c){b&&0<b.length&&(b=cf(b),c&&0<c.length&&(b+="___"+cf(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=N(af,"_p",O()),N(b,c,O())[a]=(new Date).getTime(),b=$e.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function cf(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function df(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function ef(a,b){return a.classList?a.classList.contains(b):xb(df(a),b)}
function ff(a,b){a.classList?a.classList.add(b):ef(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function gf(a,b){a.classList?a.classList.remove(b):ef(a,b)&&(a.className=tb(df(a),function(a){return a!=b}).join(" "))}
function hf(a,b,c){c?ff(a,b):gf(a,b)}
;function jf(a){this.b=a}
y(jf,Ve);jf.prototype.set=function(a,b,c){if(b=Xe(b)){if(c){if(c<x()){jf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}jf.B.set.call(this,a,b)};
jf.prototype.f=function(a,b){var c=jf.B.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<x()||!!d&&d>x()}if(d)jf.prototype.remove.call(this,a);else return c}};var kf=O(),lf=[];function mf(a){throw Error("Bad hint"+(a?": "+a:""));}
lf.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?P[b]=N(P,b,[]).concat(c):N(P,b,c)}if(b=a.u)a=N(P,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var nf=/^(\/[a-zA-Z0-9_\-]+)+$/,of=/^[a-zA-Z0-9\-_\.,!]+$/,pf=/^gapi\.loaded_[0-9]+$/,qf=/^[a-zA-Z0-9,._-]+$/;function rf(a,b,c,d){var e=a.split(";"),f=e.shift(),g=kf[f],k=null;g?k=g(e,b,c,d):mf("no hint processor for: "+f);k||mf("failed to generate load url");b=k;c=b.match(sf);(d=b.match(tf))&&1===d.length&&uf.test(b)&&c&&1===c.length||mf("failed sanity: "+a);return k}
function vf(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=wf(a);pf.test(c)||mf("invalid_callback");b=xf(b);d=d&&d.length?xf(d):null;return[encodeURIComponent(a.Kb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ea?"/am="+e(a.Ea):"",a.Ra?"/rs="+e(a.Ra):"",a.Ya?"/t="+e(a.Ya):"","/cb=",e(c)].join("")}
function wf(a){"/"!==a.charAt(0)&&mf("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))mf("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");nf.test(b)||mf("invalid_prefix");c=yf(a,"k",!0);d=yf(a,"am");e=yf(a,"rs");a=yf(a,"t");return{Kb:b,version:c,
Ea:d,Ra:e,Ya:a}}
function xf(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");qf.test(e)&&b.push(e)}return b.join(",")}
function yf(a,b,c){a=a[b];!a&&c&&mf("missing: "+b);if(a){if(of.test(a))return a;mf("invalid: "+b)}return null}
var uf=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,tf=/\/cb=/g,sf=/\/\//g;function zf(){var a=Se();if(!a)throw Error("Bad hint");return a}
kf.m=function(a,b,c,d){(a=a[0])||mf("missing_hint");return"https://apis.google.com"+vf(a,b,c,d)};
var Af=decodeURI("%73cript"),Bf=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Cf(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Fe.call(b,e)&&c.push(e)}return c}
function Df(){var a=P.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Bf)?a:P.nonce=null;var b=N(P,"us",[]);if(!b||!b.length)return P.nonce=null;for(var c=Be.getElementsByTagName(Af),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,k=b.length;g<k&&b[g]!==f.src;++g);if(g!==k&&a&&a===String(a)&&a.match(Bf))return P.nonce=a}}return null}
function Ef(a){if("loading"!=Be.readyState)Ff(a);else{var b=Df(),c="";null!==b&&(c=' nonce="'+b+'"');Be.write("<"+Af+' src="'+encodeURI(a)+'"'+c+"></"+Af+">")}}
function Ff(a){var b=Be.createElement(Af);b.setAttribute("src",a);a=Df();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Be.getElementsByTagName(Af)[0])?a.parentNode.insertBefore(b,a):(Be.head||Be.body||Be.documentElement).appendChild(b)}
function Gf(a,b){var c=b&&b._c;if(c)for(var d=0;d<lf.length;d++){var e=lf[d][0],f=lf[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Hf(a,b,c){If(function(){var c;c=b===Se()?N(He,"_",O()):O();c=N(Ue(b),"_",c);a(c)},c)}
function Jf(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Gf(a,c);var d=a?a.split(":"):[],e=c.h||zf(),f=N(P,"ah",O());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var h=k.split("."),h=f[k]||f[h[1]&&"ns:"+h[0]||""]||e,m=g.length&&g[g.length-1]||null,u=m;m&&m.hint==h||(u={hint:h,features:[]},g.push(u));u.features.push(k)}var da=g.length;if(1<da){var ob=c.callback;ob&&(c.callback=function(){0==--da&&ob()})}for(;d=g.shift();)Kf(d.features,c,d.hint)}else Kf(d||[],c,e)}
function Kf(a,b,c){function d(a,b){if(da)return 0;Ae.clearTimeout(u);ob.push.apply(ob,ha);var d=((He||{}).config||{}).update;d?d(f):f&&N(P,"cu",[]).push(f);if(b){bf("me0",a,wc);try{Hf(b,c,m)}finally{bf("me1",a,wc)}}return 1}
a=Ge(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,h=b.onerror,m=void 0;"function"==typeof h&&(m=h);var u=null,da=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var h=N(Ue(c),"r",[]).sort(),ob=N(Ue(c),"L",[]).sort(),wc=[].concat(h);0<g&&(u=Ae.setTimeout(function(){da=!0;k()},g));
var ha=Cf(a,ob);if(ha.length){var ha=Cf(a,h),Ba=N(P,"CP",[]),Ca=Ba.length;Ba[Ca]=function(a){function b(){var a=Ba[Ca+1];a&&a()}
function c(b){Ba[Ca]=null;d(ha,a)&&Te(function(){e&&e();b()})}
if(!a)return 0;bf("ml1",ha,wc);0<Ca&&Ba[Ca-1]?Ba[Ca]=function(){c(b)}:c(b)};
if(ha.length){var Ld="loaded_"+P.I++;He[Ld]=function(a){Ba[Ca](a);He[Ld]=null};
a=rf(c,ha,"gapi."+Ld,h);h.push.apply(h,ha);bf("ml0",ha,wc);b.sync||Ae.___gapisync?Ef(a):Ff(a)}else Ba[Ca](De)}else d(ha)&&e&&e()}
function If(a,b){if(P.hee&&0<P.hel)try{return a()}catch(c){b&&b(c),P.hel--,Jf("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
He.load=function(a,b){return If(function(){return Jf(a,b)})};function Lf(a){this.b=a}
y(Lf,jf);function Mf(){}
y(Mf,Ie);Mf.prototype.ba=function(){var a=0;ic(this.aa(!0),function(){a++});
return a};
Mf.prototype.clear=function(){var a=jc(this.aa(!0)),b=this;G(a,function(a){b.remove(a)})};function Nf(a){this.b=a}
y(Nf,Mf);l=Nf.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.ba=function(){return this.b.length};
l.aa=function(a){var b=0,c=this.b,d=new gc;d.next=function(){if(b>=c.length)throw fc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function Of(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(Of,Nf);function Pf(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y(Pf,Nf);var Qf=r("yt.dom.getNextId_");if(!Qf){Qf=function(){return++Rf};
q("yt.dom.getNextId_",Qf,void 0);var Rf=0}function Sf(){var a=document,b;vb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function Tf(a){this.b=a||Qe();Uf||(Uf=Vf(this.b))}
var Uf=null;function Vf(a){return(new L(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=fa(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Qa(d,{_c:{jsl:{h:A("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||A("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=Zb(1<g.length?g[1]:g[0])}else e={};var k=e.gapi_jsh;k&&Qa(d,{_c:{jsl:{h:k}}})}Jf("client",d)}catch(h){db(h)}})).then(function(){})}
Tf.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;Va(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;Va(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",A("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Tf.prototype.f=function(){return{context:Re(this.b)}};
Tf.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=B(function(){e||(e=!0,c.O&&c.O())},c.timeout));
Wf(this,a,b,function(a){if(!e)if(e=!0,d&&cb(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function Wf(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":A("VISITOR_DATA")},method:"POST",body:wa(c)},f=w(a.i,a);Uf.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;var Ka=r("yt.events.listeners_")||{};q("yt.events.listeners_",Ka,void 0);var Xf=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Xf,void 0);function Yf(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ja(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Q(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Yf(a,b,c,d);if(e)return e;var e=++Xf.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new Je(d);if(!md(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Je(b);
b.currentTarget=a;return c.call(a,b)};
g=bb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ka[e]=[a,b,c,g,d];return e}
function Zf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(a){if(a in Ka){var b=Ka[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ka[a]}}))}
;var $f={log_event:"events",log_interaction:"interactions"},ag={},bg={},cg=0,Ma=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Ma,void 0);function dg(a,b){Ma[a.endpoint]=Ma[a.endpoint]||[];var c=Ma[a.endpoint];c.push(a.Oa);bg[a.endpoint]=b;c.length>=(Number(Pe("web_logging_max_batch")||0)||20)?eg():fg()}
function eg(){cb(cg);if(!La()){for(var a in Ma){var b=ag[a];if(!b){b=bg[a];if(!b)continue;b=new b;ag[a]=b}var c=b.f();c.requestTimeMs=Math.round(eb());c[$f[a]]=Ma[a];b.g(a,c,{});delete Ma[a]}La()||fg()}}
function fg(){cb(cg);cg=B(eg,A("LOGGING_BATCH_TIMEOUT",1E4))}
;function gg(){if(!hg&&!ig||!window.JSON)return null;var a;try{a=hg.get("yt-player-two-stage-token")}catch(b){}if(!v(a))try{a=ig.get("yt-player-two-stage-token")}catch(b){}if(!v(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var ig,jg=new Of;ig=jg.isAvailable()?new Lf(jg):null;var hg,kg=new Pf;hg=kg.isAvailable()?new Lf(kg):null;function lg(a,b,c,d){var e={};e.eventTimeMs=Math.round(d||eb());e[a]=b;dg({endpoint:"log_event",Oa:e},c)}
;function mg(){this.b=Qe();ng||(ng=og(this.b))}
var ng=null;function og(a){return(new L(function(b){ae(A("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){db(c)}})})).then(function(){})}
mg.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;Va(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;Va(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",A("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
mg.prototype.f=function(){return{context:Re(this.b)}};
mg.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=B(function(){e||(e=!0,c.O&&c.O())},c.timeout));
pg(this,a,b,function(a){if(!e)if(e=!0,d&&cb(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function pg(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":A("VISITOR_DATA")},method:"POST",body:wa(c)},f=w(a.i,a);ng.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function qg(){this.b=Qe()}
qg.prototype.f=function(){return{context:Re(this.b)}};
qg.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":A("VISITOR_DATA")},C:b,Pa:"JSON",O:c.O,F:c.F,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=ye(String(n.location.href)),e=n.__OVERRIDE_SID;null==e&&(e=(new Fa(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==d&&(d=(new Fa(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(n.location.href);
c=f&&d&&e?[e,Ye(ye(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=A("SESSION_INDEX",0));Ud("//"+this.b.Wb+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function rg(){if(null==r("_lact",window)){var a=parseInt(A("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&sg();Q(document,"keydown",sg);Q(document,"keyup",sg);Q(document,"mousedown",sg);Q(document,"mouseup",sg);Kd("page-mouse",sg);Kd("page-scroll",sg);Kd("page-resize",sg)}}
function sg(){null==r("_lact",window)&&(rg(),r("_lact",window));var a=x();q("_lact",a,window);Od("USER_ACTIVE")}
function tg(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;var ug={},vg=0;function wg(a,b,c){xg(yg(),{attachChild:{csn:a,parentVisualElement:Ne(b),visualElements:[Ne(c)]}},void 0)}
function zg(a,b){var c=yg(),d=ub(b,function(a){return Ne(a)});
xg(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function xg(a,b,c){b.eventTimeMs=Math.round(eb());b.lactMs=tg();c&&(b.clientData=Ag(c));dg({endpoint:"log_interaction",Oa:b},a)}
function Ag(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=ub(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function yg(){return Pe("enable_youtubei_innertube")?qg:Tf}
;function Bg(){var a=A("ROOT_VE_TYPE",void 0);return a?new Le(void 0,a,void 0):null}
function Cg(){var a=A("client-screen-nonce",void 0);a||(a=A("EVENT_ID",void 0));return a}
;function Dg(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):B(a,b||0)}
;r("yt.scheduler.instance.timerIdMap_");var Eg=[],Fg=!1;function Gg(){function a(){Fg=!0;"google_ad_status"in window?z("DCLKSTAT",1):z("DCLKSTAT",2)}
ae("//static.doubleclick.net/instream/ad_status.js",a);Eg.push(Dg(function(){Fg||"google_ad_status"in window||(he("//static.doubleclick.net/instream/ad_status.js",a),z("DCLKSTAT",3))},5E3))}
function Hg(){return parseInt(A("DCLKSTAT",0),10)}
;var Ig=x().toString();function Jg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=A("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=A("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Jb(H(window.location.href)[3]||null);f&&e.push(f);f=Jb(H(d)[3]||null);if(xb(e,f)||!f&&0==d.lastIndexOf("/",0)){Pe("autoescape_tempdata_url")&&(e=document.createElement("a"),Kc(e,d),d=e.href);var f=H(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||Cg();d=
"ST-"+Ya(d).toString(36);e=b?Ob(b):"";Ha.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new Le(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k,h;k=void 0===k?{}:k;h=void 0===h?"":h;c=window.location;a=Kb(Nb([a],k))+h;a=a instanceof Qb?a:Ub(a);c.href=Sb(a)}return!0}
;function Kg(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Oa(Lg);this.assets=a.assets||{};this.attrs=a.attrs||Oa(Mg);this.params=a.params||Oa(Ng);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Lg={enablejsapi:1},Mg={},Ng={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Og(a){a instanceof Kg||(a=new Kg(a));return a}
function Pg(a){var b=new Kg,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ba(d)?Oa(d):d}return b}
;function Qg(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,k,h,m;if(fb)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){g=null}else h=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=h.appendChild(m);if(g&&"GetVariable"in g)try{k=g.GetVariable("$version")}catch(u){k=""}h&&m&&h.removeChild(m);(g=k||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
aa(Qg);function Rg(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function Sg(){D.call(this);this.b=new M;mb(this,na(nb,this.b))}
y(Sg,D);Sg.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.b.subscribe(a,b,c)};
Sg.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.b.unsubscribe(a,b,c)};
Sg.prototype.R=function(a){return this.isDisposed()?!1:this.b.R(a)};
Sg.prototype.M=function(a,b){return this.isDisposed()?!1:this.b.M.apply(this.b,arguments)};function Tg(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
l=Tg.prototype;l.getHeight=function(){return this.bottom-this.top};
l.contains=function(a){return this&&a?a instanceof Tg?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.l>=this.left&&a.l<=this.right&&a.o>=this.top&&a.o<=this.bottom:!1};
l.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
l.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
l.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Ug(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Ug.prototype.contains=function(a){return a instanceof I?a.l>=this.left&&a.l<=this.left+this.width&&a.o>=this.top&&a.o<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
Ug.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Ug.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Ug.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Vg(a,b){var c=Wc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Wg(a,b){return Vg(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Xg(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}J&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Yg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Zg(a){var b=$g;if("none"!=Wg(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function $g(a){var b=a.offsetWidth,c=a.offsetHeight,d=nc&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Ea(b,c):(a=Xg(a),new Ea(a.right-a.left,a.bottom-a.top))}
function ah(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function bh(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?ah(a,c):0}
var ch={thin:2,medium:4,thick:6};function dh(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in ch?ch[c]:ah(a,c)}
;function eh(a,b,c,d){D.call(this);this.g=b||null;this.D="*";this.i=c||null;this.b=null;this.channel=d||null;this.J=!!a;this.H=w(this.N,this);window.addEventListener("message",this.H)}
y(eh,D);eh.prototype.N=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&v(a.data)){var b;try{b=ua(a.data)}catch(c){return}if(!(null==b||this.J&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.D=a.origin:db(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.b=b.id;this.f&&(this.f(),this.f=null);break;case "command":this.j&&(this.A&&!xb(this.A,b.func)||this.j(b.func,b.args))}}};
eh.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var d=wa(a);c.postMessage(d,this.D)}catch(e){db(e,"WARNING")}}};
eh.prototype.w=function(){window.removeEventListener("message",this.H);eh.B.w.call(this)};function fh(a,b,c){eh.call(this,a,b,c||A("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.A=this.f=this.j=null}
y(fh,eh);function gh(){var a=Sf();return a?a:null}
;var hh;var ih=E,ih=ih.toLowerCase();if(-1!=ih.indexOf("android")){var jh=ih.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(jh)hh=Number(jh[1]);else{var kh={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},lh=[],mh=0,nh;for(nh in kh)lh[mh++]=nh;var oh=ih.match("("+lh.join("|")+")");hh=oh?kh[oh[0]]:0}}else hh=void 0;var ph=E,qh=ph.match(/\((BB10|PlayBook|BlackBerry);/);!qh||2>qh.length||ph.match(/Version\/(\d+\.\d+)/);E.match(/Mozilla\/[\d\.]+ \(Mobile;.* rv:([\d\.]+)\) Gecko\/[\d\.]+ Firefox\/[\d\.]+/);var rh;var sh=E,th=sh.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!th||2>th.length)rh=void 0;else{var uh=sh.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);rh=uh&&6==uh.length?Number(uh[5].replace("_",".")):0}0<=rh&&0<=E.search("Safari")&&E.search("Version");var vh=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],wh=['audio/mp4; codecs="mp4a.40.2"'];J&&K("9");!nc||K("528");mc&&K("1.9b")||J&&K("8")||kc&&K("9.5")||nc&&K("528");mc&&!K("8")||J&&K("9");function xh(a){D.call(this);this.b=[];this.f=a||this}
y(xh,D);function yh(a,b,c,d){d=bb(w(d,a.f));d={target:b,name:c,qa:d};b.addEventListener(c,d.qa,void 0);a.b.push(d)}
function zh(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.qa)}}
xh.prototype.w=function(){zh(this);xh.B.w.call(this)};function R(a,b){this.version=a;this.args=b}
function Ah(a){if(!a.Wa){var b={};a.call(b);a.Wa=b.version}return a.Wa}
function Bh(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Ah(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};var Ch=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Dh(a){R.call(this,1,arguments)}
y(Dh,R);var Eh=new S("timing-sent",Dh);var Fh=r("yt.pubsub2.instance_")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.R;M.prototype.publish=M.prototype.M;M.prototype.clear=M.prototype.clear;q("yt.pubsub2.instance_",Fh,void 0);var Gh=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Gh,void 0);var Hh=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Hh,void 0);var Ih=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Ih,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function T(a,b){var c=Jh();c&&c.publish.call(c,a.toString(),a,b)}
function U(a,b,c){var d=Jh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Gh[e])try{if(g&&a instanceof S&&a!=d)try{g=Bh(a.b,g)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(c||window,g)}catch(h){db(h)}};
Ih[a.toString()]?r("yt.scheduler.instance")?Dg(f,void 0):B(f,0):f()}});
Gh[e]=!0;Hh[a.toString()]||(Hh[a.toString()]=[]);Hh[a.toString()].push(e);return e}
function Kh(a){var b=Jh();b&&("number"==typeof a&&(a=[a]),G(a,function(a){b.unsubscribeByKey(a);delete Gh[a]}))}
function Jh(){return r("yt.pubsub2.instance_")}
;function Lh(a,b,c){D.call(this);this.b=a;this.i=b||0;this.f=c;this.g=w(this.nb,this)}
y(Lh,D);l=Lh.prototype;l.ca=0;l.w=function(){Lh.B.w.call(this);this.stop();delete this.b;delete this.f};
l.start=function(a){this.stop();var b=this.g;a=p(a)?a:this.i;if(!fa(b))if(b&&"function"==typeof b.handleEvent)b=w(b.handleEvent,b);else throw Error("Invalid listener argument");this.ca=2147483647<Number(a)?-1:n.setTimeout(b,a||0)};
l.stop=function(){this.isActive()&&n.clearTimeout(this.ca);this.ca=0};
l.isActive=function(){return 0!=this.ca};
l.nb=function(){this.ca=0;this.b&&this.b.call(this.f)};var Mh={vc:!0},Nh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},Oh=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Ph=w(Ch.clearResourceTimings||Ch.webkitClearResourceTimings||Ch.mozClearResourceTimings||Ch.msClearResourceTimings||Ch.oClearResourceTimings||t,Ch);
function Qh(a,b){if(!b&&"_"!=a[0]){var c=a;Ch.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),Ch.mark(c))}var c=Rh(),d=b||eb();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(Sh()["tick_"+a]=b)||eb();Pe("csi_on_gel")?(c=Th(),"_start"==a?lg("latencyActionBaselined",{clientActionNonce:c},mg,b):lg("latencyActionTicked",{tickName:a,clientActionNonce:c},mg,b),c=!0):c=!1;if(c=!c)c=!r("yt.timing.pingSent_");if(c&&(d=A("TIMING_ACTION",void 0),c=Rh(),r("yt.timing.ready_")&&d&&c._start&&Uh())){var d=
!0,e=A("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&Vh()}}
function Wh(){var a=Xh().info.yt_lt="hot_bg";Sh().info_yt_lt=a;if(Pe("csi_on_gel"))if("yt_lt"in Nh){var b={},c=Nh.yt_lt;xb(Oh,c)&&(a=!!a);b[c]=a;a=Th();b.clientActionNonce=a;lg("latencyActionInfo",b,mg)}else db(Error("Unknown label yt_lt logged with GEL CSI."))}
function Uh(){var a=Rh();if(a.aft)return a.aft;for(var b=A("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Vh(){if(!Pe("csi_on_gel")){var a=Rh(),b=Xh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&ca(a[d])){var e=d.slice(1);if(e in Mh){var f=ub(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Yh(f,e),Zh(),Ph(),$h(!1,void 0),z("PREVIOUS_ACTION",A("TIMING_ACTION")),z("TIMING_ACTION","")}else{var g=A("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:A("TIMING_ACTION",void 0)},k=b.srt;delete b.srt;void 0===a.srt&&(k||0===k||(k=Ch.timing||{},k=Math.max(0,k.responseStart-k.navigationStart),isNaN(k)&&b.pt&&(k=b.pt)),k||0===k)&&(b.srt=Math.round(k));if(b.h5jse){var h=window.location.protocol+r("ytplayer.config.assets.js");
(h=Ch.getEntriesByName?Ch.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-h.responseEnd):delete b.h5jse}a.aft=Uh();ai()&&"youtube"==g&&(Wh(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=eb();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);Yh(f,e,void 0);T(Eh,new Dh(b.aft+(k||0)))}}}
function Yh(a,b,c){if(Pe("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||pe(a,void 0)}catch(f){pe(a,void 0)}else pe(a);$h(!0,c)}
function Th(){var a=Xh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=x();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(Ig)for(c=1,d=0;d<Ig.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^Ig.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Xh().nonce=a}return a}
function Rh(){return Xh().tick}
function Sh(){var a=Xh();"gel"in a||(a.gel={});return a.gel}
function Xh(){return r("ytcsi.data_")||Zh()}
function Zh(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function $h(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function ai(){var a=Rh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Xh().info.yt_pvis}
;new Lh(bi,1E3);function bi(){Qh("vptl",0);Qh("vpl",0)}
;var ci={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function di(a,b){D.call(this);this.A=this.j=a;this.Z=b;this.H=!1;this.f={};this.ga=this.Y=null;this.$=new M;mb(this,na(nb,this.$));this.i={};this.J=this.ha=this.g=this.pa=this.b=null;this.da=!1;this.N=this.D=this.W=this.X=null;this.ia={};this.hb=["onReady"];this.ea=new xh(this);mb(this,na(nb,this.ea));this.na=null;this.Ca=NaN;this.fa={};ei(this);this.L("onDetailedError",w(this.Cb,this));this.L("onTabOrderChange",w(this.kb,this));this.L("onTabAnnounce",w(this.Da,this));this.L("WATCH_LATER_VIDEO_ADDED",
w(this.Db,this));this.L("WATCH_LATER_VIDEO_REMOVED",w(this.Eb,this));Oc||(this.L("onMouseWheelCapture",w(this.Ab,this)),this.L("onMouseWheelRelease",w(this.Bb,this)));this.L("onAdAnnounce",w(this.Da,this));this.T=new xh(this);mb(this,na(nb,this.T));this.oa=!1;this.ma=null}
y(di,D);var fi=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=di.prototype;l.ya=function(a,b){this.isDisposed()||(gi(this,a),hi(this,b),this.H&&ii(this))};
function gi(a,b){a.pa=b;a.b=Pg(b);a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.Z,a.b.attrs.id=a.Z);a.A.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.Z;a.ha||(a.ha=ji(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.A.style.width=Yg(Number(c)||c,!0));if(c=a.b.attrs.height)a.A.style.height=Yg(Number(c)||c,!0)}
l.qb=function(){return this.pa};
function ii(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function ki(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Rg(Qg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function li(a,b){if((!b||(5!=(ci[b.errorCode]||5)?0:-1!=fi.indexOf(b.errorCode)))&&ki(a)){var c=mi(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Og(c));d.args.autoplay=1;d.args.html5_unavailable="1";gi(a,d);hi(a,"flash")}}
function hi(a,b){if(!a.isDisposed()){if(!b){var c;if(!(c=!a.b.html5&&ki(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==hh)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?vh:wh,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=ni(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?ki(a)?"flash":"unsupported":"html5"}("flash"==b?a.Ub:a.Vb).call(a)}}
function ni(a){var b=!0,c=mi(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
l.Vb=function(){if(!this.da){var a=ni(this);a&&"html5"==oi(this)?(this.J="html5",this.H||this.V()):(pi(this),this.J="html5",a&&this.W?(this.j.appendChild(this.W),this.V()):(this.b.loaded=!0,this.X=w(function(){var a=this.j,c=Pg(this.b);r("yt.player.Application.create")(a,c);this.V()},this),this.da=!0,a?this.X():(ae(this.b.assets.js,this.X),ie(this.b.assets.css))))}};
l.Ub=function(){var a=Pg(this.b);if(!this.D){var b=mi(this);b&&(this.D=document.createElement("SPAN"),this.D.tabIndex=0,yh(this.ea,this.D,"focus",this.Ka),this.N=document.createElement("SPAN"),this.N.tabIndex=0,yh(this.ea,this.N,"focus",this.Ka),b.parentNode&&b.parentNode.insertBefore(this.D,b),b.parentNode&&b.parentNode.insertBefore(this.N,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==oi(this))this.J="flash",this.H||this.V();else{pi(this);this.J=
"flash";this.b.loaded=!0;var b=Qg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Rg(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;if(c){var b=v(b)?Xc(b):b,d=Oa(a.attrs);d.tabindex=0;var e=Oa(a.params);e.flashvars=Ob(a.args);if(fb){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var k in d)a.setAttribute(k,d[k]);for(var h in e)a.setAttribute(h,e[h])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.V()}};
l.Ka=function(){mi(this).focus()};
function mi(a){var b=Xc(a.g);!b&&a.A&&a.A.querySelector&&(b=a.A.querySelector("#"+a.g));return b}
l.V=function(){if(!this.isDisposed()){var a=mi(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.da=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))li(this);else{ei(this);this.H=!0;a=mi(this);a.addEventListener&&(this.Y=qi(this,a,"addEventListener"));a.removeEventListener&&(this.ga=qi(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=qi(this,a,d))}for(var e in this.i)this.Y(e,
this.i[e]);ii(this);this.ha&&this.ha(this.f);this.$.M("onReady",this.f)}else this.Ca=B(w(this.V,this),50)}};
function qi(a,b,c){var d=b[c];return function(){try{return a.na=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.na=e,db(e,"WARNING"))}}}
function ei(a){a.H=!1;if(a.ga)for(var b in a.i)a.ga(b,a.i[b]);for(var c in a.fa)cb(parseInt(c,10));a.fa={};a.Y=null;a.ga=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=w(a.L,a);a.f.removeEventListener=w(a.Mb,a);a.f.destroy=w(a.dispose,a);a.f.getLastError=w(a.rb,a);a.f.getPlayerType=w(a.sb,a);a.f.getCurrentVideoConfig=w(a.qb,a);a.f.loadNewVideoConfig=w(a.ya,a);a.f.isReady=w(a.Xb,a)}
l.Xb=function(){return this.H};
l.L=function(a,b){if(!this.isDisposed()){var c=ji(this,b);if(c){if(!xb(this.hb,a)&&!this.i[a]){var d=ri(this,a);this.Y&&this.Y(a,d)}this.$.subscribe(a,c);"onReady"==a&&this.H&&B(na(c,this.f),0)}}};
l.Mb=function(a,b){if(!this.isDisposed()){var c=ji(this,b);c&&this.$.unsubscribe(a,c)}};
function ji(a,b){var c=b;if("string"==typeof b){if(a.ia[b])return a.ia[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.ia[b]=c}return c?c:null}
function ri(a,b){var c="ytPlayer"+b+a.Z;a.i[b]=c;n[c]=function(c){var d=B(function(){if(!a.isDisposed()){a.$.M(b,c);var e=a.fa,g=String(d);g in e&&delete e[g]}},0);
Na(a.fa,String(d))};
return c}
l.kb=function(a){a=a?ed:dd;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.D||b==this.N||(b.focus(),b!=document.activeElement));)b=a(b)};
l.Da=function(a){Od("a11y-announce",a)};
l.Cb=function(a){li(this,a)};
l.Db=function(a){Od("WATCH_LATER_VIDEO_ADDED",a)};
l.Eb=function(a){Od("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ab=function(){this.oa||(Sc?(this.ma=bd(document),yh(this.T,window,"scroll",this.Jb),yh(this.T,this.j,"touchmove",this.Hb)):(yh(this.T,this.j,"mousewheel",this.Na),yh(this.T,this.j,"wheel",this.Na)),this.oa=!0)};
l.Bb=function(){zh(this.T);this.oa=!1};
l.Na=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Jb=function(){window.scrollTo(this.ma.l,this.ma.o)};
l.Hb=function(a){a.preventDefault()};
l.sb=function(){return this.J||oi(this)};
l.rb=function(){return this.na};
function oi(a){return(a=mi(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function pi(a){Qh("dcp");a.cancel();ei(a);a.J=null;a.b&&(a.b.loaded=!1);var b=mi(a);"html5"==oi(a)?a.W=b:b&&b.destroy&&b.destroy();cd(a.j);zh(a.ea);a.D=null;a.N=null}
l.cancel=function(){this.X&&he(this.b.assets.js,this.X);cb(this.Ca);this.da=!1};
l.w=function(){pi(this);if(this.W&&this.b)try{this.W.destroy()}catch(b){db(b)}this.ia=null;for(var a in this.i)n[this.i[a]]=null;this.pa=this.b=this.f=null;delete this.j;delete this.A;di.B.w.call(this)};var si={},ti="player_uid_"+(1E9*Math.random()>>>0);function ui(a,b){a=v(a)?Xc(a):a;b=Og(b);var c=ti+"_"+ia(a),d=si[c];if(d)return d.ya(b),d.f;d=new di(a,c);si[c]=d;Od("player-added",d.f);mb(d,na(vi,d));B(function(){d.ya(b)},0);
return d.f}
function vi(a){si[a.Z]=null}
function wi(a){a=Xc(a);if(!a)return null;var b=ti+"_"+ia(a),c=si[b];c||(c=new di(a,b),si[b]=c);return c.f}
;var xi=r("yt.abuse.botguardInitialized")||we;q("yt.abuse.botguardInitialized",xi,void 0);var yi=r("yt.abuse.invokeBotguard")||xe;q("yt.abuse.invokeBotguard",yi,void 0);var zi=r("yt.abuse.dclkstatus.checkDclkStatus")||Hg;q("yt.abuse.dclkstatus.checkDclkStatus",zi,void 0);var Ai=r("yt.player.exports.navigate")||Jg;q("yt.player.exports.navigate",Ai,void 0);var Bi=r("yt.player.embed")||ui;q("yt.player.embed",Bi,void 0);var Ci=r("yt.player.getPlayerByElement")||wi;q("yt.player.getPlayerByElement",Ci,void 0);
var Di=r("yt.util.activity.init")||rg;q("yt.util.activity.init",Di,void 0);var Ei=r("yt.util.activity.getTimeSinceActive")||tg;q("yt.util.activity.getTimeSinceActive",Ei,void 0);var Fi=r("yt.util.activity.setTimestamp")||sg;q("yt.util.activity.setTimestamp",Fi,void 0);function Gi(a){R.call(this,1,arguments);this.b=a}
y(Gi,R);function V(a){R.call(this,1,arguments);this.b=a}
y(V,R);function Hi(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
y(Hi,R);function Ii(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
y(Ii,R);function Ji(a,b,c){R.call(this,1,arguments);this.b=a;this.subscriptionId=b}
y(Ji,R);function Ki(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=g||null}
y(Ki,R);
var Li=new S("subscription-batch-subscribe",Gi),Mi=new S("subscription-batch-unsubscribe",Gi),Ni=new S("subscription-subscribe",Ii),Oi=new S("subscription-subscribe-loading",V),Pi=new S("subscription-subscribe-loaded",V),Qi=new S("subscription-subscribe-success",Ji),Ri=new S("subscription-subscribe-external",Ii),Si=new S("subscription-unsubscribe",Ki),Ti=new S("subscription-unsubscirbe-loading",V),Ui=new S("subscription-unsubscribe-loaded",V),Vi=new S("subscription-unsubscribe-success",V),Wi=new S("subscription-external-unsubscribe",
Ki),Xi=new S("subscription-enable-ypc",V),Yi=new S("subscription-disable-ypc",V),Zi=new S("subscription-prefs",Hi),$i=new S("subscription-prefs-success",Hi),aj=new S("subscription-prefs-failure",Hi);function bj(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Pb(c,"mode",b));c=Pb("/signin?context=popup","next",c);c=Pb(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=Kd("LOGGED_IN",function(b){Nd(A("LOGGED_IN_PUBSUB_KEY",void 0));z("LOGGED_IN",!0);a(b)});
z("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",Od,void 0);function cj(){var a=A("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!A("SESSION_INDEX")&&!A("LOGGED_IN"))}
;function dj(a,b){(a=Xc(a))&&a.style&&(a.style.display=b?"":"none",hf(a,"hid",!b))}
function ej(a){G(arguments,function(a){!ea(a)||a instanceof Element?dj(a,!0):G(a,function(a){ej(a)})})}
function fj(a){G(arguments,function(a){!ea(a)||a instanceof Element?dj(a,!1):G(a,function(a){fj(a)})})}
;var gj={},hj="ontouchstart"in document;function ij(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return md(c,function(a){return ef(a,b)},!0,d)}
function W(a){var b="mouseover"==a.type&&"mouseenter"in gj||"mouseout"==a.type&&"mouseleave"in gj,c=a.type in gj||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=gj[b],d;for(d in c.G){var e=ij(b,d,a.target);e&&!md(a.relatedTarget,function(a){return a==e},!0)&&c.M(d,e,b,a)}}if(b=gj[a.type])for(d in b.G)(e=ij(a.type,d,a.target))&&b.M(d,e,a.type,a)}}
Q(document,"blur",W,!0);Q(document,"change",W,!0);Q(document,"click",W);Q(document,"focus",W,!0);Q(document,"mouseover",W);Q(document,"mouseout",W);Q(document,"mousedown",W);Q(document,"keydown",W);Q(document,"keyup",W);Q(document,"keypress",W);Q(document,"cut",W);Q(document,"paste",W);hj&&(Q(document,"touchstart",W),Q(document,"touchend",W),Q(document,"touchcancel",W));function jj(a){this.j=a;this.g={};this.ka=[];this.i=[]}
function X(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
jj.prototype.unregister=function(){Nd(this.ka);this.ka.length=0;Kh(this.i);this.i.length=0};
jj.prototype.init=t;jj.prototype.dispose=t;function kj(a,b,c){a.i.push(U(b,c,a))}
function lj(a,b,c){var d=X(a,void 0),e=w(c,a);b in gj||(gj[b]=new M);gj[b].subscribe(d,e);a.g[c]=e}
function mj(a,b,c){if(b in gj){var d=gj[b];d.unsubscribe(X(a,void 0),a.g[c]);0>=d.ba()&&(d.dispose(),delete gj[b])}delete a.g[c]}
function nj(a,b){gb(a,"tooltip-text",b)}
;function oj(){jj.call(this,"tooltip");this.b=0;this.f={}}
y(oj,jj);aa(oj);l=oj.prototype;l.register=function(){lj(this,"mouseover",this.ja);lj(this,"mouseout",this.P);lj(this,"focus",this.Ia);lj(this,"blur",this.Ga);lj(this,"click",this.P);lj(this,"touchstart",this.Va);lj(this,"touchend",this.la);lj(this,"touchcancel",this.la)};
l.unregister=function(){mj(this,"mouseover",this.ja);mj(this,"mouseout",this.P);mj(this,"focus",this.Ia);mj(this,"blur",this.Ga);mj(this,"click",this.P);mj(this,"touchstart",this.Va);mj(this,"touchend",this.la);mj(this,"touchcancel",this.la);this.dispose();oj.B.unregister.call(this)};
l.dispose=function(){for(var a in this.f)this.P(this.f[a]);this.f={}};
l.ja=function(a){if(!(this.b&&1E3>x()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(ib(a,"tooltip-hide-timer"),cb(b));var b=w(function(){pj(this,a);ib(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=B(b,c);
gb(a,"tooltip-show-timer",b.toString());a.title&&(nj(a,qj(a)),a.title="");b=ia(a).toString();this.f[b]=a}};
l.P=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(cb(b),ib(a,"tooltip-show-timer"));b=w(function(){if(a){var b=Xc(rj(this,a));b&&(sj(b),b&&b.parentNode&&b.parentNode.removeChild(b),ib(a,"content-id"));(b=Xc(rj(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}ib(a,"tooltip-hide-timer")},this);
b=B(b,50);gb(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
l.Ia=function(a){this.b=0;this.ja(a)};
l.Ga=function(a){this.b=0;this.P(a)};
l.Va=function(a,b,c){c.changedTouches&&(this.b=0,(a=ij(b,X(this),c.changedTouches[0].target))&&this.ja(a))};
l.la=function(a,b,c){c.changedTouches&&(this.b=x(),(a=ij(b,X(this),c.changedTouches[0].target))&&this.P(a))};
function tj(a,b){nj(a,b);var c=C(a,"content-id");(c=Xc(c))&&fd(c,b)}
function qj(a){return C(a,"tooltip-text")||a.title}
function pj(a,b){if(b){var c=qj(b);if(c){var d=Xc(rj(a,b));if(!d){d=document.createElement("div");d.id=rj(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var k=uj(a,b),h=rj(a,b,"content");g.id=h;gb(b,"content-id",h);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var m=
id(b),h=rj(a,b,"arialabel"),f=document.createElement("div");ff(f,X(a,"arialabel"));f.id=h;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;fd(f,m);b.setAttribute("aria-labelledby",h);h=gh()||document.body;h.appendChild(f);h.appendChild(d);tj(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",ff(g,X(a,"normal-wrap")));g=ef(b,X(a,"reverse"));vj(a,b,d,e,k,g)||vj(a,b,d,e,k,!g);var u=X(a,"tip-visible");
B(function(){ff(d,u)},0)}}}}
function vj(a,b,c,d,e,f){var g;hf(c,X(a,"tip-reverse"),f);var k=0;f&&(k=1);a=Zg(b);f=new I((a.width-10)/2,f?a.height:0);var h=Wc(b);g=new I(0,0);var m;m=h?Wc(h):document;m=!J||9<=Number(Bc)||ad(Uc(m).b)?m.documentElement:m.body;b!=m&&(m=Xg(b),h=bd(Uc(h).b),g.l=m.left+h.l,g.o=m.top+h.o);f=new I(g.l+f.l,g.o+f.o);f=new I(f.l,f.o);g=(k&8&&"rtl"==Wg(c,"direction")?k^4:k)&-9;k=Zg(c);h=new Ea(k.width,k.height);f=new I(f.l,f.o);h=new Ea(h.width,h.height);0!=g&&(g&4?f.l-=h.width+0:g&2&&(f.l-=h.width/2),g&
1&&(f.o-=h.height+0));g=new Ug(0,0,0,0);g.left=f.l;g.top=f.o;g.width=h.width;g.height=h.height;f=g;g=0;if(!(g&496||(g=f,h=new I(g.left,g.top),h instanceof I?(g=h.l,h=h.o):(g=h,h=void 0),c.style.left=Yg(g,!1),c.style.top=Yg(h,!1),h=new Ea(f.width,f.height),k==h||k&&h&&k.width==h.width&&k.height==h.height)))if(k=h,g=ad(Uc(Wc(c)).b),!J||K("10")||g&&K("8"))f=c.style,mc?f.MozBoxSizing="border-box":nc?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(k.width,0)+"px",f.height=Math.max(k.height,
0)+"px";else if(f=c.style,g){if(J){g=bh(c,"paddingLeft");h=bh(c,"paddingRight");m=bh(c,"paddingTop");var u=bh(c,"paddingBottom");g=new Tg(m,h,u,g)}else g=Vg(c,"paddingLeft"),h=Vg(c,"paddingRight"),m=Vg(c,"paddingTop"),u=Vg(c,"paddingBottom"),g=new Tg(parseFloat(m),parseFloat(h),parseFloat(u),parseFloat(g));if(!J||9<=Number(Bc))h=Vg(c,"borderLeftWidth"),m=Vg(c,"borderRightWidth"),u=Vg(c,"borderTopWidth"),da=Vg(c,"borderBottomWidth"),h=new Tg(parseFloat(u),parseFloat(m),parseFloat(da),parseFloat(h));
else{h=dh(c,"borderLeft");m=dh(c,"borderRight");var u=dh(c,"borderTop"),da=dh(c,"borderBottom"),h=new Tg(u,m,da,h)}f.pixelWidth=k.width-h.left-g.left-g.right-h.right;f.pixelHeight=k.height-h.top-g.top-g.bottom-h.bottom}else f.pixelWidth=k.width,f.pixelHeight=k.height;f=$c(window);1==c.nodeType?(c=Xg(c),h=new I(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,h=new I(c.clientX,c.clientY));c=Zg(d);m=Math.floor(c.width/2);k=!!(f.height<h.o+a.height);a=!!(h.o<a.height);g=!!(h.l<m);f=!!(f.width<
h.l+m);h=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||g)h=-5;else if("right"==b||f)h=20-c.width-3;b=Math.floor(h)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(k||a)}
function rj(a,b,c){a=X(a);var d=b.__yt_uid_key;d||(d=Qf(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function uj(a,b){var c=null;pc&&ef(b,X(a,"masked"))&&((c=Xc("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),ej(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function sj(a){var b=Xc("yt-uix-tooltip-shared-mask"),c=b&&md(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),fj(b),document.body.appendChild(b))}
;function wj(){jj.call(this,"subscription-button")}
y(wj,jj);aa(wj);wj.prototype.register=function(){lj(this,"click",this.ra);kj(this,Oi,this.Ma);kj(this,Pi,this.La);kj(this,Qi,this.Gb);kj(this,Ti,this.Ma);kj(this,Ui,this.La);kj(this,Vi,this.Ib);kj(this,Xi,this.zb);kj(this,Yi,this.yb)};
wj.prototype.unregister=function(){mj(this,"click",this.ra);wj.B.unregister.call(this)};
var ld={za:"hover-enabled",Za:"yt-uix-button-subscribe",$a:"yt-uix-button-subscribed",Yb:"ypc-enabled",ab:"yt-uix-button-subscription-container",bb:"yt-subscription-button-disabled-mask-container"},xj={Zb:"channel-external-id",cb:"subscriber-count-show-when-subscribed",eb:"subscriber-count-tooltip",fb:"subscriber-count-title",$b:"href",ac:"insecure",Aa:"is-subscribed",cc:"parent-url",dc:"clicktracking",gb:"style-type",Ba:"subscription-id",ec:"target",ib:"ypc-enabled"};l=wj.prototype;
l.ra=function(a){var b=C(a,"href"),c=C(a,"insecure"),d=cj(),c=c&&!0;if(b)a=C(a,"target")||"_self",window.open(b,a);else if(!c)if(d){b=C(a,"channel-external-id");d=C(a,"clicktracking");if(C(a,"ypc-enabled"))var c=C(a,"ypc-item-type"),e=C(a,"ypc-item-id"),c={itemType:c,itemId:e,subscriptionElement:a};else c=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");T(Si,new Ki(b,f,c,a,d,e))}else T(Ni,new Ii(b,c,d,e))}else yj(this,a)};
l.Ma=function(a){this.U(a.b,this.Ta,!0)};
l.La=function(a){this.U(a.b,this.Ta,!1)};
l.Gb=function(a){this.U(a.b,this.Ua,!0,a.subscriptionId)};
l.Ib=function(a){this.U(a.b,this.Ua,!1)};
l.zb=function(a){this.U(a.b,this.ob)};
l.yb=function(a){this.U(a.b,this.mb)};
l.Ua=function(a,b,c){b?(gb(a,xj.Aa,"true"),c&&gb(a,xj.Ba,c)):(ib(a,xj.Aa),ib(a,xj.Ba));zj(a)};
l.Ta=function(a,b){var c;c=kd(a);hf(c,ld.bb,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function zj(a){var b=C(a,xj.gb),c=!!C(a,"is-subscribed"),b="-"+b,d=ld.$a+b;hf(a,ld.Za+b,!c);hf(a,d,c);C(a,xj.eb)&&!C(a,xj.cb)&&(b=X(oj.getInstance()),hf(a,b,!c),a.title=c?"":C(a,xj.fb));c?B(function(){ff(a,ld.za)},1E3):gf(a,ld.za)}
l.ob=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(ff(a,"ypc-enabled"),gb(a,xj.ib,"true"))};
l.mb=function(a){C(a,"ypc-enabled")&&(gf(a,"ypc-enabled"),ib(a,"ypc-enabled"))};
function Aj(a,b){return tb(Yc(X(a)),function(a){return b==C(a,"channel-external-id")},a)}
l.jb=function(a,b,c){var d=Db(arguments,2);G(a,function(a){b.apply(this,zb(a,d))},this)};
l.U=function(a,b,c){var d=Aj(this,a);this.jb.apply(this,zb([d],Db(arguments,1)))};
function yj(a,b){var c=w(function(a){a.discoverable_subscriptions&&z("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ra(b)},a);
bj(c,"subscribe")}
;var Bj=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Bj,void 0);function Cj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Dj(a,b,c){v(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Ej(a)}
function Ej(a,b,c){if(ga(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Fj(a,b,c,d){if(ga(a)&&!ca(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};v(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function Gj(a){var b=a.video_id||a.videoId;if(v(b)){var c=gg()||{},d=gg()||{};p(void 0)?d[b]=void 0:delete d[b];var e=x()+3E5,f=ig;if(f&&window.JSON){v(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;var Hj=null,Ij=[];function Jj(a){return{externalChannelId:a.externalChannelId,xb:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Kj(a){Lj(Jj(a))}
function Lj(a){cj()?(T(Ni,new Ii(a.externalChannelId,a.xb?{itemType:"U",itemId:a.externalChannelId}:null)),a=Ob({event:"subscribe",source:a.source}),pe("/gen_204?"+a,void 0)):Mj(a)}
function Mj(a){bj(function(b){b.subscription_ajax&&Lj(a)},null)}
function Nj(a){a=Jj(a);T(Si,new Ki(a.externalChannelId,a.subscriptionId,null));a=Ob({event:"unsubscribe",source:a.source});pe("/gen_204?"+a,void 0)}
function Oj(a){Hj&&Hj.channelSubscribed(a.b,a.subscriptionId)}
function Pj(a){Hj&&Hj.channelUnsubscribed(a.b)}
;function Qj(a){D.call(this);this.f=a;this.f.subscribe("command",this.Qa,this);this.g={};this.i=!1}
y(Qj,D);l=Qj.prototype;l.start=function(){this.i||this.isDisposed()||(this.i=!0,Rj(this.f,"RECEIVING"))};
l.Qa=function(a,b){if(this.i&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(v(c.event)&&(c=c.event,!(c in this.g))){var d=w(this.Ob,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":v(c.event)&&Sj(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Tj(a,b||{}),c=this.b[a].apply(this.b,c),(c=Uj(a,c))&&this.i&&!this.isDisposed()&&Rj(this.f,a,c))}}};
l.Ob=function(a,b){this.i&&!this.isDisposed()&&Rj(this.f,a,this.sa(a,b))};
l.sa=function(a,b){if(null!=b)return{value:b}};
function Sj(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
l.w=function(){this.f.unsubscribe("command",this.Qa,this);this.f=null;for(var a in this.g)Sj(this,a);Qj.B.w.call(this)};new M;function Vj(a,b,c){Sg.call(this);this.f=a;this.g=b;this.i=c}
y(Vj,Sg);function Rj(a,b,c){if(!a.isDisposed()){var d=a.f,e=a.g;a=a.i;d.isDisposed()||e!=d.b||(b={id:a,command:b},c&&(b.data=c),d.b.postMessage(wa(b),d.g))}}
Vj.prototype.w=function(){this.g=this.f=null;Vj.B.w.call(this)};function Wj(){var a=this.f=new fh(!!A("WIDGET_ID_ENFORCE")),b=w(this.Lb,this);a.j=b;a.A=null;this.f.channel="widget";if(a=A("WIDGET_ID"))this.f.b=a;this.i=[];this.A=!1;this.j={}}
l=Wj.prototype;l.Lb=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,Xj(this,c)),this.j[c]=!0)}else this.Xa(a,b)};
l.Xa=function(){};
function Xj(a,b){return w(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.pb=function(){this.A=!0;this.sendMessage("initialDelivery",this.ta());this.sendMessage("onReady");G(this.i,this.Sa,this);this.i=[]};
l.ta=function(){return null};
function Yj(a,b){a.sendMessage("infoDelivery",b)}
l.Sa=function(a){this.A?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Sa({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};function Zj(a,b,c){D.call(this);this.b=a;this.g=c;this.i=Q(window,"message",w(this.j,this));this.f=new Vj(this,a,b);mb(this,na(nb,this.f))}
y(Zj,D);Zj.prototype.j=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,v(c))){try{c=ua(c)}catch(d){return}c.command&&(a=this.f,b=c.command,c=c.data,a.isDisposed()||a.M("command",b,c))}};
Zj.prototype.w=function(){Zf(this.i);this.b=null;Zj.B.w.call(this)};function ak(a,b){Qj.call(this,b);this.b=a;this.start()}
y(ak,Qj);ak.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
ak.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Tj(a,b){switch(a){case "loadVideoById":return b=Ej(b),Gj(b),[b];case "cueVideoById":return b=Ej(b),Gj(b),[b];case "loadVideoByPlayerVars":return Gj(b),[b];case "cueVideoByPlayerVars":return Gj(b),[b];case "loadPlaylist":return b=Fj(b),Gj(b),[b];case "cuePlaylist":return b=Fj(b),Gj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Uj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ak.prototype.sa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ak.B.sa.call(this,a,b)};
ak.prototype.w=function(){ak.B.w.call(this);delete this.b};function bk(a){Wj.call(this);this.b=a;this.g=[];this.addEventListener("onReady",w(this.Fb,this));this.addEventListener("onVideoProgress",w(this.Sb,this));this.addEventListener("onVolumeChange",w(this.Tb,this));this.addEventListener("onApiChange",w(this.Nb,this));this.addEventListener("onPlaybackQualityChange",w(this.Pb,this));this.addEventListener("onPlaybackRateChange",w(this.Qb,this));this.addEventListener("onStateChange",w(this.Rb,this))}
y(bk,Wj);l=bk.prototype;l.Xa=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Cj(a)){var c;c=b;if(ga(c[0])&&!ca(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Ej.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Dj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Fj.apply(window,c)}c=d}Gj(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Cj(a)&&Yj(this,this.ta())}};
l.Fb=function(){var a=w(this.pb,this);this.f.f=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ta=function(){if(!this.b)return null;var a=this.b.getApiInterface();yb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(h){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=x()/1E3;return b};
l.Rb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Yj(this,a)};
l.Pb=function(a){Yj(this,{playbackQuality:a})};
l.Qb=function(a){Yj(this,{playbackRate:a})};
l.Nb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var h=f[g],m=this.b.getOption(e,h);b[e][h]=m}}this.sendMessage("apiInfoDelivery",b)};
l.Tb=function(){Yj(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Sb=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Yj(this,a)};
l.dispose=function(){bk.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};var ck=document,Y=window;function dk(){var a=ek;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Sa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;var fk=!1,gk="";function hk(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(fk=!0,a.description)){gk=hk(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){fk=!0;gk="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],fk=!(!a||!a.enabledPlugin))){gk=hk(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");fk=!0;gk=hk(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");fk=!0;gk="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),fk=!0,gk=hk(b.GetVariable("$version"))}catch(c){}})();
var ik=fk,jk=gk;(function(){var a;return pc?(a=/Windows NT ([0-9.]+)/,(a=a.exec(E))?a[1]:"0"):oc?(a=/10[_.][0-9_.]+/,(a=a.exec(E))?a[0].replace(/_/g,"."):"10"):qc?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(E))?a[1]:""):rc||sc||tc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(E))?a[1].replace(/_/g,"."):""):""})();function kk(a){return(a=a.exec(E))?a[1]:""}
(function(){if(Oc)return kk(/Firefox\/([0-9.]+)/);if(J||lc||kc)return Ac;if(Sc)return kk(/Chrome\/([0-9.]+)/);if(Tc&&!(Hb()||F("iPad")||F("iPod")))return kk(/Version\/([0-9.]+)/);if(Pc||Qc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(E);if(a)return a[1]+"."+a[2]}else if(Rc)return(a=kk(/Android\s+([0-9.]+)/))?a:kk(/Version\/([0-9.]+)/);return""})();(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a})();var lk=!!window.google_async_iframe_id,ek=lk&&window.parent||window;function mk(a){nk();this.enabled=Math.random()<a;this.events=[]}
var nk=n.performance&&n.performance.now?w(n.performance.now,n.performance):x;mk.prototype.install=function(a){a=a||window;a.google_js_reporting_queue=a.google_js_reporting_queue||[];this.events=a.google_js_reporting_queue};(new mk(1)).install(function(){if(lk&&!dk()){var a="."+ck.domain;try{for(;2<a.split(".").length&&!dk();)ck.domain=a=a.substr(a.indexOf(".")+1),ek=window.parent}catch(b){}dk()||(ek=window)}return ek}());var ok=(new Date).getTime();function pk(a){ra.call(this,a.message||a.description||a.name);this.b=a instanceof ud}
y(pk,ra);pk.prototype.name="BiscottiError";function qk(a,b){this.f=a;this.b=b}
qk.prototype.then=function(a,b,c){try{if(p(this.f))return a?rd(a.call(c,this.f)):rd(this.f);if(p(this.b)){if(!b)return sd(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?sd(this.b):rd(d)}throw Error("Invalid Result_ state");}catch(e){return sd(e)}};
Ra(qk);var se={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},rk=null;function sk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return tk(""),rk=new qk(""),"";a=JSON.parse(a.substr(4)).id;tk(a);rk=new qk(a);uk(18E5,2);return a}
function vk(a,b){var c=new pk(b);tk("");rk=new qk(void 0,c);0<a&&uk(12E4,a-1);throw c;}
function uk(a,b){B(function(){var a=w(vk,n,b),a=re().then(sk,a);td(a,null,t,void 0)},a)}
function tk(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function wk(){}
function xk(){try{var a;try{var b=r("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!rk){var d=w(vk,n,2);rk=re().then(sk,d)}c=rk}a=c}catch(e){a=sd(e)}a.then(yk,wk);B(xk,18E5)}catch(e){db(e)}}
function yk(a){var b;a:{try{b=window.top.location.href}catch(u){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:ok,flash:jk||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=Y.history.length}catch(u){c=0}b.u_his=c;b.u_java=!!Y.navigator&&"unknown"!==typeof Y.navigator.javaEnabled&&!!Y.navigator.javaEnabled&&Y.navigator.javaEnabled();Y.screen&&(b.u_h=Y.screen.height,b.u_w=Y.screen.width,b.u_ah=Y.screen.availHeight,b.u_aw=Y.screen.availWidth,b.u_cd=Y.screen.colorDepth);
Y.navigator&&Y.navigator.plugins&&(b.u_nplug=Y.navigator.plugins.length);Y.navigator&&Y.navigator.mimeTypes&&(b.u_nmime=Y.navigator.mimeTypes.length);b.bid=a;b.ca_type=ik?"flash":"image";if(Pe("enable_server_side_search_pyv")||Pe("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(u){}try{var f=a.outerWidth,g=a.outerHeight}catch(u){}try{var k=a.innerWidth,h=a.innerHeight}catch(u){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?
a.screen.availTop:void 0,f,g,k,h];var m;e=window.top||Y;try{m=e.document&&!e.document.body?new Ea(-1,-1):$c(e||window).round()}catch(u){m=new Ea(-12245933,-12245933)}e=0;window.SVGElement&&document.createElementNS&&(e|=1);oa(b,{bc:e,bih:m.height,biw:m.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[ck.webkitVisibilityState||ck.mozVisibilityState||ck.visibilityState||""]||0,wgl:!!Y.WebGLRenderingContext})}Ud("/ad_data_204",{tb:!0,C:b})}
;function zk(){this.b=A("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Ha.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
aa(zk);var Z=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Z,void 0);function Ak(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Bk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ck(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
zk.prototype.get=function(a,b){Bk(a);Ak(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
zk.prototype.set=function(a,b){Bk(a);Ak(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
zk.prototype.remove=function(a){Bk(a);Ak(a);delete Z[a]};
zk.prototype.clear=function(){Z={}};function Dk(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&pe(c.data.follow_on_url)}}
;function Ek(a){R.call(this,1,arguments);this.qa=a}
y(Ek,R);function Fk(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
y(Fk,R);function Gk(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(Gk,R);function Hk(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
y(Hk,R);function Ik(a){R.call(this,1,arguments)}
y(Ik,R);var Jk=new S("ypc-core-load",Ek),Kk=new S("ypc-guide-sync-success",Fk),Lk=new S("ypc-purchase-success",Gk),Mk=new S("ypc-subscription-cancel",Ik),Nk=new S("ypc-subscription-cancel-success",Hk),Ok=new S("ypc-init-subscription",Ik);var Pk=!1,Qk=[],Rk=[];function Sk(a){a.b?Pk?T(Ri,a):T(Jk,new Ek(function(){T(Ok,new Ik(a.b))})):Tk(a.f,a.i,a.g,a.source)}
function Uk(a){a.b?Pk?T(Wi,a):T(Jk,new Ek(function(){T(Mk,new Ik(a.b))})):Vk(a.f,a.subscriptionId,a.i,a.g,a.source)}
function Wk(a){Xk(Ab(a.b))}
function Yk(a){Zk(Ab(a.b))}
function $k(a){al(a.g,a.f,a.b)}
function bl(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(Qi,new Ji(b,c,a.b.channelInfo))}
function cl(a){var b=a.b;Ia(a.f,function(a,d){T(Qi,new Ji(d,a,b[d]))})}
function dl(a){T(Vi,new V(a.f.itemId));a.b&&a.b.length&&(el(a.b,Vi),el(a.b,Xi))}
function Tk(a,b,c,d){var e=new V(a);T(Oi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=A("PLAYBACK_ID"))&&(c.plid=d);(d=A("EVENT_ID"))&&(c.ei=d);b&&fl(b,c);Vd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",xa:f,C:c,F:function(b,c){var d=c.response;T(Qi,new Ji(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Od("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Dk(d.actions)},
wa:function(){T(Pi,e)}})}
function Vk(a,b,c,d,e){var f=new V(a);T(Ti,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=A("PLAYBACK_ID"))&&(d.plid=a);(a=A("EVENT_ID"))&&(d.ei=a);c&&fl(c,d);Vd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",xa:g,C:d,F:function(a,b){var c=b.response;T(Vi,f);c.actions&&Dk(c.actions)},
wa:function(){T(Ui,f)}})}
function al(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Hi(a,b,c);Vd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",C:d,onError:function(){T(aj,e)},
F:function(){T($i,e)}})}}
function Xk(a){if(a.length){var b=Cb(a,0,40);T("subscription-batch-subscribe-loading");el(b,Oi);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");el(b,Pi)};
Vd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",C:c,F:function(c,f){d();var e=f.response,k=e.id;if(ca(k)&&k.length==b.length){var h=e.channel_info_map;G(k,function(a,c){var d=b[c];T(Qi,new Ji(d,a,h[d]))});
a.length?Xk(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function Zk(a){if(a.length){var b=Cb(a,0,40);T("subscription-batch-unsubscribe-loading");el(b,Ti);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");el(b,Ui)};
Vd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",C:c,F:function(){d();el(b,Vi);a.length&&Zk(a)},
onError:function(){d()}})}}
function el(a,b){G(a,function(a){T(b,new V(a))})}
function fl(a,b){var c=Zb(a);oa(b,c)}
;var gl=null,hl=null,il=null,jl={};function kl(a){lg(a.payload_name,a.payload,Tf,void 0)}
function ll(a){var b=a.id;a=a.ve_type;var c=Me++;a=new Le(void 0,a,c);jl[b]=a;b=Cg();c=Bg();b&&c&&wg(b,c,a)}
function ml(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(z("client-screen-nonce",b),z("ROOT_VE_TYPE",a),a=Bg()))for(var c in jl)wg(b,a,jl[c])}
function nl(a){jl[a.id]=new Le(a.tracking_params)}
function ol(a){var b=Cg();a=jl[a.id];b&&a&&xg(yg(),{click:{csn:b,visualElement:Ne(a)}},void 0)}
function pl(a){a=a.ids;var b=Cg();if(b){for(var c=[],d=0;d<a.length;d++){var e=jl[a[d]];e&&c.push(e)}c.length&&zg(b,c)}}
function ql(){var a=gl.startInteractionLogging;a&&a()}
;q("yt.setConfig",z,void 0);q("yt.setMsg",function(a){ab($a,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||A("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||A("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=vg)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(v(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,k,h=!1;try{g=a.lineNumber||a.ic||"Not available"}catch(da){g="Not available",h=!0}try{k=a.fileName||a.filename||a.sourceURL||
n.$googDebugFname||f}catch(da){k="Not available",h=!0}a=!h&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(ug[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={xa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},C:{url:A("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.C.stack=e);for(var m in c)b.C["client."+m]=c[m];if(m=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)b.C[u]=m[u];Vd("/error_204",b);ug[a.message]=!0;vg++}}},void 0);
q("writeEmbed",function(){var a=A("PLAYER_CONFIG",void 0);"1"!=a.privembed&&xk();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=A("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);A("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Gj(a.args);gl=b=ui("player",a);b.addEventListener("onScreenChanged",ml);b.addEventListener("onLogClientVeCreated",ll);b.addEventListener("onLogServerVeCreated",nl);b.addEventListener("onLogToGel",
kl);b.addEventListener("onLogVeClicked",ol);b.addEventListener("onLogVesShown",pl);b.addEventListener("onReady",ql);var d=A("POST_MESSAGE_ID","player");A("ENABLE_JS_API")?il=new bk(b):A("ENABLE_POST_API")&&v(d)&&v(c)&&(hl=new Zj(window.parent,d,c),il=new ak(b,hl.f));A("ENABLE_CAST_API")||(a.args.enablecastapi="0");A("BG_P")&&(A("BG_I")||A("BG_IU"))&&ve();Gg();Hj=b;Hj.addEventListener("SUBSCRIBE",Kj);Hj.addEventListener("UNSUBSCRIBE",Nj);Ij.push(U(Qi,Oj),U(Vi,Pj))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){pe(a+"mac_204?action_fcts=1");return!0},void 0);
var rl=bb(function(){Qh("ol");Pk=!0;Rk.push(U(Ni,Sk),U(Si,Uk));Pk||Rk.push(U(Ri,Sk),U(Wi,Uk),U(Li,Wk),U(Mi,Yk),U(Zi,$k),U(Lk,bl),U(Nk,dl),U(Kk,cl));var a=zk.getInstance(),b=1<window.devicePixelRatio;if(!!((Ck("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Ck(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Z)b.push(e+"="+escape(Z[e]));Ha.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),sl=bb(function(){var a=
gl;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();A("PL_ATT")&&(ue=null);for(var a=0,b=Eg.length;a<b;a++){var c=Eg[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):cb(c)}}Eg.length=0;a=ee("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Qd(a),b.parentNode.removeChild(b);Fg=!1;z("DCLKSTAT",0);Nd(Qk);Qk.length=0;Kh(Rk);Rk.length=0;Pk=!1;Hj&&(Hj.removeEventListener("SUBSCRIBE",Lj),Hj.removeEventListener("UNSUBSCRIBE",Nj));Hj=null;Kh(Ij);Ij.length=0;
pb(il,hl);if(a=gl)a.removeEventListener("onScreenChanged",ml),a.removeEventListener("onLogClientVeCreated",ll),a.removeEventListener("onLogServerVeCreated",nl),a.removeEventListener("onLogToGel",kl),a.removeEventListener("onLogVeClicked",ol),a.removeEventListener("onLogVesShown",pl),a.removeEventListener("onReady",ql),a.destroy();jl={}});
window.addEventListener?(window.addEventListener("load",rl),window.addEventListener("unload",sl)):window.attachEvent&&(window.attachEvent("onload",rl),window.attachEvent("onunload",sl));var tl=wj.getInstance(),ul=X(tl);ul in Bj||(tl.register(),tl.ka.push(Kd("yt-uix-init-"+ul,tl.init,tl)),tl.ka.push(Kd("yt-uix-dispose-"+ul,tl.dispose,tl)),Bj[ul]=tl);}).call(this);
